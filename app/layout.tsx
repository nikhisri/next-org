import '@/app/ui/global.css';
import { inter, lusi } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
         {/* <p className={lusi.className}>My page</p> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
   
      {/* <body>{children}</body> */}
    </html>
  );
}
