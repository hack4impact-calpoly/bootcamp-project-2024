import style from './portfolio.module.css';
import projects from '../projectData';
import ProjectPreview from '@/components/projectPreview';
import React from "react";

export default async function Portfolio(){
    //const [project,setProjects] = useState(projects)

    // const reload = (())

    if (projects !== null){
        return (
            <div className={style.main}>
                <h1 className={style.pageTitle}>Portfolio</h1>
                <div className={style.projectLayout}>
                    {(projects).map((project) => 
                        project._id).map((title,index) =><ProjectPreview key={index} comment={title} />)
                        }
                </div>
            </div>
            
        )
    }
    return (
        <div className={style.main}>
            <h1 className={style.pageTitle}>Portfolio</h1>
            <div className={style.projectLayout}>
                <p>No current projects.</p>
            </div>
        </div>
 
    )
}