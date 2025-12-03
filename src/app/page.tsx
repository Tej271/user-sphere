"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getToken } from "@/lib/auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    getToken() ? router.replace("/dashboard") : router.replace("/login");
  }, []);

  return null;
}
