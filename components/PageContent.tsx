export interface PageContentProps {
  children: any
}

export default function PageContent({children}: PageContentProps) {
  return (
    <main style={{width: "70%", margin: "auto"}}>
      {children}
    </main>
  )
}