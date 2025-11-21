type GridContainerProps = {
    children: React.ReactNode;
}

export default function GridContainer({children}: GridContainerProps) {
  return (
    <div className="w-[95%] md:w-1/2 mx-auto mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {children}
    </div>
  )
}