import { StateScheme } from "app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getCounter } from "./getCounter";

describe("getCounter test", () => {
    test("should return counter value", () => {
        const state: DeepPartial<StateScheme> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateScheme)).toEqual({ value: 10 });
    });
});
