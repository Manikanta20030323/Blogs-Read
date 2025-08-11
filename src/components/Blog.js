
function Blog({post}){
    return(
        <div>
            <p>{post.title}</p>
            <p>By {post.author} On <span>{post.category}</span></p>
            <p>Posted On {post.date}</p>
            <div>
                {post.content}
            </div>

            <div>
                {
                    post.tags.map((tag,index)=>{
                        return <span key={index}>#{tag}</span>
                    })
                }
            </div>
        </div>
    )

}

export default Blog;