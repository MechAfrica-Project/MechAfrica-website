import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import UpdatingPage from "../updating-site/page";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col font-sans">
      {/* <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer /> */}
      <UpdatingPage />
    </div>
  );
}
