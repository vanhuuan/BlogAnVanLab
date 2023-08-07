import { ThemeProvider } from "@/components/themeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Locale, i18n } from "@/i18next.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cung cấp kiến thức lập trình cơ bản dễ hiểu",
  description:
    "AnVanLab là website cung cấp các kiến thức lập trình cơ bản và dễ hiểu được viết bởi Văn Hữu An và những người bạn của anh ấy.",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string }
}) {
  const locale: Locale = params.lang == "vi" ? "vi" : "en"
  return (
    <html lang={params.lang} className="bg-white">
      <body className={`${inter.className} bg-white dark:bg-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header lang={locale} />
          {children }
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
