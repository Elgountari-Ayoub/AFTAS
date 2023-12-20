import { Competition } from './Competition';
import { Fish } from './Fish';
import { Member } from './Member';

export interface Hunting {
  id: string;
  numberOfFish: number | null;
  member: Member |null ;
  competition: Competition | null;
  fish: Fish | null;
}
