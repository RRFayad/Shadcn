interface LoggedOutLayoutProps {
  children?: React.ReactNode;
}

function LoggedOutLayout({ children }: LoggedOutLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      {children}
    </div>
  );
}

export default LoggedOutLayout;
