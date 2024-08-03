import React from "react";

function dashboardLayout({ children }: { children: React.ReactNode }) {
  {
    /*_is space in tailwind and 1fr fill the remaining space in grid*/
  }
  return (
    <div className="grid h-screen grid-cols-[250px_1fr]">
      <div className="overflow-auto bg-muted p-4">Side Panel</div>
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome Back, Renan!</h1>
        {children}
      </div>
    </div>
  );
}

export default dashboardLayout;
