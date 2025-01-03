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
import isEmpty, { PossiblyEmptyContainer } from "../lib/empty";

describe("empty", () => {
    it("should return false for falsey values", () => {
        expect(isEmpty(undefined as unknown as PossiblyEmptyContainer)).toStrictEqual(false);
        expect(isEmpty(null as unknown as PossiblyEmptyContainer)).toStrictEqual(false);
        expect(isEmpty(0 as unknown as PossiblyEmptyContainer)).toStrictEqual(false);
    });

    it("should work with strings", () => {
        expect(isEmpty("")).toStrictEqual(true);
        expect(isEmpty("hello")).toStrictEqual(false);
    });

    it("should work with objects that have a length", () => {
        expect(isEmpty({ length: 0 })).toStrictEqual(true);
        expect(isEmpty([])).toStrictEqual(true);

        expect(isEmpty({ length: 1 })).toStrictEqual(false);
        expect(isEmpty(["hello"])).toStrictEqual(false);
    });

    it("should work with objects that have a size", () => {
        expect(isEmpty({ size: 0 })).toStrictEqual(true);
        expect(isEmpty(new Set<string>())).toStrictEqual(true);

        expect(isEmpty({ size: 1 })).toStrictEqual(false);
        expect(isEmpty(new Set<string>().add("hello"))).toStrictEqual(false);
    });
});
