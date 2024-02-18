import clsx from 'clsx';
import styles from './button.module.scss';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ children, className }: ButtonProps) => {
  const buttonClassName = clsx(styles.button, className);
  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
