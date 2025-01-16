/*
 * MIT No Attribution
 * 
 * Copyright 2024-2025 Peter "Kevin" Contreras
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this
 * software and associated documentation files (the "Software"), to deal in the Software
 * without restriction, including without limitation the rights to use, copy, modify,
 * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * A `string` or an object with a length or size like `Array`, `Map`, `Set`, etc.
 */
export type PossiblyEmptyContainer =
    | string
    | { readonly length: number }
    | { readonly size: number };

/**
 * Check whether a given container is empty.
 * 
 * @param container A container like a string, array, set, etc.
 * @returns `true` if `container` has no elements; `false` otherwise.
 */
export default function isEmpty(container: PossiblyEmptyContainer): boolean {
    switch (typeof container) {
        case 'string':
            return container.length === 0;
        case 'object':
            if (container === null) {
                return false;
            }
            if ('length' in container) {
                return container.length === 0;
            }
            if ('size' in container) {
                return container.size === 0;
            }
            return false;
        default:
            return false;
    }
}
