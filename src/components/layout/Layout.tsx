import { FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-earth-50">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* Scroll restoration handles scrolling back up when navigating */}
      <ScrollRestoration />
    </div>
  );
};
