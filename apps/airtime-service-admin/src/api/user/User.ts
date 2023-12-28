import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone_number: bigint;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
