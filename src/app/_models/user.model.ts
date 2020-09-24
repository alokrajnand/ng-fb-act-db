export class UserAuthModel {
  email_address: String;
  password: String;
}


export interface User {
   uid: string;
   email: string;
   emailVerified: boolean;
}
