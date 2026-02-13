import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { NUI_VERSION } from '../version';
import { Menu, X } from 'lucide-react';
import { Button, ModeToggle } from '@nicorp/nui';
import logo from '../../nui-logo.png';
import logoSmall from '../../nui-logo-small.png';

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-border bg-card transition-transform duration-200 lg:translate-x-0 lg:static lg:z-auto ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onNavigate={() => setMobileOpen(false)} />
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4 h-14 lg:px-6">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <img
              src={logo}
              alt="NUI Logo"
              className="w-8 h-8 rounded-lg object-contain bg-primary/10 p-1 hidden lg:block"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = logoSmall; }}
            />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <a
              href="https://www.npmjs.com/package/@nicorp/nui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono px-2 py-1 rounded-md bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              v{NUI_VERSION}
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
