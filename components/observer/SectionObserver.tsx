import { InView } from 'react-intersection-observer';
import { useNavbarContext } from '../../hooks';

interface Props {
  id: string;
  children: React.ReactNode;
}

export const SectionObserver = ({ id, children }: Props) => {
  const { setActiveLink } = useNavbarContext();
  return (
    <InView
      onChange={(inView) => inView && setActiveLink(`#${id}`)}
      threshold={0.7}
    >
      {children}
    </InView>
  );
};
