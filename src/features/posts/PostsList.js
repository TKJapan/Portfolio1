import React from 'react'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)
    
  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <span className='post-content'>{post.content.substring(0,100)}</span>
        <img className="photo" src={post.photo} alt=""/>
    </article>
  ))
  return (
    <section className='posts-list'>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList
