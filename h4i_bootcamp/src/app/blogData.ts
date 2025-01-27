type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };
  
  const blogs: Blog[] = [
    {
      title: "Downtown",
      date: "10/16/2024",
      description: "Went downtown to eat some Thai food",
      image: "h4i_bootcamp/public/downtown.jpg",
      imageAlt: "Image of Downtown",
      slug: "downtown",
    },
    {
      title: "Milestone 1",
      date: "10/19/2024",
      description: "First milestone in H4I bootcamp",
      image: "h4i_bootcamp/public/cat.jpg",
      imageAlt: "Milestone 1 Image",
      slug: "milestone1",
    },
  ];
  
  export default blogs;
  