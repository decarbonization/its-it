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
import { arraySegmentBy } from "../lib/segment";

describe("segment", () => {
    describe("#arraySegmentBy", () => {
        it("should reject invalid segment sizes", () => {
            expect(() => arraySegmentBy([], -1)).toThrowError();
        });

        it("should return well-formed slices", () => {
            expect(arraySegmentBy([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
                [1, 2, 3],
                [4, 5, 6],
            ]);
        });

        it("should gracefully handle non-divisible lengths", () => {
            expect(arraySegmentBy([1, 2, 3, 4], 3)).toStrictEqual([
                [1, 2, 3],
                [4],
            ]);
        });

        it("should gracefully handle too-small arrays", () => {
            expect(arraySegmentBy([1, 2], 3)).toStrictEqual([
                [1, 2],
            ]);
        });
    });
});
