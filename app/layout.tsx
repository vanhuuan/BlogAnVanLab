import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cung cấp kiến thức lập trình cơ bản dễ hiểu",
  description:
    "AnVanLab là website cung cấp các kiến thức lập trình cơ bản và dễ hiểu được viết bởi Văn Hữu An và những người bạn của anh ấy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="bg-white">
      <body className={`${inter.className} bg-white dark:bg-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
