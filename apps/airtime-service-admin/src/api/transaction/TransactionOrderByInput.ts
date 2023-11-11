import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  slug?: SortOrder;
  updatedAt?: SortOrder;
};
