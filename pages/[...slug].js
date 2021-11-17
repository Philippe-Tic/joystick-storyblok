import { useState, useEffect } from 'react';
import Head from 'next/head';

// The Storyblok Client
import Storyblok, { useStoryblok } from '../lib/storyblok';
import DynamicComponent from '/components/dynamic/DynamicComponent';
import Navbar from '/components/static/Navbar';
import { Box, Flex, useBreakpoint, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Logo } from '/components/static/Logo';

const Page = ({ story, preview }) => {
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
        <title>{story ? story.name : 'My Site'}</title>
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
            aria-label="Search database"
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
      <Box as="main" ml={['0', '0', '20rem']} mt={['20', '20, 28']}>
        <DynamicComponent blok={story.content} />
      </Box>
    </>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const slug = params.slug ? params.slug.join('/') : 'home';

  const sbParams = {
    version: 'draft', // or published
  };

  if (preview) {
    sbParams.version = 'draft';
    sbParams.cv = Date.now();
  }

  // load the stories insides the pages folder
  const { data } = await Storyblok.get(`cdn/stories/pages/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
      preview,
    },
    revalidate: 3600, // revalidate every hour
  };
};

export const getStaticPaths = async () => {
  const { data } = await Storyblok.get('cdn/links/', {
    starts_with: 'pages',
  });

  const paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    // don't create routes for folders and the index page
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    // remove the pages part from the slug
    const newSlug = slug.replace('pages', '');
    const splittedSlug = newSlug.split('/');

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Page;
