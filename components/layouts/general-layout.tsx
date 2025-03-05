import Header from "./header";

function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default GeneralLayout;
