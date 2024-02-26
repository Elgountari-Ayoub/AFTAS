export interface User {
    id?: number | null,
    name: string | null,
    email: string | null,
    password: string | null,
    familyName: string | null,
    accessionDate: string | null,
    nationality: string | null,
    identityNumber: string | null,
    identityDocument: string
    isAccepted: boolean | null,
    role: string | null,
  }