import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/layout/app-sidebar";
import "./globals.css";
import { Header } from "@/components/app-header";
import { Main } from "@/components/layout/main";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            {/* <Header /> */}
            <Main>{children}</Main>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
