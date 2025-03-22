import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn (classNames) Utility Function
 *
 * A utility function that combines the functionality of clsx and tailwind-merge
 * to efficiently handle conditional class names and resolve Tailwind CSS conflicts.
 *
 * Features:
 * - Accepts any number of class name arguments (strings, objects, arrays)
 * - Resolves conditional class names using clsx
 * - Properly merges Tailwind CSS classes using tailwind-merge
 * - Eliminates conflicting Tailwind classes (keeping only the last one)
 *
 * This function is particularly useful when:
 * - Working with conditional classes
 * - Combining base styles with variant-specific styles
 * - Merging component styles with user-provided className props
 *
 * @param {...(string|Object|Array)} inputs - Any number of class name arguments.
 *   - Strings: Regular class names ("btn", "text-red-500")
 *   - Objects: Conditional class names ({ 'text-red-500': isError })
 *   - Arrays: Nested combinations of strings and objects
 *
 * @returns {string} A string of merged class names with Tailwind conflicts resolved
 *
 * @example
 * // Basic usage with strings
 * cn('text-red-500', 'bg-blue-200', 'p-4');
 * // => 'text-red-500 bg-blue-200 p-4'
 *
 * @example
 * // With conditional classes
 * cn('btn', { 'bg-red-500': isError, 'bg-green-500': isSuccess });
 *
 * @example
 * // Resolving Tailwind conflicts (last one wins)
 * cn('text-red-500', 'text-blue-700');
 * // => 'text-blue-700' (not 'text-red-500 text-blue-700')
 *
 * @example
 * // Usage in a component with user-provided className
 * function Button({ className, children }) {
 *   return (
 *     <button className={cn(
 *       'px-4 py-2 rounded bg-blue-500 text-white',
 *       className
 *     )}>
 *       {children}
 *     </button>
 *   );
 * }
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
