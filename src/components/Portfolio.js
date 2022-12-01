import React from 'react'

function MyPortfolio(prop) {
    const [project, setProjects]= useState([
        {
            project: ""
        },{
            project: ""
        }
    ])

    
    return (
        <div>
            <ul>
                {/* bucketitem is a differnet component that was a list we put this into */}
                {tasks.map((item,i) => <BucketItem key={i} project={item}/>)}
            </ul>
        </div>
    )
}

export default MyPortfolio;