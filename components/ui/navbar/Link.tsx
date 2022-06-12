import classNames from 'classnames';
import { useNavbarContext } from '../../../hooks';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  icon?: React.ReactNode;
}

export const Link = ({ children, icon, ...rest }: Props) => {
  const { activeLink } = useNavbarContext();

  return (
    <a
      {...rest}
      className={classNames(
        'px-3 py-2 hover:bg-white-300 rounded transition-colors text-center',
        {
          'bg-white-400': activeLink === rest.href,
        }
      )}
    >
      {icon}
      {children}
    </a>
  );
};
