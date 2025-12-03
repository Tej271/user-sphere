"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SelectDropdown } from "@/components/select-dropdown";
import type { User } from "@/data/users";
import { addUser } from "@/store/features/userSlice";
import { useAppDispatch } from "@/store/hooks";

const roles = ["admin", "editor", "viewer"] as const;
const statuses = ["active", "inactive"] as const;

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email format"),
  role: z.enum(roles).refine(Boolean, { message: "Role is required" }),
  status: z.enum(statuses).refine(Boolean, { message: "Status is required" }),
});

type UserForm = z.infer<typeof formSchema>;

type UserActionDialogProps = {
  currentRow?: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function UsersActionDialog({ currentRow, open, onOpenChange }: UserActionDialogProps) {
  const isEdit = !!currentRow;
  const dispatch = useAppDispatch();

  const form = useForm<UserForm>({
    resolver: zodResolver(formSchema),
    defaultValues: isEdit ? currentRow : { name: "", email: "", role: "viewer", status: "active" },
  });

  const onSubmit = (data: UserForm) => {
    console.log(isEdit ? "Edited User:" : "New User:", data);
    form.reset();
    onOpenChange(false);
    dispatch(
      addUser({ id: Date.now(), createdAt: new Date().toISOString().split("T")[0], ...data })
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        form.reset();
        onOpenChange(state);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEdit ? "Edit User" : "Add New User"}</DialogTitle>
          <DialogDescription>Fill the details below and save.</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form id="user-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="role"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <SelectDropdown
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    items={roles.map((v) => ({ label: v.toUpperCase(), value: v }))}
                    placeholder="Select role"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="status"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <SelectDropdown
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    items={statuses.map((v) => ({ label: v.toUpperCase(), value: v }))}
                    placeholder="Select status"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        <DialogFooter>
          <Button form="user-form" type="submit">
            {isEdit ? "Save Changes" : "Create User"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
