import { Rows, Seats, TierData } from "@bms/utilts/types";

export interface State {
  tiers: TierData[],
  selectedSeats: number[]
}