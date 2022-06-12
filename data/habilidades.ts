import { nanoid } from 'nanoid';

interface Habilida {
  id: string;
  src: string;
  height?: number;
  width?: number;
  alt: string;
}

const habilidades: Habilida[] = [
  {
    id: nanoid(),
    alt: 'git',
    src: '/git.png',
  },
  {
    id: nanoid(),
    alt: 'HTML',
    src: '/html.png',
  },
  {
    id: nanoid(),
    alt: 'CSS',
    src: '/css.png',
  },
  {
    id: nanoid(),
    alt: 'tailwind',
    src: '/tailwind.png',
  },
  {
    id: nanoid(),
    alt: 'bootstrap',
    src: '/bootstrap.png',
  },
  {
    id: nanoid(),
    alt: 'Javascript',
    src: '/js.webp',
  },
  {
    id: nanoid(),
    alt: 'Typescript',
    src: '/typescript.png',
  },
  {
    id: nanoid(),
    alt: 'React JS',
    src: '/react.png',
  },
  {
    id: nanoid(),
    alt: 'NextJS',
    src: '/nextjs.png',
  },
  {
    id: nanoid(),
    alt: 'PHP',
    src: '/php.png',
  },
  {
    id: nanoid(),
    alt: 'Laravel',
    src: '/laravel.png',
  },
  {
    id: nanoid(),
    alt: 'NodeJS',
    src: '/nodejs.png',
  },
  {
    id: nanoid(),
    alt: 'expressjs',
    src: '/express.png',
  },
  {
    id: nanoid(),
    alt: 'postgres',
    src: '/postgres.png',
  },
  {
    id: nanoid(),
    alt: 'MySQL',
    src: '/mysql.png',
  },
];

export default habilidades;
