import localFont from "next/font/local";
// import "./globals.css";
import "@/styles/globals.css";

const satoshi = localFont({
  src: "../fonts/satoshi/satoshi-regular.woff2",
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-satoshi",
})

export const metadata = {
  title: {
    template: "%s / MVP2",
    default: "Welcome / MVP2",
  },
  description: "Welcome to the official MVP2 site ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-heavy-metal max-h-[100dvh] overflow-hidden">
      <body className={`${satoshi.className} max-w-[90em] mx-auto p-3 !pr-[calc(0.75rem-12px)] body-scroll bg-neutral-white rounded-[48px] h-[100dvh] overflow-x-hidden overflow-y-scroll`}>
        <main className="p-[6px] min-h-full bg-bg-frame rounded-[36px] ">
          <div className="p-[6px] rounded-[32px]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
