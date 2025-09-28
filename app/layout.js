import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'; 
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Comments Technical Assessment",
  description: "Technical Assessment for comments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
  suppressHydrationWarning
  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
  {children}
</body>

    </html>
  );
}
