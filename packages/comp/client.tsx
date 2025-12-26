"use client";
import { useParams } from "next/navigation";

export default function Client() {
  const { id } = useParams();
  return <div>{id}</div>;
}
