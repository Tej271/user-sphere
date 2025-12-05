"use client";

import { UserPlus } from "lucide-react";
import UsersTable from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/hooks/users-provider";
import { UsersDialogs } from "@/components/users-dialog";
import { useAppSelector } from "@/store/hooks";

export default function DashboardPage() {
  const { list } = useAppSelector((state: any) => state.users);
  const { setOpen } = useUsers();

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button className="space-x-1" onClick={() => setOpen("add")}>
          <span>Add User</span> <UserPlus size={18} />
        </Button>
      </div>

      <UsersTable data={list} />
      <UsersDialogs />
    </div>
  );
}
