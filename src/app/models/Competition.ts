import {Ranking} from "./Ranking";

export interface Competition {
  code:string | null,
  location:string | null,
  date:string | null,
  startTime:string | null,
  endTime:string | null,
  amount:number | null,
  numberOfParticipants:number | null,
}