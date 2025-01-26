"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

import { navigations } from '@/data/navigations';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="w-full flex items-center justify-between py-2 md:py-3 px-4">
        <Link href="/#about" className="font-semibold text-lg">
          amagami
        </Link>

        <div className='flex items-center space-x-6'>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navigations.sort((a, b) => (a.id - b.id)).map((navigation) => (
                <div key={navigation.id}>
                  <Link href={navigation.key} className="transition-colors hover:text-foreground/80">
                    {navigation.name}
                  </Link>
                </div>
              ))}
              <ModeToggle />
            </nav>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[calc(theme(spacing.12)+1px)] bg-background md:hidden transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-4 p-4 bg-gray-200/90 dark:bg-zinc-900/90">
          {navigations.sort((a, b) => (a.id - b.id)).map((navigation) => (
            <div key={navigation.id}>
              <Link
                href={navigation.key}
                className="text-lg font-medium p-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {navigation.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}