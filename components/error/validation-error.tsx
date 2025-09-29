import React from "react";

export default function ValidationError({
  errors,
  field,
}: {
  errors?: Record<string, string[]>;
  field: string;
}) {
  if (!errors) return null;
  return (
    <ul className="text-sm text-destructive mt-1">
      {errors[field].map((message: string, index: number) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
}
