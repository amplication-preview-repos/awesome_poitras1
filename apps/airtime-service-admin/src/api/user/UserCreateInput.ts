import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone_number: bigint;
  roles: InputJsonValue;
  username: string;
};
