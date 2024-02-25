export interface SignUpRequest {
  name: string | null;
  email: string | null;
  password: string | null;
  role?: string | null;
}
