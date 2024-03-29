import "./index.css";

import Footer from "@components/Footer";
import UserAuth from "@components/UserAuth";

export const metadata = {
  title: "licho.tk - url shortener",
  description: "URL Shortener built with NextJS and Redis",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-background min-h-screen px-14 lg:px-4 max-w-[1200px] mx-auto text-text">
        <header className="flex justify-between items-center py-10">
          <div className="text-4xl font-bold relative">
            <h1 className="absolute text-accent top-[4px] left-[4px] -z-10">
              licho.tk
            </h1>
            <h1>licho.tk</h1>
          </div>
          <UserAuth />
        </header>
        <main className="mb-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
