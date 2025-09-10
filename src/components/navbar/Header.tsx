import React, { useState } from "react";
import { NavigationMenu } from "./NavigationMenu";
import { Search } from "lucide-react";

export const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <img
                src="/mission_logo.png"
                alt="Mission Madagascar"
                className="h-10 w-auto"
              />
            </div>
            <NavigationMenu />
          </div>
          <div className="relative flex-1 max-w-md mx-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des freelances ou des missions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] focus:border-transparent text-sm"
              />
            </div>
          </div>
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
