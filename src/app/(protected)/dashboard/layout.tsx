"use client";

import { Header } from "@/components/app-header";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "../../../components/layout/app-sidebar";

import { clearToken, getToken } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppProviders } from "../../app-providers";
import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) router.replace("/login");
  }, []);

  const handleLogout = () => {
    clearToken();
    router.replace("/login");
  };

  return (
    <SidebarProvider>
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
            <Button variant={"outline"} onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </Header>

        <Main>{children}</Main>
      </SidebarInset>
    </SidebarProvider>
  );
}
