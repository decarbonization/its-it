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
 * Apply a given value to the specified function
 * unless the value is `undefined` or `null`.
 * 
 * @param value A possibly null or undefined value.
 * @param body A function which will accept the known-defined
 * value, possibly returning a transformed value.
 * @returns The result of `body` or `undefined` if there was no value.
 */
export function ifNotUndef<T, U>(
    value: T | undefined | null,
    body: (value: T) => U
): U | undefined {
    if (value === undefined || value === null) {
        return undefined;
    }
    return body(value);
}
