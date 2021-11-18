import { useState, useEffect } from 'react';
import Head from 'next/head';

// The Storyblok Client
import Storyblok, { useStoryblok } from '../lib/storyblok';
import DynamicComponent from '/components/dynamic/DynamicComponent';
import Navbar from '/components/static/Navbar';
import { Box, Flex, useBreakpoint, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Logo } from '/components/static/Logo';

const Home = ({ story, preview }) => {
  story = useStoryblok(story, preview);

  const breakpoint = useBreakpoint();
  const isMobile =
    breakpoint !== 'md' &&
    breakpoint !== 'lg' &&
    breakpoint !== 'xl' &&
    breakpoint !== '2xl';

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    if (isMobile === false) {
      setIsNavbarOpen(false);
    }
  }, [isMobile]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isMobile && (
        <Flex
          position="fixed"
          h="4rem"
          w="full"
          justifyContent="space-between"
          alignItems="center"
          px="4"
          bg="rgba(25, 27, 68, 0.8)"
        >
          <IconButton
            colorScheme="brand"
            aria-label="Open Nav"
            icon={<HamburgerIcon />}
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          />
          <Logo h="2rem" />
        </Flex>
      )}
      <Navbar
        isMobile={isMobile}
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />
      {/* <h1>{story ? story.name : "My Site"}</h1> */}
      <Box as="main" ml={['0', '0', '20rem']} mt={['20', '20, 28']}>
        <DynamicComponent blok={story.content} />
      </Box>
    </>
  );
};

export const getStaticProps = async (context) => {
  // the slug of the story
  const slug = 'home';
  // the storyblok params
  const params = {
    version: 'published', // or 'draft'
  };

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = 'draft';
    // appends the cache version to get the latest content
    params.cv = Date.now();
  }

  // loads the story from the Storyblok API
  const { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 3600,
  };
};

export default Home;
