import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Pinecrest Bakery | Authentic Cuban Flavors, 24/7',
  description: 'Experience world-class Cuban pastries, gourmet cakes, and traditional café cubano at Pinecrest Bakery. Multiple South Florida locations, open 24 hours.',
  keywords: ["Cuban bakery, Miami bakery, pastries, cakes, café cubano, Cuban sandwiches, catering, 24 hour bakery, South Florida"],
  openGraph: {
    "title": "Pinecrest Bakery | Authentic Cuban Flavors, 24/7",
    "description": "Experience world-class Cuban pastries, gourmet cakes, and traditional café cubano at Pinecrest Bakery. Multiple South Florida locations, open 24 hours.",
    "url": "https://www.pinecrestbakery.com",
    "siteName": "Pinecrest Bakery",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/sweet-pastry-display-fresh-baked-goodness-generated-by-ai_188544-40880.jpg",
        "alt": "A lavish spread of Pinecrest Bakery's Cuban pastries and coffee"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Pinecrest Bakery | Authentic Cuban Flavors, 24/7",
    "description": "Experience world-class Cuban pastries, gourmet cakes, and traditional café cubano at Pinecrest Bakery. Multiple South Florida locations, open 24 hours.",
    "images": [
      "http://img.b2bpic.net/free-photo/sweet-pastry-display-fresh-baked-goodness-generated-by-ai_188544-40880.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
