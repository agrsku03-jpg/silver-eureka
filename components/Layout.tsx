'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Building2, Menu, Moon, Sun, X } from 'lucide-react';
import { disclaimer } from '@/lib/mockData';
const nav = [['Services','/#services'],['Security','/#security'],['FAQ','/#faq'],['Contact','/contact'],['Dashboard','/dashboard']];
export function Layout({ children }: { children: React.ReactNode }) {
  const [open,setOpen]=useState(false); const [dark,setDark]=useState(false);
  function toggleDark(){ const next=!dark; setDark(next); document.documentElement.classList.toggle('dark', next); }
  return <>
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl"><span className="rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-400 p-2 text-white"><Building2 size={24}/></span>Gradient Grant Bank</Link>
        <nav className="hidden items-center gap-6 md:flex">{nav.map(([n,h])=><Link key={n} href={h} className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300">{n}</Link>)}<Link href="/login" className="btn-secondary py-2">Login</Link><Link href="/signup" className="btn-primary py-2">Sign Up</Link><button onClick={toggleDark} className="rounded-full p-3 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle dark mode">{dark?<Sun/>:<Moon/>}</button></nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open && <div className="grid gap-3 px-4 pb-4 md:hidden">{nav.map(([n,h])=><Link onClick={()=>setOpen(false)} key={n} href={h}>{n}</Link>)}<Link href="/login">Login</Link><Link href="/signup">Sign Up</Link><button onClick={toggleDark} className="text-left">Toggle dark mode</button></div>}
    </div>
    <main className="pt-20">{children}</main>
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-slate-950"><div className="mx-auto max-w-7xl px-4 text-sm text-slate-500"><p className="font-semibold text-blue-700 dark:text-blue-300">{disclaimer}</p><p className="mt-3">© 2026 Gradient Grant Bank demo. Built for UI demonstration only.</p></div></footer>
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 px-4 py-2 text-center text-xs text-white backdrop-blur">{disclaimer}</div>
  </>;
}
export function PageHeader({title,subtitle}:{title:string;subtitle:string}){return <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950"><div className="mx-auto max-w-7xl px-4"><h1 className="text-4xl font-black md:text-6xl">{title}</h1><p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{subtitle}</p></div></section>}
