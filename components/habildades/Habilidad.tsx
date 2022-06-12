import Image from 'next/image';

interface Props {
  src: string;
  height?: number;
  width?: number;
  alt: string;
}

export const Habilidad = ({ alt, src, height = 100, width = 100 }: Props) => {
  return (
    <section
      className='flex p-4 border border-white-400 rounded-md 
                bg-white-50 hover:bg-white-200 transition-all shadow-lg hover:scale-110'
    >
      <header className='flex items-center'>
        <Image
          src={src}
          height={height}
          width={width}
          alt={alt}
          className='object-contain object-center'
        />
      </header>
    </section>
  );
};
