import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/mission_logo.png"
        alt="Mission Madagascar"
        className="h-10 w-auto"
      />
    </div>
  );
};
