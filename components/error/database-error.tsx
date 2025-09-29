import React from 'react'

export default function DatabaseError({state}: {state: any}) {
  if (!state?.dbError) return null;
    return (
<div className='text-destructive'>
    <p >Database error:</p>
    <p>{state.dbError}</p>
</div>
  )
}
