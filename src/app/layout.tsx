import Script from "next/script";
import Providers from "../provider/Provider";

import "@/styles/main.scss";

import ThemeSwitcher from "@/components/theme/index.themeSwitcher";
import Navbar from "@/components/layout/Navbar/index.navbar";
import TopBar from "@/components/layout/Navbar/components/TopBar";
import Footer from "@/components/layout/Footer/Footer";

export const metadata = {
  title: "BPL Official | Bhalawani Premier League",
  description:
    "Official website of Bhalawani Premier League. Live scores, teams, matches, auction, points table and tournament updates.",
  icons: {
    icon: "/assets/icons/icon3.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" data-skin="blue">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* ================= RAZORPAY ================= */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        {/* ================= TOP HEADER ================= */}
        <TopBar />

        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= THEME SWITCHER ================= */}
        <ThemeSwitcher />

        {/* ================= PAGE CONTENT ================= */}
        <Providers>{children}</Providers>

        {/* ================= FOOTER ================= */}
        <Footer />
      </body>
    </html>
  );
}
