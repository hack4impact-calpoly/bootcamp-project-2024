"use client"
import type {IProject} from "@/database/projectSchema";
import style from './projectPreview.module.css';
import Link from "next/link";
import Image from "next/image";
import Comment, { IComment } from "./comment";
import ProjectComment from "./projectComment";
import React, {useState, useEffect} from "react";

interface projectProp {
    comment: string;
}

    //const details: string[] = project.details.split(". ")

    function formatDetails(detail: string, index: number){
        return <p className={style.projectDetailsText} key={index}>{detail.trim() + "."}</p>
    }

    // function displayComments(comments: IComment[]){
    //     if (comments.length == 0){
    //         return(
    //             <div className={style.projectDetailsText}>
    //                 No comments right now.
    //             </div>
    //         )
    //     }
    //     return (
    //         comments.map((comment: IComment, index: number) => (
    //             <Comment key={index} comment={comment} />)))
    // }

export default function ProjectPreview(title: projectProp){
    //const [comments, setComments] = useState([])
    const name = title["comment"]
    const [project,setProject] = useState<IProject| null>(null)
    const getProject = async(title: string) => {
        try {
            // This fetches the blog from an api endpoint that would GET the blog
            console.log("hi", title)
            const res = await fetch(`/api/portfolio/${title}`, {
                cache: "no-store",	
            })
            // This checks that the GET request was successful
            if (!res.ok) {
                console.log("here(")
                throw new Error("Failed to fetch project");
            }
            console.log("hihi")
            const proj: IProject = await res.json();
            setProject(proj);
        } catch (err: unknown) {
            console.log(`error: ${err}`);
            //return null;
            // `` are a special way of allowing JS inside a string
            // Instead of "error: " + err, we can just do the above
            // it is simular to formated strings in python --> f"{err}"
        }
    }
    
    useEffect(() => {getProject(name)}, [name])
    //await getProject(name)
    
    console.log("title",name)
    //const project = await getProject(name)

    console.log(project)

    function refreshPage(){
        getProject(name)
    }


    if (project !== null){
        const details: string[] = project.details.split(". ")


        
        return (
            <div className={style.projectLayout}>
                <div className={style.project}>
                    <div className={style.projectImage}>
                        <Link href={project.link} target="_blank">
                            <Image src={project.image} width={400} height={40} alt={project.imageAlt}/>
                        </Link>
                    </div>
                    <div className={style.projectDetails}>
                        <h2 className={style.projectName}>{project.title}</h2>
                        <div>
                            {details.map((detail, index) => formatDetails(detail, index))}
                        </div>
                        <Link href={project.link} className={style.projectLink}>Learn More</Link>
                    </div>
                    <div className={style.projectComments}>
                        <h4 className={style.commentHead}>Comments</h4>
                        {/* {displayComments(project.comments)} */}
                        {project.comments.length >0 && (project.comments.map((comment: IComment, index: number) => (
                <Comment key={index} comment={comment} />)))}
                        <ProjectComment slug={project.title} onSubmit={refreshPage} />
                    </div>
                </div> 
            </div>
    
        )
    }

    if (project == null){
        return (
            <div>Project doesn&apos;t exist</div>
        )
    }

    
}