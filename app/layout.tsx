import { Footer, Header } from "./(dashboard)/home/components";
import "./globals.css";
import Head from "./head";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <Head />
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;
