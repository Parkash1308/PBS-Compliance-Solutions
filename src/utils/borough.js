/**
 * Borough Utility Functions
 *
 * This module provides utility functions for converting between New York City borough names
 * and their corresponding numeric identifiers. These functions are useful when working with
 * NYC open data, property records, or other systems that use borough codes.
 *
 * Borough ID mapping:
 * 1 - MANHATTAN
 * 2 - BRONX
 * 3 - BROOKLYN
 * 4 - QUEENS
 * 5 - STATEN ISLAND (abbreviated as "STATEN IS" in some systems)
 * 0 - Unknown/Invalid borough
 */

/**
 * Converts a borough name to its corresponding numeric ID
 *
 * @param {string} boro - The borough name (case-sensitive)
 * @returns {number} The numeric borough ID (1-5), or 0 if the borough name is invalid
 *
 * @example
 * // Get ID for Manhattan
 * const manhattanId = getBoroId("MANHATTAN"); // Returns 1
 *
 * @example
 * // Use with property data
 * const propertyBoroId = getBoroId(propertyData.borough);
 */
export const getBoroId = (boro) => {
  switch (boro) {
    case "MANHATTAN":
      return 1;
    case "BRONX":
      return 2;
    case "BROOKLYN":
      return 3;
    case "QUEENS":
      return 4;
    case "STATEN IS":
      return 5;
    default:
      return 0;
  }
};

/**
 * Converts a numeric borough ID to its corresponding borough name
 *
 * @param {number} id - The numeric borough ID (1-5)
 * @returns {string} The borough name, or an empty string if the ID is invalid
 *
 * @example
 * // Get borough name for ID 3
 * const brooklynName = getIdFromBoro(3); // Returns "BROOKLYN"
 *
 * @example
 * // Use with borough code from database
 * const boroughName = getIdFromBoro(propertyRecord.boroCode);
 */
export const getIdFromBoro = (id) => {
  switch (id) {
    case 1:
      return "MANHATTAN";
    case 2:
      return "BRONX";
    case 3:
      return "BROOKLYN";
    case 4:
      return "QUEENS";
    case 5:
      return "STATEN IS";
    default:
      return "";
  }
};
