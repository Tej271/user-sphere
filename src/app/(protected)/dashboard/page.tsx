"use client";

// import { UsersTable } from "@/components/users-table";
import { useSelector } from "react-redux";
// import { useRouter, useSearchParams } from "next/navigation";
import UsersTable from "@/components/data-table";

type NavigateFn = (options: { search?: Record<string, unknown> }) => void;

export default function DashboardPage() {
  const { list } = useSelector((state: any) => state.users);

  return (
    <div>
      <UsersTable data={list} />
    </div>
  );
}
