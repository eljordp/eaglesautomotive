import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Eagles Automotive Inc at 2145 NW Broad St, Murfreesboro, TN 37129. Call (347) 485-0898 or send us a message.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
