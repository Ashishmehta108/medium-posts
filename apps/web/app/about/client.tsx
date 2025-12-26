"use client";

import { useState } from "react";
type dummydata={
    id:string
}

export default function ClientExample({data}:{
    data:dummydata
}) {
  const [name,setName]=useState<string>(data.id)
  return <div>This is client component

    <div>{name}</div>
  </div>;
}
