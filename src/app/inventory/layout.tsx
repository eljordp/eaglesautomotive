import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory — Browse Our Used Cars",
  description:
    "Browse quality pre-owned cars, trucks, and SUVs at Eagles Automotive Inc in Murfreesboro, TN. Filter by make, price, and body type.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
