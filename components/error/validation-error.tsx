import React from "react";

export default function ValidationError({
  state,
  field,
}: {
  state: any;
  field: string;
}) {
  if (!state?.validationErrors?.[field]) return null;
  return (
    <ul className="text-sm text-destructive mt-1">
      {state.validationErrors[field].map((message: string, index: number) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
}
