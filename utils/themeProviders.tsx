"use client";

/*
  should wrap the app like this:
  <Providers>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Providers>
*/

import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
