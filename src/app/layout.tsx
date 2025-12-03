import { Header } from "@/components/app-header";
import { Main } from "@/components/layout/main";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/layout/app-sidebar";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
                <Button variant={"outline"}>Log Out</Button>
              </div>
            </Header>

            <Main>{children}</Main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
