import {Title} from "@mantine/core";

export interface PageTitleProps {
  children: any
}

export default function PageTitle({children}: PageTitleProps) {
  return (
    <header style={{marginTop: "4vh", marginBottom: "5vh"}}>
      <Title style={{width: "70%", margin: "auto"}}>{children}</Title>
    </header>
  )
}