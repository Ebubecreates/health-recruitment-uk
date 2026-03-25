import Link from "next/link";
import { ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content Section */}
          <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <ShieldCheckIcon className="h-4 w-4" />
            <span>Trusted by 10,000+ Healthcare Professionals</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Your Gateway to{" "}
            <span className="text-primary">UK Healthcare</span> Careers
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Join the UK&apos;s leading healthcare recruitment platform.
            Connect with NHS hospitals and private healthcare providers across
            the nation. Verified professionals only.
          </p>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              <span>NHS Verified Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-primary" />
              <span>Secure & Private</span>
            </div>
          </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all group"
              >
                Start Your Application
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-white px-8 py-4 text-base font-bold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Image Section - Left Side */}
          <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
            <img 
              src="/images/healthcare-team.png" 
              alt="Healthcare professionals - doctor and nurse" 
              className="w-full max-w-lg lg:max-w-none lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
