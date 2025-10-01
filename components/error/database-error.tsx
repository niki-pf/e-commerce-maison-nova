import React from 'react'

export default function DatabaseError({ errors }: { errors: any }) {
  if (!errors?.dbError) return null;
  return (
    <div className="text-destructive">
      <p>Database error:</p>
      <p>{errors.dbError}</p>
    </div>
  );
}
