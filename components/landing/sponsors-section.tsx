export function SponsorsSection() {
  const partners = [
    {
      name: "Cambridge University Hospitals",
      logo: "/images/cambridge-hospitals-logo.png",
      description: "NHS Foundation Trust",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-widest">
            Our Partners
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
            Trusted by Leading Healthcare Providers
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with the UK&apos;s most respected NHS trusts and private healthcare providers to connect you with exceptional career opportunities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border border-border bg-white hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-24 sm:h-32 w-full flex items-center justify-center mb-3 sm:mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-24 sm:max-h-32 w-auto object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-foreground text-center">
                {partner.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2">
                {partner.description}
              </p>
            </div>
          ))}

          {/* Add More Partners Placeholder */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border-2 border-dashed border-border bg-muted/30 hover:border-primary/30 transition-all duration-300">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
              <span className="text-lg sm:text-xl font-bold text-primary">+</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground text-center">
              Your Hospital Here
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-2">
              Partnership opportunities available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
