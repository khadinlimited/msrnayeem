import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
