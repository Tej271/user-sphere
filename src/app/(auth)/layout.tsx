export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Welcome to <span className="text-blue-600">User Management!</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage users, access dashboards, and more.
          </p>
        </div>

        {children}
      </div>
    </div>
  );
}
