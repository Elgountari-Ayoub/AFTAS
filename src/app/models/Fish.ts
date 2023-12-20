import { DecimalPipe } from "@angular/common";

export interface Fish {
  id: number | null,
  name: string | null,
  averageWeight: DecimalPipe | null,
}