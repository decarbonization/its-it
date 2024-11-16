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

import { describe, expect, it } from "@jest/globals";
import { range } from "../lib/range";

describe("range", () => {
    it("should count up", () => {
        expect(Array.from(range(0, 5))).toStrictEqual([0, 1, 2, 3, 4]);
    });

    it("should count up by step", () => {
        expect(Array.from(range(0, 15, 5))).toStrictEqual([0, 5, 10]);
        expect(Array.from(range(0, 10, 3))).toStrictEqual([0, 3, 6, 9]);
    })

    it("should count down", () => {
        expect(Array.from(range(4, -1))).toStrictEqual([4, 3, 2, 1, 0]);
    });

    it("should count down by step", () => {
        expect(Array.from(range(20, 0, -5))).toStrictEqual([20, 15, 10, 5]);
        expect(Array.from(range(10, 0, -3))).toStrictEqual([10, 7, 4, 1]);
    });

    it("should produce empty range", () => {
        expect(Array.from(range(0, 0))).toStrictEqual([]);
    });

    it("should reject invalid steps", () => {
        expect(() => range(0, 10, -1)).toThrowError();
        expect(() => range(10, 0, 1)).toThrowError();
    });
});
