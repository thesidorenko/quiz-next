import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import theme from '../theme';

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizExpert",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png"  />
      </head>
      <body className={roboto_mono.className} style={{ margin: 0, backgroundColor: '#f5f5f5' }}>
        <AppRouterCacheProvider>
         <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
