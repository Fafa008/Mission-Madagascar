import React from "react";
import { NavigationMenu } from "./NavigationMenu";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <NavigationMenu />
          </div>
          <SearchBar />
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[var(--brand-green)] px-4 py-2 text-sm font-medium transition-colors">
              Connexion
            </button>
            <button className="btn-primary hover:bg-[var(--brand-green-dark)] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
              Inscription
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
