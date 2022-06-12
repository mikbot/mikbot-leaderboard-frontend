import {ScrollArea} from "@mantine/core";

export interface PageHolderProps {
  children: any
}

export default function PageHolder({children}: PageHolderProps) {
  return (
    <ScrollArea style={{height: "100vh"}}>
      {children}
    </ScrollArea>
  )
}