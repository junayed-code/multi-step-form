function SidebarHeader({ title, subTitle }) {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2.5">{title}</h2>
      <p className="text-gray-500 mb-8 md:mb-12">{subTitle}</p>
    </>
  );
}

export default SidebarHeader;
