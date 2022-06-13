import {Avatar} from "@mantine/core";

export interface LeaderboardAvatarProps {
  avatarUrl?: string
}

export default function LeaderboardAvatar({avatarUrl}: LeaderboardAvatarProps) {
  return <Avatar
    src={avatarUrl}
    alt="profile picture"
    style={{alignSelf: "center"}}
    size="lg"
    radius="xl"
    imageProps={{loading: "lazy"}}
  />
}