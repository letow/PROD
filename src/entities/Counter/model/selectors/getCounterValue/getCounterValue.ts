import { getCounter } from "./../getCounter/getCounter";
import { createSelector } from "@reduxjs/toolkit";
import { CounterScheme } from "../../types/counterScheme";

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterScheme) => counter.value
);
