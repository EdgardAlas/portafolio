import Head from 'next/head';
import React from 'react';
import { NavbarProvider } from '../../context';
import { NavBar } from '../ui/navbar';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <NavbarProvider>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <main>{children}</main>
    </NavbarProvider>
  );
};
