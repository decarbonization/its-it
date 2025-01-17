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

import { describe, expect, it } from "@jest/globals";
import { map } from "../lib/map";
import { range } from "../lib/range";

describe("map", () => {
    it("should transform every element", () => {
        const oneToFive = map(range(0, 5), (n) => `${n + 1}`);
        expect(Array.from(oneToFive)).toStrictEqual(["1", "2", "3", "4", "5"]);
    });

    it("should pass an incrementing offset", () => {
        const decoratedThings = map(["keyboard", "mouse", "headphones"], (thing, offset) => `${offset}: ${thing}`);
        expect(Array.from(decoratedThings)).toStrictEqual(["0: keyboard", "1: mouse", "2: headphones"]);
    });
});
