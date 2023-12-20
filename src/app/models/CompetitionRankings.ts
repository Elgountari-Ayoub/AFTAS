import { Competition } from "./Competition";
import { Member } from "./Member";
import { PaginationModel } from "./PaginationModel";
import {Ranking} from "./Ranking";

export interface CompetitionRankings {
  competition: Competition,
  rankings: PaginationModel<Ranking>
}