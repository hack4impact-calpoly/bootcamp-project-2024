"use client"
import style from './commentSection.module.css';
import React, {useState} from "react";

type Props = {
   slug: string,
   type: string
}

export default function CommentSection(props: Props){
    
    const slug = props.slug
    const type = props.type
    
    const [formData, setFormData] = useState(
        {
            user: "",
            comment: ""
        }
    )
    const [status, setStatus] = useState("")

    async function addComment(){
        
        try{
            if (type == "blog"){
                const result = await fetch(`/api/Blogs/${slug}/comment`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        slug: slug,
                        user: formData.user,
                        comment: formData.comment,
                        date: new Date()
                    }),
                  })
                  console.log(result)
            }
            else {
                const result = await fetch(`/api/portfolio/comment`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: slug,
                        user: formData.user,
                        comment: formData.comment,
                        date: new Date()
                    }),
                  })
                  console.log(result)
            }
            
            console.log(new Date())
            
            setStatus("Comment added!")
        }catch(err){
            console.log("Failed to add comment", err)
            setStatus("unable to post comment")
        }
        
    }
    
    return (
        <div>
            <h6 className={style.h6}>Add a comment</h6>
				<form onSubmit={addComment}>
                    <label className={style.label}>Name</label>
                    <input className={style.text} type="text" id="name" name="user"  onChange={(e) => {setFormData({user: e.target.value,comment:formData.comment});console.log(formData)}}/>
                    <label className={style.label}>Message</label>
                    <input className={style.text} type="text" id="comment" name="comment" onChange={(e) => {setFormData({user: formData.user,comment:e.target.value});console.log(formData)}}/>
                    <input className={style.submit} type="submit" id="submit" name="submit"/>
				</form>
                <div className={style.status}>
                    {status}
                </div>
		</div>
    )
}