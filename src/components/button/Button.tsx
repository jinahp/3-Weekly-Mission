import clsx from 'clsx';
import './button.scss';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ children, className }: ButtonProps) => {
  const buttonClassName = clsx('button', className);
  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
