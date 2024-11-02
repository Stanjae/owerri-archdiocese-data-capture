
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider"
import ReactQueryProvider from '@/lib/Providers/ReactQueryProvider'
import "./globals.css";
import {getCurrentUser} from './data'
import { Toaster } from "sonner";
import { ContextApi } from "@/lib/Providers/ContextApi";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ArchDiocese of Owerri DataCapture",
  description: "...Ave maria",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser()
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
            <ContextApi initialData={user}>
              <main>
                {children}
                <Toaster position="bottom-right" richColors/>
              </main>
            </ContextApi>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}