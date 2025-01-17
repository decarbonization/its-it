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
 * Returns the single item of a given collection, throwing a `RangeError`
 * if the collection is empty or has more than one item.
 * 
 * @param items A counted collection that should have exactly one item.
 * @returns The single item of `items`.
 * @throws A `RangeError` if `items.length !== 1`
 */
export function onlyOne<T>(items: ArrayLike<T>): T {
    if (items.length !== 1) {
        throw new RangeError(`Expected exactly one item in ${items}`)
    }
    return items[0];
}
