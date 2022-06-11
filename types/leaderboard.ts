import {LeaderboardMember} from "./leaderboardMember";

export type Leaderboard = {
  guild_name: string,
  guild_icon?: string,
  members: LeaderboardMember[]
}