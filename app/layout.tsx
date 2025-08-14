import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Sora, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import event from "@/content/event.json";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const sora=Sora({subsets:["latin"],variable:"--font-sora"});
const inter=Inter({subsets:["latin"],variable:"--font-inter"});

export const metadata: Metadata = {
  title: `${event.title}`,
  description: "Churrasco da família: infos, cardápio, cronograma e galeria.",
  openGraph: { title: `${event.title}`, description:"Informações do evento e galeria pós-churrasco.", type:"website" },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return(<html lang="pt-BR"><body className={`${sora.variable} ${inter.variable} antialiased`}>
    <Nav/>
    <main>{children}</main>
    <Footer/>
  </body></html>);
}
