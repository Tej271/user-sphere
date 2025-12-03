"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { setToken } from "@/lib/auth";

const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    setError("");

    if (data.email === "admin@gmail.com" && data.password === "123456") {
      setToken("FAKE_AUTH_TOKEN");
      router.push("/dashboard");
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Input placeholder="Email" type="email" {...register("email")} />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <Input placeholder="Password" type="password" {...register("password")} />
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <Button type="submit" className="w-full">
        Login
      </Button>

      <p className="text-center text-sm text-gray-500">
        New here?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Create an account
        </Link>
      </p>
    </form>
  );
}
