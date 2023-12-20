import { Competition } from './Competition';
import { Member } from './Member';
import { RankingId } from './RankingId';

export interface Ranking {
  id: RankingId | null;
  member: Member | null;
  competition: Competition | null;
  rank: number | null;
  score: number | null;
}
