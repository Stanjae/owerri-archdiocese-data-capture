
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider"
import ReactQueryProvider from '@/lib/Providers/ReactQueryProvider'
import "./globals.css";
import {dummyFunction} from './data'
import { Toaster } from "sonner";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await dummyFunction()
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <main>
              {children}
              <Toaster position="bottom-right" richColors/>
            </main>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
