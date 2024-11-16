/*
 * MIT No Attribution
 * 
 * Copyright 2024 Peter "Kevin" Contreras
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
 * Create an iterator which will create a specified number
 * of elements using a given factory function.
 * 
 * @param quantity The number of elements to create.
 * @param factory A function which will create the elements.
 * Accepts the index of the element and the previous element.
 */
export function fill<T>(quantity: number, factory: (index: number, previous: T | undefined) => T): Iterable<T> {
    if (quantity < 0) {
        throw new RangeError(`Cannot fill element a negative number of times`);
    }
    return (function*() {
        let previous: T | undefined = undefined;
        for (let i = 0; i < quantity; i++) {
            const current = factory(i, previous);
            yield current;
            previous = current;
        }
    })();
}
