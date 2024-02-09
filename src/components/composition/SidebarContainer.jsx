function SidebarContainer({ children }) {
  return (
    <div className="-mt-[5.25rem] md:mt-0 bg-white rounded-lg p-[2.5rem_1.5rem] md:p-10 lg:p-[3rem_3.25rem_1rem_4.5rem] basis-full text-indigo-950 flex flex-col w-full min-h-[420px] max-w-[400px] sm:max-w-md mx-auto md:max-w-none mb-28 md:mb-0 shadow-[4px_4px_50px_-15px] shadow-black/30  md:shadow-none">
      {children}
    </div>
  );
}

export default SidebarContainer;
