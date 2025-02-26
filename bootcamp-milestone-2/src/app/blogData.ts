export type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title:"'First' Blog",
    date:"2025-02-16",
    description:"Fresh start I suppose",
    image:"/Cherrim.png",
    imageAlt:"Cherrim",
    slug:"cherrim"
  },
  {
    title:"Hello again",
    date:"2025-02-16",
    description:"Meet the Maltese",
    image:"/dance-maltese.png",
    imageAlt:"maltese dancing",
    slug:"maltese"
  },
  {
    title:"Winter quarter blues",
    date:"2025-02-16",
    description:"Winter quarter is tough, glad to have a logn weekend to rest and catch up ^^",
    image:"/pusheen-crying.png",
    imageAlt:"Pusheen the cat crying",
    slug:"winter-quarter"
  }
];

export default blogs;
