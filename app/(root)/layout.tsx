import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full bg-[#1B1B1B]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
