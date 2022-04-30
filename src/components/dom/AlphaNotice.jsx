import { useState, useRef } from 'react'
import {
  Text,
  IconButton,
  Box,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export function AlphaNotice() {
  const [toggle, setToggle] = useState(true);
  const notice= useRef(null);

  return (
    <Box
      ref={notice}
      // display="none"
      bg="greenGlassAlpha"
      backdropFilter="blur(7px)"
      boxShadow="0 0 15px rgba(0,0,0,0.6)"
      color="green.300"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      width="100%"
      textAlign="center"
      height="auto"
      opacity={toggle ? 1 : 0}
      transform={`translateY(${toggle ? 0 : 100}px)`}
      transition="transform 0.3s 0.2s ease-in-out, opacity 0.3s 0.3s ease-in-out"
      zIndex={3000}
    >
      <Box
        d="flex"
        position="relative"
        alignItems="center"
        justifyContent="space-around"
        flexFlow="row nowrap"
        mx="auto"
        maxW={{base: '75%', md: '66%', '2xl': "6xl"}}
        px={{base: 5, lg: 3}}
        py={3}
      >
        {/* <Image src={BabyOctoGif} boxSize="25px" objectFit="cover" /> */}
        <Text fontSize={{base: "2vmin", lg: '0.7vmax'}} fontWeight={700}>
          The site is in{" "}
          <Text as="span" color="blue.400" fontWeight="700">
            Alpha
          </Text>
          .{" "}
          <span role="img" aria-label="watchful eyes">
            👀
          </span>{" "}
          We just finished a hackathon and have been busy forging our ideas and partnerships. The marketplace is still under construction, but we are working it. Forgive the bugs, we <em>are</em> squishing them. Watch this space.
        </Text>
        {/* <Image src={BabyOctoGif} boxSize="35px" objectFit="cover" /> */}
        <IconButton
          onClick={() => setToggle(!toggle)}
          colorScheme="ghost"
          color="green.400"
          pos="fixed"
          bottom={3}
          right={{base: 2, lg: 6}}
          size="sm"
          aria-label="Close easter egg"
          icon={<CloseIcon />}
          zIndex={2001}
        />
      </Box>
    </Box>
  );
};

