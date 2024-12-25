import Image from "next/image";
import Comments from "@/components/comment";
import BLOGType from "@/database/blogSchema";
import CommentForm from "@/components/CommentForm";

async function getBlog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(
      `https://saurish-personal-website.vercel.app/api/Blogs/${slug}`,
      {
        cache: "no-store",
      }
    );
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cmnt: BLOGType = await getBlog({ params });
  const comList = cmnt["comments"];
  comList.sort((a, b) => a.time.localeCompare(b.time));

  return (
    <div className={"blog-element"}>
      <h1>{cmnt["title"]}</h1>
      <div className={"blog-img"}>
        <Image
          src={cmnt["image"]}
          alt={cmnt["image_alt"]}
          width={300}
          height={300}
        ></Image>
      </div>
      {cmnt["content"]}
      <h2>Comments</h2>
      {comList.map((fcomment, index) => (
        <Comments
          user={fcomment.user}
          comment={fcomment.comment}
          time={fcomment.time}
          key={index}
        />
      ))}
      <div className="blog-element">
        <h5>Add Your Comment Here!</h5>
        <CommentForm slug={slug} />
      </div>
    </div>
  );
}
