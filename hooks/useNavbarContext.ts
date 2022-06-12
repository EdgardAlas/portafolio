import { useContext } from 'react';
import { NavbarContext } from '../context';

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};
