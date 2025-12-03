"use client";

import { UserPlus } from "lucide-react";
import { useSelector } from "react-redux";
import UsersTable from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { useUsers } from "@/hooks/users-provider";
import { UsersDialogs } from "@/components/users-dialog";

export default function DashboardPage() {
  const { list } = useSelector((state: any) => state.users);
  const { setOpen } = useUsers();

  return (
    <div>
      <Button className="space-x-1" onClick={() => setOpen("add")}>
        <span>Add User</span> <UserPlus size={18} />
      </Button>
      <UsersTable data={list} />
      <UsersDialogs />
    </div>
  );
}
