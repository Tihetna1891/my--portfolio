'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const themeToggle = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-sm hover:border-sky-500 hover:text-sky-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-sky-400 dark:hover:text-sky-300"
    >
      {mounted ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4 opacity-60" />
      )}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-colors ${
        scrolled
          ? 'border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-950/95'
          : 'border-slate-200/80 bg-white/90 dark:border-slate-800/80 dark:bg-slate-950/90'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-slate-900 no-underline dark:text-slate-100"
        >
          Tihetna<span className="text-sky-500 dark:text-sky-400">.</span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-4 md:flex">
          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-medium tracking-wide text-slate-700 no-underline hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {themeToggle}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {themeToggle}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-slate-300 p-2 text-slate-800 dark:border-slate-600 dark:text-slate-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-slate-800 no-underline hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
