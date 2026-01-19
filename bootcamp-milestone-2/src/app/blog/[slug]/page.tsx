import style from '../blog.module.css'
import Image from 'next/image';
import Comment, {IComment} from '@/components/comment';
import CommentSection from '@/components/commentSection';


type Props = {
    params: Promise<{ slug: string }>
}

async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
        
		const res = await fetch(`${process.env.URL}/api/Blogs/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}

export default async function Blog({params}: Props) {
	// now we can access slug
	const {slug} = await params;
	const blog = await getBlog(slug);
    console.log(blog)
	if (blog == null){
        return <div>Blog not found</div>
    }

    const date: string[] = blog.date.toString().split("-");
    const dateFormat: string = date[1] + "/" + date[2].slice(0,2) + "/" + date[0];
    console.log(blog.comments)
    return (
        <div className={style.main}>
        <h1 className={style.h1}>{blog.title}</h1>
        <h5 className={style.h5}>{'Posted on: ' + dateFormat}</h5>
        <Image className={style.image} width={300} height={200} src = {blog.image} alt={blog.imageAlt}/>
        <p>{blog.content}</p>  
        <div className={style.comments}>
            <h5 className={style.h5}>Comments</h5>
                {blog.comments.map((comment: IComment, index: number) => (
	                <Comment key={index} comment={comment} />))}
				<CommentSection slug={slug} type="blog"/>
        </div>
        
    </div>
    )
}