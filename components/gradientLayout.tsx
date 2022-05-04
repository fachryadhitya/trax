import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image, Skeleton } from "@chakra-ui/react";
import React from "react";

type Props = {
  children?: React.ReactNode;
  color?: string;
  image?: string;
  title?: string;
  description?: string;
  roundImage?: boolean;
  subtitle?: string;
  isLoading?: boolean;
};

const GradientLayout: React.FC<Props> = ({
  color,
  image,
  roundImage,
  title,
  subtitle,
  description,
  children,
  isLoading
}) => {
  return (
    <Skeleton height="100%" isLoaded={!isLoading}>
      <Box
        height="100%"
        overflowY="auto"
        bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
      >
        <Flex bgColor={`{${color}.600}`} padding="40px" align="end">
          <Box padding="20px">
            <Image
              boxSize="160px"
              boxShadow="2xl"
              src={image}
              borderRadius={roundImage ? "100%" : "3px"}
            />
          </Box>

          <Box padding="20px" lineHeight="40px" color="white">
            <Text fontWeight="bold" casing="uppercase" fontSize="x-small">
              {subtitle}
            </Text>

            <Text fontSize={"6xl"}>{title}</Text>
            <Text fontSize={"x-small"}>{description}</Text>
          </Box>
        </Flex>
        <Box paddingY={"50px"}>{children}</Box>
      </Box>
    </Skeleton>
  );
};

export default GradientLayout;
