import {LeaderboardMember} from "../../types/leaderboardMember";
import {RingProgress, Space, Text, Title} from "@mantine/core";

export interface LevelDisplayProps {
  member: LeaderboardMember
}

export default function LevelDisplay({member}: LevelDisplayProps) {
  return (
    <>
      <div style={{display: "flex", marginLeft: "auto", flexDirection: "column"}}>
        <Title order={4} style={{alignSelf: "center"}}>Points</Title>
        <Text size="xl" style={{alignSelf: "center", margin: "auto"}}>{calculateXPForLevel(member.level) + member.points}</Text>
      </div>
      <Space w="xl"/>
      <div style={{display: "flex", flexDirection: "column"}}>
        <Title order={4} style={{alignSelf: "center"}}>Level</Title>
        <RingProgress
          style={{alignSelf: "center", margin: "auto"}}
          size={60}
          thickness={5}
          sections={[{value: calculateCompletionPercentage(member.level, member.points), color: 'violet'}]}
          label={
            <Text color="violet" align="center">
              {member.level}
            </Text>
          }
        />
      </div>
    </>
  )
}

export function calculateXPForLevel(level: number): number {
  let acc = 0
  for (let i = 0; i < level; i++) {
    acc += calculateXPNeededForNextLevel(i)
  }
  return acc
}

function calculateXPNeededForNextLevel(level: number): number {
  return 5 * (Math.pow(level, 2)) + 50 * level + 100
}

function calculateCompletionPercentage(level: number, currentXp: number): number {

  return (currentXp / calculateXPForLevel(level + 1)) * 100
}
