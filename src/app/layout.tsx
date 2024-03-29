import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Morning Wars",
    description: "Morning Wars Site",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="icon" href="/Morning-Wars-logo-1.png" sizes="any" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}
