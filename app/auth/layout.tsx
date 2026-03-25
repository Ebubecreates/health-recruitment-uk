import Link from "next/link";
import { ShieldCheckIcon, LockClosedIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Health Recruitment UK"
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 py-12">
        {children}
      </main>

      {/* Trust Badges Footer */}
      <footer className="py-6 border-t border-border">
        <div className="flex justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-1 text-xs">
            <ShieldCheckIcon className="h-4 w-4" />
            <span className="font-medium uppercase tracking-tight">
              NHS Partner
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <LockClosedIcon className="h-4 w-4" />
            <span className="font-medium uppercase tracking-tight">
              Secure SSL
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <CheckCircleIcon className="h-4 w-4" />
            <span className="font-medium uppercase tracking-tight">
              Data Protected
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
