import './Blog.css'
function Blog({post}){
    return(
        <div className='flex flex-col gap-3'>
            <p className='title'>{post.title}</p>
            <div>
                 <p className='p-data'>By <span className='author'>{post.author}</span> On <span className='font-bold'>{post.category}</span></p>
            <p className='p-data'>Posted On {post.date}</p>
            </div>
           
            <div className='text-[1.2em]'>
                {post.content}
            </div>

            <div className='tags flex gap-[8px] '>
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