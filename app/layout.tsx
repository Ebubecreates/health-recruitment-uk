import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Health Recruitment UK - Healthcare Professional Network",
  description:
    "Join the UK's leading healthcare professional network. Connect with NHS hospitals and private healthcare providers.",
  keywords: [
    "healthcare recruitment",
    "NHS jobs",
    "medical professionals",
    "UK healthcare",
    "nursing jobs",
  ],
};

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
