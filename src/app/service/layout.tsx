import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Center — Maintenance & Repair",
  description:
    "Expert auto repair and maintenance at Eagles Automotive Inc. Oil changes, brakes, diagnostics, and more in Murfreesboro, TN. Call (347) 485-0898.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
