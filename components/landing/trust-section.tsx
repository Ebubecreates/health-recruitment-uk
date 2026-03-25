import { ShieldCheckIcon, LockClosedIcon, EyeIcon, ServerIcon } from "@heroicons/react/24/solid";

const trustFeatures = [
  {
    icon: ShieldCheckIcon,
    title: "NHS Partner Network",
    description:
      "Official partnership with NHS trusts across England, Scotland, Wales, and Northern Ireland.",
  },
  {
    icon: LockClosedIcon,
    title: "Bank-Grade Security",
    description:
      "256-bit SSL encryption protects all your personal data and documents at rest and in transit.",
  },
  {
    icon: EyeIcon,
    title: "Privacy First",
    description:
      "GDPR compliant with strict data handling. Your information is never shared without consent.",
  },
  {
    icon: ServerIcon,
    title: "UK Data Centers",
    description:
      "All data stored in secure UK-based data centers meeting NHS Digital security standards.",
  },
];

export function TrustSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary mb-3 sm:mb-4">
              Trust & Security
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Your Privacy & Security is Our Priority
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              We understand the sensitivity of personal and medical information.
              That&apos;s why we&apos;ve built our platform with security and
              privacy at its core.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {trustFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 sm:p-8 lg:p-12 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
                Trusted by Healthcare Professionals
              </h3>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">10,000+</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">Verified Professionals</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">500+</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">NHS Trusts</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">98%</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">Satisfaction Rate</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold">48hrs</p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">Avg. Verification</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/20 flex flex-wrap gap-2 sm:gap-4">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <ShieldCheckIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm font-medium">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                  <LockClosedIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-xs sm:text-sm font-medium">ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
