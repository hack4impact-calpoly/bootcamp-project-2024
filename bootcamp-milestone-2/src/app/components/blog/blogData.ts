export interface Blog {
  // can also use type instead of export interface
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string; // The url portion that redirects to a specific page within a url
}

const blogs: Blog[] = [
  {
    title: "blog one",
    date: "Coming soon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "Coming soon",
    imageAlt: "Coming soon",
    slug: "blog-one",
  },

  {
    title: "blog two",
    date: "Coming soon",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "Coming soon",
    imageAlt: "Coming soon",
    slug: "blog-two",
  },
];

export default blogs;
