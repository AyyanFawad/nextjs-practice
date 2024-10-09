// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import SideNav from "../ui/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
