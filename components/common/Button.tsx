"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`text-sm text-gray-700 hover:bg-blue-50 rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 