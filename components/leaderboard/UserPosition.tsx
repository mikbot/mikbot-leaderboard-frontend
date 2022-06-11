import {Title} from "@mantine/core";

export interface UserPositionProps {
  position: number
}

export default function UserPosition({position}: UserPositionProps) {
  return <Title order={3} style={{alignSelf: "center"}}>{position}.</Title>
}