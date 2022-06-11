export interface LeaderboardNameProps {
  children: any
}

export default function LeaderboardName({children}: LeaderboardNameProps) {
  return (
    <span style={{alignSelf: "center", display: "inline-flex"}}>
      {children}
    </span>
  )
}
