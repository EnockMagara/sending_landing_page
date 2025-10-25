import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Seer — See through sound",
  description: "A voice-first navigation helper for visually impaired users. Seer uses real-time object detection, AI reasoning, and natural voice guidance to help users navigate to spoken checkpoints.",
  icons: {
    icon: [
      { url: '/Seer_logo.png' },
      { url: '/Seer_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/Seer_logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/Seer_logo.png',
    shortcut: '/Seer_logo.png',
  },
  openGraph: {
    title: "Seer — See through sound",
    description: "AI-powered navigation companion for the visually impaired",
    images: ['/Seer_logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Seer — See through sound",
    description: "AI-powered navigation companion for the visually impaired",
    images: ['/Seer_logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
