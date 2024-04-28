import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MARTIN - your Medical AI",
  openGraph: {
    title: "MARTIN - your Medical AI",
    description:
      "MARTIN - is an AI-powered personal assistant ready to answer all your medical questions.",
    images: [
      {
        url: "https://innovative-balance-835822.framer.app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARTIN - your Medical AI",
    description:
      "MARTIN - is an AI-powered personal assistant ready to answer all your medical questions.",
    images: ["https://innovative-balance-835822.framer.app"],
    creator: "@BenLitvin",
  },
  metadataBase: new URL("https://innovative-balance-835822.framer.app"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
