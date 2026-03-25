import Link from "next/link";
import { ShieldCheckIcon, CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export function HeroSection() {
  return (
    <section className="relative overflow-visible bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[90vh] lg:min-h-screen relative">
          {/* Content Section */}
          <div className="flex flex-col justify-center order-2 lg:order-1 py-12 sm:py-16 lg:py-0 relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6 w-max">
              <ShieldCheckIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Trusted by 10,000+ Healthcare Professionals</span>
              <span className="sm:hidden">Trusted by 10,000+</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Your Gateway to{" "}
              <span className="text-primary">UK Healthcare</span> Careers
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Join the UK&apos;s leading healthcare recruitment platform.
              Connect with NHS hospitals and private healthcare providers across
              the nation. Verified professionals only.
            </p>

            {/* Trust Indicators */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-wrap sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>NHS Verified Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                <span>Secure & Private</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/auth/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all group"
              >
                Start Your Application
                <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-foreground hover:border-primary hover:text-primary transition-all"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 z-20">
            <img 
              src="/images/healthcare-team.png" 
              alt="Healthcare professionals - doctor and nurse" 
              className="w-full h-full object-cover lg:w-[180%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
