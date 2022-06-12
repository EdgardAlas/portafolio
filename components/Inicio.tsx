import { Linkedin } from 'react-bootstrap-icons';
import { SectionObserver } from './observer/SectionObserver';

export const Inicio = () => {
  return (
    <SectionObserver id='inicio'>
      <section
        id='inicio'
        className=' -mt-30 flex justify-center items-center flex-col text-center p-5 min-h-screen gap-6 font-bold
    '
      >
        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
          Hola, Soy <span className='text-copperfield-600'>Edgard Alas</span>
        </h1>
        <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
          Desarrollador Web.
        </h2>
        <p className='text-xl xl:text-2xl font-normal md:w-2/4'>
          Soy un estudiante de la carrera de Ingeniería de Sistemas
          Informáticos, me apasiona el desarrollo web y estar al día con las
          tecnologías tanto para fronted y backend
        </p>
        <section>
          <a
            href='https://www.linkedin.com/in/edgard-eduardo-rodriguez-alas/'
            target='_blank'
            rel='noreferrer'
            className='flex items-start gap-2 text-xl xl:text-2xl'
          >
            <Linkedin color='#0e76a8' />
            <span>Linkedin</span>
          </a>
        </section>
      </section>
    </SectionObserver>
  );
};
