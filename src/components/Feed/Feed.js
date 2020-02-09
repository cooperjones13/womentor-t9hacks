import React from 'react'
import Post from './Post'
export default function Feed({classes}){

    const mockPosts = [
        {
            "title": "The title of this is Post #1",
            "fullName":"Cooper Jones",
            "username":"cooperjonesphotos",
            "uid":"GFIPHFOBIW",
            "content": "This is an example of a post!"
        },
        {
            "title": "Yo this one is Post #2",
            "fullName":"Madi Heath",
            "username":"madheat",
            "uid":"GFKJGOIGKV",
            "content": "This is another example of a post!"
        }
    ]

    return(
        <div className={classes().content}>
            <div className={classes().toolbar}/>
            {mockPosts.map(postData =>(
                <Post post={postData} key={postData.uid}/>
            ))}
        </div>
    )
}