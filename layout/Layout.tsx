import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-[100vh] xl:px-10 p-2 lg:px-10 md:px-7 sm:px-7 dark:bg-bgDark">
      {children}
    </div>
  );
};

export default Layout;
