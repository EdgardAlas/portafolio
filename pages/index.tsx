import type { NextPage } from 'next';
import { Habilidades } from '../components/habildades';
import { Inicio } from '../components/Inicio';
import { Layout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout title='Inicio | Portafolio Edgard Alas'>
      <Inicio />
      <Habilidades />
    </Layout>
  );
};

export default Home;
