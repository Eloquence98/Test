import { Poppins } from "next/font/google";
// import "./globals.css";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    template: "%s / MVP2",
    default: "Welcome / MVP2",
  },
  description: "Welcome to the official MVP2 site ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
