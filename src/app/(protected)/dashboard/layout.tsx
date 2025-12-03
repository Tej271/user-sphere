"use client";

import { Header } from "@/components/app-header";
import { Main } from "@/components/layout/main";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "../../../components/layout/app-sidebar";

import { getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "@/app/globals.css";
import { UsersProvider } from "@/hooks/users-provider";
import { ProfileDropdown } from "@/components/profile-dropdown";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) router.replace("/login");
  }, []);

  return (
    <SidebarProvider>
      <UsersProvider>
        <AppSidebar />

        <SidebarInset>
          <Header>
            <div className="grid flex-1 text-start text-sm leading-tight">
              <span className="truncate font-semibold">User MIS</span>
            </div>

            <div className="ms-auto flex items-center space-x-4">
              <div className="grid flex-1 text-start text-lg leading-tight">
                <span className="truncate">Hi, Tejas!</span>
              </div>
              <ProfileDropdown />
            </div>
          </Header>

          <Main>{children}</Main>
        </SidebarInset>
      </UsersProvider>
    </SidebarProvider>
  );
}
