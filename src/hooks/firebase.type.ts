export const enum SignInType {
  Google,
  Facebook,
}

export interface FbUser {
  name: string;
  email: string;
  photoUrl: string | null;
}
