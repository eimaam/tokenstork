import type { Metadata, Viewport } from "next";
import Footer from "@/app/components/Footer";
import CTA from "@/app/components/CTA";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { BCHPriceProvider } from "./providers/bchpriceclientprovider";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";
import Navbar from "./components/navigation/NavBar";


// custom font
const bodyFont = Space_Grotesk({
  subsets: ["latin"],
});

// TODO: add inner pages https://www.tremor.so/docs/components/tracker, https://storybook.tremor.so/?path=/docs/components-list-table--docs
// TODO: add gradient bg https://kopi.dev/tailwind/gradient-background-animation/ (also has some spacing stuff), https://tailwindcomponents.com/component/button-background-hover-animation
// TODO: work more on different screen sizes/breakpoints
// TODO: add custom 404 page is this the doge you were looking for?
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#4f359b",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tokenstork.com"),
  title:
    "Token Stork: Discover, Track and Analyze BCH Cash Tokens (0.0.1 beta)",
  description: "Track BCH CashTokens market cap and more with TokenStork.",
  icons: {
    icon: "favicon-32x32.png",
    shortcut: "favicon.ico",
    apple: [
      { url: "apple-touch-icon.png" },
      { url: "favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  manifest: "site.webmanifest",
  openGraph: {
    title:
      "Token Stork: Discover, Track and Analyze BCH Cash Tokens (0.0.1 beta)",
    siteName: "Token Stork",
    description: "Track BCH CashTokens market cap and more with TokenStork.",
    url: "https://tokenstork.com/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "fb.png",
        width: 1200,
        height: 630,
        alt: "Token Stork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Token Stork: Discover, Track and Analyze BCH Cash Tokens",
    description: "Track BCH CashTokens market cap and more with TokenStork.",
    creator: "@bitcoincashsite",
    images: {
      url: "tw.png",
      alt: "Token Stork",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  tokenId?: string;
}) {
  return (
    <ConfigProvider>
      <BCHPriceProvider>
        <html lang="en" className={bodyFont.className}>
          <head>
            <script
              src="https://beamanalytics.b-cdn.net/beam.min.js"
              data-token="c989accf-6494-49a8-ad3a-ee34c91aeedd"
              async
            ></script>
          </head>
          <body>
            <div className="container mx-auto">

            <Navbar />
            {children}
            <CTA />
            </div>
            <Footer />
            <GoogleAnalytics />
          </body>
        </html>
      </BCHPriceProvider>
    </ConfigProvider>

  );
}
