import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katie Pollard Photography | Darwin, NT",
  description:
    "Katie Pollard Photography captures life's special milestones — engagements, weddings, newborns, maternity, families & pets. Based in Darwin, Northern Territory.",
  openGraph: {
    title: "Katie Pollard Photography",
    description: "Timeless, heartfelt images that tell your unique love story.",
    images: ["/photos/cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
