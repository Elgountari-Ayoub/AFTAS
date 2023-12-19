import { Competition } from "./Competition";
import { Member } from "./Member";

export interface Ranking {
  member: Member,
  competition: Competition,
  rank: number,
  score: number
}