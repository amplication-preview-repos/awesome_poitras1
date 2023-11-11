import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Created At" source="createdAt" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Create>
  );
};
