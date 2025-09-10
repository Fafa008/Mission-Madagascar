import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DropdownMenu } from "./DropdownMenu";

export const NavigationMenu: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const freelanceMenuItems = {
    left: [
      {
        title: "Publier une mission",
        subtitle: "",
        href: "/publier-mission",
      },
      {
        title: "Afficher tous les freelances",
        subtitle: "",
        href: "/freelances",
      },
    ],
    right: [
      {
        title: "Développement",
        href: "/freelances/developpement",
        image: "/ph_1.jpeg",
      },
      {
        title: "Rédaction",
        href: "/freelances/redaction",
        image: "/ph_2.jpeg",
      },
      {
        title: "Traduction",
        href: "/freelances/traduction",
        image: "/ph_3.jpeg",
      },
      {
        title: "Réseaux sociaux",
        href: "/freelances/reseaux-sociaux",
        image: "/ph_4.jpeg",
      },
      {
        title: "Autres",
        href: "/freelances/autres",
        image: "/ph_5.jpeg",
      },
    ],
  };

  const missionMenuItems = {
    left: [
      {
        title: "Toutes les missions disponibles",
        subtitle: "",
        href: "/missions",
      },
    ],
    right: [
      {
        title: "Développement",
        href: "/missions/developpement",
        image: "/ph_1.jpeg",
      },
      {
        title: "Rédaction",
        href: "/missions/redaction",
        image: "/ph_2.jpeg",
      },
      {
        title: "Traduction",
        href: "/missions/traduction",
        image: "/ph_3.jpeg",
      },
      {
        title: "Réseaux sociaux",
        href: "/missions/reseaux-sociaux",
        image: "/ph_4.jpeg",
      },
      {
        title: "Autres",
        href: "/missions/autres",
        image: "/ph_5.jpeg",
      },
    ],
  };

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="flex items-center space-x-6">
      {/* Menu Freelances */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("freelances")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center space-x-1 text-gray-700 hover:text-[var(--brand-green)] px-3 py-2 text-sm font-medium transition-colors">
          <span>Freelances</span>
          {activeDropdown === "freelances" ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </button>

        {activeDropdown === "freelances" && (
          <DropdownMenu items={freelanceMenuItems} />
        )}
      </div>

      {/* Menu Missions */}
      <div
        className="relative"
        onMouseEnter={() => handleMouseEnter("missions")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center space-x-1 text-gray-700 hover:text-[var(--brand-green)] px-3 py-2 text-sm font-medium transition-colors">
          <span>Missions</span>
          {activeDropdown === "missions" ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </button>

        {activeDropdown === "missions" && (
          <DropdownMenu items={missionMenuItems} />
        )}
      </div>

      {/* Menu A propos */}
      <a
        href="/a-propos"
        className="text-gray-700 hover:text-[var(--brand-green)] px-3 py-2 text-sm font-medium transition-colors"
      >
        À propos
      </a>
    </nav>
  );
};
