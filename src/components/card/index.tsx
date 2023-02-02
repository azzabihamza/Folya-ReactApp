import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card: FC<Props> = ({ children, className }) => {
  return (
    <div className={`${className} rounded p-4 bg-white shadow`}>
      {children}
    </div>
  );
};