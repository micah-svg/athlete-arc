import { week1Passing } from "./week1-passing";
import {
  week2ServeReceive,
  week3Setting,
  week4Serving,
  week5Attacking,
  week6Blocking,
  week7Defense,
  week8Transition,
  week9Communication,
  week10Pressure,
} from "./technical-weeks-2-10";

export const technicalTrackWeeks = [
  week1Passing,
  week2ServeReceive,
  week3Setting,
  week4Serving,
  week5Attacking,
  week6Blocking,
  week7Defense,
  week8Transition,
  week9Communication,
  week10Pressure,
];

export const technicalTrackById = Object.fromEntries(technicalTrackWeeks.map((w) => [w.id, w]));
