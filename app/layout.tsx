import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
         {/* <p className={lusitana.className}>My page</p> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
   
      {/* <body>{children}</body> */}
    </html>
  );
}
