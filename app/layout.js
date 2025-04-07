import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "InteriorHub | Best Interior Designers in Faridabad | POP & False Ceiling Experts",
  description:
    "InteriorHub is Faridabad's leading interior design studio specializing in POP designs, false ceilings, modular furniture, and luxury home interiors. Transform your space with elegance and functionality.",
  keywords: [
    "Interior design Faridabad",
    "False ceiling design",
    "POP design Faridabad",
    "Modular interiors",
    "InteriorHub",
    "Home renovation",
    "Luxury interiors Faridabad",
    "Interior designers in India",
    "Living room false ceiling",
    "Modern POP ceiling",
  ],
  authors: [{ name: "InteriorHub Team", url: "https://interiorhub.com" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
