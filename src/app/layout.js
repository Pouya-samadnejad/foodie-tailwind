import "./globals.css";
import Header from "@/components/Header/header";
import { Quicksand, Montserrat } from "@next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
});
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
