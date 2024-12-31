// components/Box.tsx

import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  width?: string; 
}

const Box: React.FC<BoxProps> = ({ children, width = 'w-auto' }) => {
  return (
    <div className="pt-4 pr-8 pb-4 pl-1">
        <div className={`inline-block border-2 rounded border-white m-2 shadow-squared ${width}`}>
        <div className="border border-black p-4">
            {children}
        </div>
        </div>
    </div>
  );
};

export default Box;
