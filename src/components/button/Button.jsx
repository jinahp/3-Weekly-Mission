import clsx from 'clsx';
import './button.scss';

export function Button({ children, className }) {
  className = clsx('button', className);
  return <button className={className}>{children}</button>;
}

export default Button;
