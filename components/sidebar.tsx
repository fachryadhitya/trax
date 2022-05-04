import {
  Box,
  Center,
  Divider,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdLibraryMusic,
  MdSearch,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";
import NextLink from "next/link";

import { IconType } from "react-icons/lib";
import { usePlaylists } from "../lib/hooks";

type navProps = {
  name: string;
  icon: IconType;
  route: string;
};

const menu: navProps[] = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    route: "/favorites",
  },
];

const playlists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
  const { playlists } = usePlaylists();
  return (
    <Box
      width={"100%"}
      height="calc(100vh - 100px)"
      bg={"black"}
      paddingX="5px"
      color="gray"
    >
      <Box paddingY={"20px"} height="100%">
        <Box width={"120px"} marginBottom="20px" paddingX={"20px"}>
          <NextImage src={"/logo.svg"} height={60} width={120} />
        </Box>

        <Box marginBottom={"20px"}>
          <List spacing={2}>
            {menu.map((item) => (
              <ListItem key={item.name} paddingX="20px" fontSize={"16px"}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight={"20px"}
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom={"20px"}>
          <List spacing={2}>
            {musicMenu.map((item) => (
              <ListItem key={item.name} paddingX="20px" fontSize={"16px"}>
                <LinkBox>
                  <NextLink href={item.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={item.icon}
                        color="white"
                        marginRight={"20px"}
                      />
                      {item.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.700" width={"90%"} marginX="auto" />

        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists?.map((playlist) => (
              <ListItem paddingX="20px" key={playlist?.id}>
                <LinkBox>
                  <NextLink href={{
                    pathname: "/playlist/[id]",
                    query: { id: playlist.id },
                  }} passHref>
                    <LinkOverlay>{playlist.name}</LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
