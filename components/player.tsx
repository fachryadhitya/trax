import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import React from "react";

import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";

import { useStoreActions } from "easy-peasy";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = React.useState(true);
  const [index, setIndex] = React.useState(0);
  const [seek, setSeek] = React.useState(0);
  const [repeat, setRepeat] = React.useState(false);
  const [shuffle, setShuffle] = React.useState(false);
  const [duration, setDuration] = React.useState(0);

  const setPlayState = (val: boolean) => {
    setPlaying(val);
  };

  return (
    <Box>
      <Box>
        <ReactHowler src={activeSong?.url} playing={playing} />
      </Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            icon={<MdShuffle />}
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            color={shuffle ? "white" : "gray.600"}
            onClick={() => setShuffle(!shuffle)}
          />
          <IconButton
            icon={<MdSkipPrevious />}
            outline="none"
            variant="link"
            aria-label="skip"
            fontSize="24px"
          />
          {!playing ? (
            <IconButton
              icon={<MdOutlinePlayCircleFilled />}
              outline="none"
              variant="link"
              aria-label="play"
              fontSize="40px"
              color="white"
              onClick={() => setPlayState(true)}
            />
          ) : (
            <IconButton
              icon={<MdOutlinePauseCircleFilled />}
              outline="none"
              variant="link"
              aria-label="pause"
              fontSize="40px"
              color="white"
              onClick={() => setPlayState(false)}
            />
          )}

          <IconButton
            icon={<MdSkipNext />}
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
          />
          <IconButton
            icon={<MdOutlineRepeat />}
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            color={repeat ? "white" : "gray.600"}
            onClick={() => setRepeat(!repeat)}
          />
        </ButtonGroup>
      </Center>

      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={300}
              id="player-ranges"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="xs">321</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
