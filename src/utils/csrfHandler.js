import axios from "axios";

/**
 * CSRF Handler Utility
 *
 * This module provides utilities for handling Cross-Site Request Forgery (CSRF) protection
 * when making API requests to a Laravel backend with Sanctum authentication.
 *
 * Features:
 * - Preconfigured axios instance with credentials and headers
 * - Functions to fetch and manage CSRF tokens
 * - Helper for extracting cookies
 * - Simplified API request method with automatic CSRF protection
 *
 * This is particularly useful when building a React frontend that needs to communicate
 * with a Laravel backend that uses Sanctum for authentication and CSRF protection.
 */

/**
 * Base URL for the Laravel backend API
 * Should be updated to match your environment (development, staging, production)
 * @type {string}
 */
const LARAVEL_API_URL = "http://localhost/pbs/public";

/**
 * Preconfigured axios instance with default settings for Laravel API communication
 *
 * Configuration includes:
 * - withCredentials: true - Ensures cookies are sent with cross-origin requests
 * - Default headers for JSON content type
 *
 * @type {import('axios').AxiosInstance}
 */
const api = axios.create({
  withCredentials: true, // Important for cookies to be sent/received
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * Fetches a CSRF token from Laravel Sanctum and returns it
 *
 * Makes a request to the Laravel CSRF token endpoint and extracts the token
 * from the response. This token is needed for any non-GET requests to
 * Laravel routes protected by the VerifyCsrfToken middleware.
 *
 * @returns {Promise<string>} The CSRF token
 * @throws {Error} If the token cannot be retrieved
 *
 * @example
 * // Get a CSRF token before submitting a form
 * async function submitForm(formData) {
 *   const token = await getCsrfToken();
 *   // Use token in your request...
 * }
 */
export const getCsrfToken = async () => {
  try {
    // Make sure the URL matches your Laravel Sanctum CSRF cookie endpoint
    const { data } = await api.get(`${LARAVEL_API_URL}/api/csrf-token`);

    // Get the XSRF-TOKEN cookie
    const token = data.csrfToken;

    if (!token) {
      throw new Error("Failed to retrieve CSRF token");
    }

    // Set the token in the default headers for all future requests
    // api.defaults.headers.common["X-XSRF-TOKEN"] = token;

    return token;
  } catch (error) {
    console.error("CSRF Token Error:", error);
    throw error;
  }
};

/**
 * Helper function to get a cookie value by name
 *
 * Parses the document.cookie string to find and return the value of a specific cookie.
 * Useful for extracting CSRF tokens or other values stored in cookies.
 *
 * @param {string} name - Cookie name to retrieve
 * @returns {string|null} Cookie value or null if not found
 *
 * @example
 * // Get the XSRF-TOKEN cookie
 * const csrfToken = getCookie('XSRF-TOKEN');
 *
 * @example
 * // Check if user has a session cookie
 * const hasSession = getCookie('laravel_session') !== null;
 */
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return null;
};

/**
 * Makes an API request with automatic CSRF protection
 *
 * This is a wrapper around the axios instance that:
 * 1. Automatically fetches a fresh CSRF token
 * 2. Includes the token in the request headers
 * 3. Handles errors consistently
 *
 * @param {string} method - HTTP method (get, post, put, delete)
 * @param {string} endpoint - API endpoint (will be appended to LARAVEL_API_URL)
 * @param {object} [data=null] - Request payload (for POST, PUT requests)
 * @returns {Promise<any>} Response data from the API
 * @throws {Error} If the request fails
 *
 * @example
 * // GET request
 * const users = await apiRequest('get', '/api/users');
 *
 * @example
 * // POST request with data
 * const newUser = await apiRequest('post', '/api/users', {
 *   name: 'John Doe',
 *   email: 'john@example.com'
 * });
 *
 * @example
 * // PUT request
 * const updatedUser = await apiRequest('put', '/api/users/1', {
 *   name: 'Jane Doe'
 * });
 *
 * @example
 * // DELETE request
 * await apiRequest('delete', '/api/users/1');
 */
export const apiRequest = async (method, endpoint, data = null) => {
  try {
    // Ensure we have a CSRF token before making the request
    const token = await getCsrfToken();

    const response = await api[method.toLowerCase()](
      `${LARAVEL_API_URL}${endpoint}`,
      data,
      {
        headers: {
          "X-CSRF-TOKEN": token,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(`${method} Request Error:`, error);
    throw error;
  }
};

export default api;
