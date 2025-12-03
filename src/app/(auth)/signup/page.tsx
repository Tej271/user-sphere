"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function SignupPage() {
  return (
    <form className="space-y-4">
      <Input placeholder="Full Name" required />
      <Input placeholder="Email" type="email" required />
      <Input placeholder="Password" type="password" required />

      <Button className="w-full">Create Account</Button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}
