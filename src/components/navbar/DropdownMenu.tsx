import React from "react";
import { ArrowRight } from "lucide-react";

interface MenuItems {
  left: Array<{ title: string; subtitle: string; href: string }>;
  right: Array<{ title: string; href: string; image: string }>;
}

interface DropdownMenuProps {
  items: MenuItems;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  return (
    <div className="fixed top-16 left-0 w-screen h-[80vh] bg-white shadow-xl border-t border-gray-200 py-8 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Left Section */}
          <div className="w-1/3 space-y-4">
            {items.left.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <div className="text-gray-900 font-medium group-hover:text-[var(--brand-green)] transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-[var(--brand-green)] mt-1">
                    {item.subtitle}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[var(--brand-green)] transition-colors" />
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="w-2/3">
            <p className="text-gray-600 mb-4">
              Découvrez ce qui est possible avec un expert du secteur. Consultez
              sa disponibilité et réservez un créneau qui vous convient.
            </p>
            <a
              href="#"
              className="text-[var(--brand-green)] hover:underline block mb-6"
            >
              Explorer toutes les catégories →
            </a>
            <div className="grid grid-cols-3 gap-4">
              {items.right.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href}
                  className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[2/1] overflow-hidden bg-gray-100">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-gray-900 text-center text-sm group-hover:text-[var(--brand-green)] transition-colors duration-200">
                      {card.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
