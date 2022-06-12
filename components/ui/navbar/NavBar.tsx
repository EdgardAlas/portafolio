import { Link } from './Link';
import { List } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const mediaSM = window.matchMedia('(min-width: 640px)');

    const onChangeMediaSM = (event: MediaQueryListEvent) => {
      event.matches && setShowNavbar(false);
    };

    mediaSM.addEventListener('change', onChangeMediaSM);

    return () => {
      mediaSM.removeEventListener('change', onChangeMediaSM);
    };
  }, []);

  return (
    <header className='sticky top-0 z-10'>
      <section className='flex flex-col sm:flex-row bg-white-200 text-ebony-900 relative shadow-lg'>
        <section className='px-2 py-5 flex flex-row justify-between  bg-white-200 z-10'>
          <Image src='/logo.svg' alt='Logo' height={40} width={40} />
          <button
            onClick={() => setShowNavbar((prev) => !prev)}
            className='hover:bg-white-300 rounded-md p-1 sm:hidden'
          >
            <List size={40} />
          </button>
        </section>
        <nav
          className={classnames('absolute sm:relative w-full top-full z-0', {
            'pointer-events-none': !showNavbar,
          })}
        >
          <section
            className={classnames(
              'bg-white-200 border border-white-300 shadow-md flex flex-col sm:gap-3 transition-transform sm:flex-row sm:justify-end sm:px-2 sm:py-5 sm:bg-white-200 sm:translate-y-0 sm:border-0 sm:shadow-none sm:pointer-events-auto',
              {
                'translate-y-[-100vh] pointer-events-none': !showNavbar,
              }
            )}
          >
            <Link href='#inicio'>Inicio</Link>
            <Link href='#proyectos'>Proyectos</Link>
            <Link href='#habilidades'>Habilidades</Link>
          </section>
        </nav>
      </section>
    </header>
  );
};
