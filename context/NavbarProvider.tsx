import React, { useState } from 'react';
import { NavbarContext } from './NavbarContext';

interface Props {
  children: React.ReactNode;
}

export interface INavbarContext {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}

export const NavbarProvider = ({ children }: Props) => {
  const [activeLink, setActiveLink] = useState('#inicio');

  return (
    <NavbarContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavbarContext.Provider>
  );
};
