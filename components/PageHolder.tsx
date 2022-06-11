export interface PageHolderProps {
  children: any
}

export default function PageHolder({children}: PageHolderProps) {
  return (
    <div
      className=""
    >
      {children}
    </div>
  )
}