export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };
  
  // blog content
  const blogs: Blog[] = [
    {
      title: "First Blog!",
      date: "10/16/2024",
      description: "This is my first blog post :)",
      image: "../images/IMG_5468.jpg",
      imageAlt: "..",
      slug: "first-blog",
    },
    {
      title: "Second Blog!",
      date: "10/16/2024",
      description: "This is my second blog post :)",
      image: "../images/IMG_7633_2.jpg",
      imageAlt: "..",
      slug: "second-blog",
    }
  ];
  
  export default blogs;