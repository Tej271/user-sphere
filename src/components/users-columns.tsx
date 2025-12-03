import { type ColumnDef } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { DataTableColumnHeader } from "@/components/data-table/column-header";
import { type User } from "@/data/users";
import { DataTableRowActions } from "./data-table-row-actions";

const roleBadges: Record<User["role"], string> = {
  admin: "bg-blue-500/10 text-blue-600",
  editor: "bg-amber-500/10 text-amber-600",
  viewer: "bg-emerald-500/10 text-emerald-600",
};

const statusBadges: Record<User["status"], string> = {
  active: "bg-green-500/10 text-green-700",
  inactive: "bg-red-500/10 text-red-600",
};

export const usersColumns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <span className="font-medium">{row.getValue("name")}</span>,
  },

  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => <span className="text-muted-foreground">{row.getValue("email")}</span>,
  },

  {
    accessorKey: "role",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
    cell: ({ row }) => {
      const role = row.getValue("role") as User["role"];
      return <Badge className={cn("capitalize", roleBadges[role])}>{role}</Badge>;
    },
    meta: { filterVariant: "select" },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as User["status"];
      return <Badge className={cn("capitalize", statusBadges[status])}>{status}</Badge>;
    },
    filterFn: (row, id, value) => {
      if (value === "__CLEAR__") return true;
      return row.getValue("status") === value;
    },
    meta: { filterVariant: "select" },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Created Date" />,
    cell: ({ row }) => <span>{row.getValue("createdAt")}</span>,
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
