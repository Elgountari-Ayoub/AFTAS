import {Ranking} from "./Ranking";

export interface Competition {
  code:string,
  location:string,
  date:string,
  startTime:string,
  endTime:string,
  amount:number,
  numberOfParticipants:number,
}