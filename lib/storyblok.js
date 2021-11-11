import StoryblokClient from "storyblok-js-client";

export const Storyblok = new StoryblokClient({
  accessToken: "yrHEuQQdSo7Sy7mevPPS5Att",
  cache: {
    clear: "auto",
    type: "memory",
  },
});
