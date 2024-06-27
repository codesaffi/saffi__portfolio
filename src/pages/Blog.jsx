import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot} from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
  return (
    <>
          <article className="blog" data-page="blog">

<header>
  <h2 className="h2 article-title">Blog</h2>
</header>

<section className="blog-posts">


  <div className="icon-box robot">
    <i><FontAwesomeIcon className='rob' icon={faRobot} /></i>
<h1>this blog has no post</h1>
</div>

</section>

</article>
    </>
  )
}

export default Blog