export type LeaderboardMember = {
  user_id: number,
  username?: string,
  effective_name?: string,
  discriminator?: string,
  points: number,
  level: number,
  last_xp_received: string,
  avatar_url?: string
}