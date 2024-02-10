function Container({ children }) {
  return (
    <div className="max-w-[var(--container-width-max)] w-full bg-indigo-50 md:bg-white rounded-xl mx-auto md:p-4 md:pr-0 flex flex-col lg:flex-row min-h-screen lg:min-h-[var(--container-height-min)] relative">
      {children}
    </div>
  );
}

export default Container;
