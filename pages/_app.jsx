import '@/index.css';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
