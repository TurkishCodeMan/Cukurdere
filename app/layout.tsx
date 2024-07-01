import { Footer, Header } from "./(dashboard)/home/components";
import "./globals.css";
import Head from "./head";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
console.log(locale)
  const messages = await getMessages(locale as any);

  return (
    <html lang={locale}>
      <Head />
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
