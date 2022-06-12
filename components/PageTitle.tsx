export interface PageTitleProps {
  children: any
}

export default function PageTitle({children}: PageTitleProps) {
  return (
    <header style={{marginTop: "4vh", marginBottom: "5vh", width: "70%", marginLeft: "auto", marginRight: "auto"}}>
      {children}
    </header>
  )
}