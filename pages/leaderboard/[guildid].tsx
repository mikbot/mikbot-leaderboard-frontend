import {Leaderboard} from "../../types/leaderboard";
import {GetServerSideProps} from "next";
import PageHolder from "../../components/PageHolder";
import PageTitle from "../../components/PageTitle";
import PageContent from "../../components/PageContent";
import {Card, Divider, Space, Text, Title} from "@mantine/core";
import UserPosition from "../../components/leaderboard/UserPosition";
import LeaderboardAvatar from "../../components/leaderboard/LeaderboardAvatar";
import LeaderboardName from "../../components/leaderboard/LeaderboardName";
import LevelDisplay from "../../components/leaderboard/LevelDisplay";
import React from "react"
import Head from "next/head";

export interface GuildLeaderboardProps {
  leaderboard: Leaderboard
}

export default function GuildLeaderboardPage({leaderboard}: GuildLeaderboardProps) {
  return (
    <>
      <Head>
        <title>Leaderboard for {leaderboard.guild_name}</title>
        <meta name="description" content={`Mikbot-Level-Leaderboard for ${leaderboard.guild_name}`}/>
        <meta property="og:title" content={leaderboard.guild_name}/>
        <meta name="og:description" content={`Mikbot-Level-Leaderboard for ${leaderboard.guild_name}`}/>
      </Head>
      <PageHolder>
        <PageTitle>Leaderboard for {leaderboard.guild_name}</PageTitle>
        <PageContent>
          <Card radius="md" style={{width: "70%", margin: "auto", overflow: "auto"}} px="xl">
            {leaderboard.members.map((member, index, array) => {
              return (
                <React.Fragment key={member.user_id}>
                  <div style={{display: "inline-flex", width: "100%", minWidth: "70vh"}}>
                    <UserPosition position={index + 1}/>
                    <Space w="md"/>
                    <LeaderboardAvatar avatarUrl={member.avatar_url}/>
                    <Space w="md"/>
                    <LeaderboardName>
                      <Title order={2} style={{maxWidth: "50vh", overflowWrap: "anywhere"}}>{member.username}</Title>
                      <Text>#{member.discriminator}</Text>
                    </LeaderboardName>
                    <Space w="xl"/>
                    <LevelDisplay member={member}/>
                  </div>
                  {array.length - 1 > (index) &&
                    (
                      <>
                        <Space h="md"/>
                        <Divider style={{width: "100%", minWidth: "70vh"}}/>
                        <Space h="md"/>
                      </>
                    )
                  }
                </React.Fragment>
              )
            })}
          </Card>
        </PageContent>
      </PageHolder>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const baseUrl = process.env.API_BASE_URL
  const {guildid} = context.query

  const response = await (await fetch(`${baseUrl}/leaderboard/guilds/${guildid}`)).json()

  return {
    props: {
      leaderboard: response
    }
  }
}
