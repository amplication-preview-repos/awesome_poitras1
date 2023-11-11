import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "slug";

export const TransactionTitle = (record: TTransaction): string => {
  return record.slug?.toString() || String(record.id);
};
