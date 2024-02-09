function Container({ children }) {
  return (
    <div className="max-w-[966px] w-full bg-indigo-50 md:bg-white rounded-xl mx-auto md:p-5 flex flex-col lg:flex-row min-h-screen lg:min-h-[640px] relative">
      {children}
    </div>
  );
}

export default Container;
