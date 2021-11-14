import React from "react";
import DynamicComponent from "/components/dynamic/DynamicComponent";
import Head from "next/head";
import Navbar from "/components/static/Navbar";

import Storyblok, { useStoryblok } from "/lib/storyblok";

const Page = ({ story, preview }) => {
  story = useStoryblok(story, preview);

  return (
    <>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <DynamicComponent blok={story.content} />
    </>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const slug = params.slug ? params.slug.join("/") : "home";

  const sbParams = {
    version: "draft", // or published
  };

  if (preview) {
    sbParams.version = "draft";
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
  const { data } = await Storyblok.get("cdn/links/", {
    starts_with: "pages",
  });

  const paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    // don't create routes for folders and the index page
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    // remove the pages part from the slug
    const newSlug = slug.replace("pages", "");
    const splittedSlug = newSlug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export default Page;
