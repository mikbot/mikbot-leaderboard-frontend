export interface PageContentProps {
  children: any
}

export default function PageContent({children}: PageContentProps) {
  return (
    <main className="">
      {children}
    </main>
  )
}