import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  href?: string;
  onClick?: () => void;
}

export function Button({ variant = 'primary', children, icon: Icon, href, onClick }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition hover:scale-105 transform duration-200 flex items-center gap-2";
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90",
    secondary: "bg-white/10 hover:bg-white/20"
  };

  const ButtonContent = () => (
    <>
      {children}
      {Icon && <Icon size={20} />}
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={`${baseStyles} ${variants[variant]}`}
      >
        <ButtonContent />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      <ButtonContent />
    </button>
  );
}