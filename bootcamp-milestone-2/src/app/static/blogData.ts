export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    title: "Cinque Terre",
    date: "10/21/2023",
    description: "My first weekend trip exploring another part of Italy!",
    image: "/cinque_terre_1.jpg",
    imageAlt: "cinque terre view",
    slug: "cinque-terre.html",
  },
  {
    title: "Tuscany",
    date: "10/21/2023",
    description: "The program-organized event, covering Flourence and Pisa",
    image: "/tuscany_group.jpg",
    imageAlt: "tuscany view",
    slug: "tuscany.html",
  },
];

export default blogs;
