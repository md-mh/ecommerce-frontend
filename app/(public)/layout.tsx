import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// The Layout that wraps the public pages.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
