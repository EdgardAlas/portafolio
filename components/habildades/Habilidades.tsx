import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import { habilidades } from '../../data';
import { useNavbarContext } from '../../hooks';
import { SectionObserver } from '../observer/SectionObserver';
import { Habilidad } from './Habilidad';

export const Habilidades = () => {
  const { setActiveLink } = useNavbarContext();

  return (
    <SectionObserver id='habilidades'>
      <section id='habilidades' className='p-5 bg-white-100'>
        <section className='flex items-end gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-10'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z' />
          </svg>
          <h3 className='text-2xl font-bold'>Habilidades</h3>
        </section>
        <article className='flex flex-wrap gap-8 justify-center mt-5'>
          {habilidades.map(({ id, ...rest }) => (
            <Habilidad key={id} {...rest} />
          ))}
        </article>
      </section>
    </SectionObserver>
  );
};
