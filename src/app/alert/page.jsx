"use client"; // Marks this as a client-side component in Next.js

/**
 * @file Alert Page Component
 * @description Provides a form for users to subscribe to property alerts by registering their contact information
 * and selecting properties they're interested in monitoring
 * @requires react - For component functionality and hooks
 * @requires axios - For API requests
 * @requires react-tag-input - For managing selected properties as tags
 * @requires use-debounce - For debouncing search input
 */

import { getBoroId, getIdFromBoro } from "@/utils/borough";
import { apiRequest } from "@/utils/csrfHandler";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import { useDebounce } from "use-debounce";

// Configure axios defaults for all requests
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost/pbs/public";

/**
 * Alert Component
 * Allows users to subscribe for property alerts by providing contact information
 * and selecting properties from a searchable database
 * @returns {JSX.Element} The rendered Alert subscription form
 */
const Alert = () => {
  // Form State - Tracks user input for contact information
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [properties, setProperties] = useState([]); // Selected properties as tags
  const [addProperties, setAddProperties] = useState(false); // Toggle for property selection UI

  // Property Search State - Manages the property search functionality
  const [borough, setBorough] = useState(""); // Selected borough for property search
  const [houseNumber, setHouseNumber] = useState(""); // House number for property search
  const [streetSearch, setStreetSearch] = useState(""); // Street name search input
  const [searchResults, setSearchResults] = useState([]); // Results from property search
  const [debouncedSearch] = useDebounce(streetSearch, 500); // Debounced search term to limit API calls
  const [isSearching, setIsSearching] = useState(false); // Loading state for search

  /**
   * Fetches matching streets based on search criteria
   * @param {string} inputValue - The street name to search for
   * @returns {Promise<void>}
   */
  const fetchStreets = useCallback(
    async (inputValue) => {
      // Don't search if required fields are missing or search term is too short
      if (!borough || !houseNumber || inputValue.length < 4) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        // Call API to search for properties matching criteria
        const data = await apiRequest("post", "/api/search-property", {
          borough: getBoroId(borough), // Convert borough name to ID
          house: houseNumber,
          term: inputValue,
        });

        setSearchResults(data);
      } catch (error) {
        console.error("Search Error:", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    },
    [borough, houseNumber]
  );

  // Effect to trigger search when debounced value changes
  useEffect(() => {
    fetchStreets(debouncedSearch);
  }, [debouncedSearch, fetchStreets]);

  /**
   * Adds a property to the selected properties list
   * @param {Object} tag - The property tag to add
   */
  const handleAddition = (tag) => {
    setProperties([...properties, tag]);
  };

  /**
   * Removes a property from the selected properties list
   * @param {number} index - The index of the property to remove
   */
  const handleDelete = (index) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  /**
   * Handles form submission to register for alerts
   * @param {React.FormEvent} e - The form submission event
   * @returns {Promise<void>}
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit alert registration data to API
      const data = await apiRequest("post", "/api/register-for-alerts", {
        name,
        contact,
        email,
        properties: properties,
      });

      console.log("Subscription Data:", data);

      // Reset form after successful submission
      setName("");
      setContact("");
      setEmail("");
      setProperties([]);
      setAddProperties(false);
      setBorough("");
      setHouseNumber("");
      setStreetSearch("");
      setSearchResults([]);

      alert("You have successfully subscribed for alerts!");
    } catch (error) {
      console.error("Subscription Error:", error);
      alert("An error occurred while subscribing for alerts!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First and Last Name"
            className="p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Contact Number"
            className="p-2 border rounded"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Property Selection Toggle Button */}
        <button
          type="button"
          onClick={() => setAddProperties(!addProperties)}
          className="w-full py-2 text-left border-b"
        >
          {addProperties ? "▼" : "▶"} I want to add my properties now!
        </button>

        {/* Collapsible Property Selection Section */}
        {addProperties && (
          <div className="space-y-4">
            {/* Property Search Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Borough Selection Dropdown */}
              <select
                className="p-2 border rounded"
                value={borough}
                onChange={(e) => setBorough(e.target.value)}
              >
                <option value="">Select Borough</option>
                {["MANHATTAN", "BRONX", "BROOKLYN", "QUEENS", "STATEN IS"].map(
                  (b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  )
                )}
              </select>

              {/* House Number Input */}
              <input
                type="text"
                placeholder="House Number"
                className="p-2 border rounded"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />

              {/* Street Search Input with Loading Indicator */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Street"
                  className="p-2 border rounded w-full"
                  value={streetSearch}
                  onChange={(e) => setStreetSearch(e.target.value)}
                />
                {/* Loading Spinner - Shows when search is in progress */}
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="animate-spin h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Search Results Container - Shows matching properties */}
            {(searchResults.length > 0 || isSearching) && (
              <div className="border rounded p-2 space-y-2 max-h-60 overflow-y-auto">
                {isSearching && searchResults.length === 0 ? (
                  <div className="p-2 text-gray-500 text-center">
                    Searching...
                  </div>
                ) : (
                  // Filter out properties that are already selected
                  searchResults
                    .filter(
                      (result) =>
                        !properties.some(
                          (property) => property.id === result.bin
                        )
                    )
                    .map((result) => (
                      <div
                        key={result.bin}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          // Add property to selected properties when clicked
                          handleAddition({
                            id: result.bin,
                            text: `${result.bin}: ${result.lhnd}to${
                              result.hhnd
                            }, ${result.stname}, ${getIdFromBoro(
                              Number(result.boro)
                            )} `,
                            ...result,
                          });
                          // setStreetSearch("");
                        }}
                      >
                        {result.bin}: {result.lhnd}
                        {" to"}
                        {result.hhnd}, {result.stname}
                      </div>
                    ))
                )}
                {/* No results message */}
                {!isSearching &&
                  searchResults.length === 0 &&
                  debouncedSearch.length >= 4 && (
                    <div className="p-2 text-gray-500 text-center">
                      No results found
                    </div>
                  )}
              </div>
            )}

            {/* Selected Properties Container - Shows properties user has selected */}
            <div className="max-h-60 overflow-y-auto border rounded p-2 mt-4">
              <ReactTags
                tags={properties}
                handleAddition={handleAddition}
                handleDelete={handleDelete}
                inputFieldPosition="bottom"
                allowAdditionFromPaste={false}
                allowDragDrop={false}
                // readOnly={true}
                inputProps={{
                  className: "hidden", // Hide the input field
                  placeholder: "",
                }}
                classNames={{
                  tags: "space-y-4", // Increased vertical spacing between tags
                  tagInput: "w-full hidden", // Hide the tag input container
                  tag: "bg-blue-100 px-2 py-1 rounded mr-2 block mb-3 flex justify-between items-center select-none", // Added select-none
                  remove: "cursor-pointer bg-red-500 text-white px-1 rounded", // Removed ml-2 as it's no longer needed
                }}
              />
            </div>
          </div>
        )}

        {/* Form Submission Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Subscribe for Alerts
        </button>
      </form>
    </div>
  );
};

export default Alert;
