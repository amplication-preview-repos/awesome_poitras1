import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Created At" source="createdAt" />
        <TextInput label="slug" source="slug" />
      </SimpleForm>
    </Edit>
  );
};
