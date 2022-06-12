import { createContext } from 'react';
import { INavbarContext } from './NavbarProvider';

export const NavbarContext = createContext<INavbarContext>(
  {} as INavbarContext
);
