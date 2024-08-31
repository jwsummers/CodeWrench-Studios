import '../styles/globals.css';
import '../styles/fonts.css';

export const metadata = {
  title: 'CodeWrench Studios',
  description: 'Your go-to solution for web development and design.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
