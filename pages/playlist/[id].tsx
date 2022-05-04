import { GetServerSidePropsContext } from "next";
import GradientLayout from "../../components/gradientLayout";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";
import SongsTable from "../../components/songsTable";

const getBgColor = (id) => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "gray",
    "purple",
    "teal",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const PlaylistDetail = ({ playlists }) => {
  const color = getBgColor(playlists?.id);
  return (
    <GradientLayout
      color={color}
      title={playlists?.name}
      subtitle="playlist"
      description={`${playlists?.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlists?.id}`}
    >
      <SongsTable songs={playlists?.songs} />
    </GradientLayout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  let user;
  try {
    user = validateToken(ctx.req.cookies.token);
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }
  const [playlists] = await prisma.playlist.findMany({
    where: {
      id: Number(ctx.query.id),
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      playlists,
    },
  };
};

export default PlaylistDetail;
