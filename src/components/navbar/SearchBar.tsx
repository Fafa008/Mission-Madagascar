import React, { useState } from "react";
import { Search } from "lucide-react";

export const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
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
  );
};
