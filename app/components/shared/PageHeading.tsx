import React, { FC } from "react";

interface IProps {
  children?: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageHeading: FC<IProps> = ({ title, subtitle, children }) => {
  return (
    <div className="mb-8">
      <h2 className="flex gap-4 text-2xl md:text-4xl font-black tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
          {title}
          <div className="h-1 w-12 md:w-20 rounded bg-gradient-to-r from-violet-600 to-indigo-600" />
        </span>
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeading;
