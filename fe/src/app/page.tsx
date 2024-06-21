"use client"
import { getLists } from "@/api";
import Image from "next/image";
import { useState } from "react";
import Lists from "./components/lists";

export default function Home() {
  return (
    <div>
      <Lists />
    </div>
  );
}
