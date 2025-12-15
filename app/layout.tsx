import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
export const metadata = {
  title: "Logger - Minimal Workout Logger",
  description:
    "Logger is a minimal workout logger for people who train seriously and don’t want bloated features.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
