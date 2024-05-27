export default function MenuCard({ children, className }) {
  const classes = `version-card cursor-pointer shadow-sm rounded border w-[30%] h-20 flex flex-col gap-1 justify-center items-center text-[16px] font-medium text-main-dark tracking-wide opacity-90 hover:bg-main-purple hover:bg-opacity-5 ${className}`;
  return <div className={classes}>{children}</div>;
}
