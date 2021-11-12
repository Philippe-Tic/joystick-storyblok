import Head from "next/head";

// The Storyblok Client
import Storyblok, { useStoryblok } from "../lib/storyblok";
import DynamicComponent from "/components/dynamic/DynamicComponent";

const Home = ({ story, preview }) => {
  // we only initialize the visual editor if we're in preview mode
  story = useStoryblok(story, preview);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>{story ? story.name : "My Site"}</h1>
      </header>
      <main>
        <DynamicComponent blok={story.content} />
      </main>
    </div>
  );
};

export const getStaticProps = async (context) => {
  // the slug of the story
  const slug = "home";
  // the storyblok params
  const params = {
    version: "published", // or 'draft'
  };

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft";
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
