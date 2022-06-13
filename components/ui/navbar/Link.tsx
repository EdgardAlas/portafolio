import classNames from 'classnames';

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  icon?: React.ReactNode;
}

export const Link = ({ children, icon, ...rest }: Props) => {
  return (
    <a
      {...rest}
      className={classNames(
        'px-3 py-2 hover:bg-white-300 rounded transition-colors text-center'
      )}
    >
      {icon}
      {children}
    </a>
  );
};
