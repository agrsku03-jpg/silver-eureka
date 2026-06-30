import './globals.css';
import type { Metadata } from 'next';
import { Layout } from '@/components/Layout';
export const metadata: Metadata = { title: 'Gradient Grant Bank', description: 'Fictional online banking demonstration' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en" suppressHydrationWarning><body><Layout>{children}</Layout></body></html>; }
