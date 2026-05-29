import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import { SafeArea } from "./components/SafeArea";
import { BASE_APP_ID } from "@/lib/appConfig";
import { farcasterConfig } from "../farcaster.config";
import { Providers } from "./providers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: farcasterConfig.miniapp.name,
    description: farcasterConfig.miniapp.description,
    other: {
      "base:app_id": BASE_APP_ID,
      "fc:frame": JSON.stringify({
        version: farcasterConfig.miniapp.version,
        imageUrl: farcasterConfig.miniapp.heroImageUrl,
        button: {
          title: farcasterConfig.miniapp.buttonTitle,
          action: {
            name: "Launch",
            type: "launch_frame",
          },
        },
      }),
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta name="base:app_id" content={BASE_APP_ID} />
        <meta name="talentapp:project_verification" content="1b2fd88ee25e31f1c15f23034f2b14f3a3d3587490251e67ef88fdae9489d5997d4c5cff2f2f9788cdd1e7efebde2d4eddc169a6330ead5e134bf785845194c1"/>
      </head>
      <body className={`${inter.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
        <Providers>
          <SafeArea>{children}</SafeArea>
        </Providers>
      </body>
    </html>
  );
}
