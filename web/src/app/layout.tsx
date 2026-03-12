import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weekender Route Postcards",
  description: "Build a visually rich trip-planning service that converts a travel inspiration video into an itinerary, route cards, bac",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
