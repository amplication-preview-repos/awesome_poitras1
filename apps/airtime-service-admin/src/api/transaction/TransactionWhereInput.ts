import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  slug?: StringNullableFilter;
};
