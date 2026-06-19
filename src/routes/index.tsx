import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BotLeague — India's Ultimate Robotics Arena" },
      {
        name: "description",
        content:
          "Build. Compete. Rank. Join India's national robotics arena ecosystem — tournaments, leaderboards, and career pathways for builders.",
      },
      { property: "og:title", content: "BotLeague — India's Ultimate Robotics Arena" },
      {
        property: "og:description",
        content:
          "Build. Compete. Rank. Join India's national robotics arena ecosystem.",
      },
    ],
  }),
  component: Landing,
});
