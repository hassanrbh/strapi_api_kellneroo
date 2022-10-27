import React from 'react'
import { fetchAPI } from '../../lib/api'
import Seo from '../../modules/seo/seo'
import { Articles } from '../../types/articles'
import Blogs from '../../modules/blogs/Blogs'

type IIndex = {
  blogs: Articles[]
  homepage: any
}

const Index = ({ blogs, homepage }: IIndex) => {
  return (
    <div>
      <div>
        <svg
          width="100%"
          height="481"
          viewBox="0 0 1440 481"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={'rounded-super'}
        >
          <rect width="1441" height="420" fill="#4A7081" />
        </svg>
      </div>

      <div className={'container mx-auto'}>
        <Seo seo={homepage.attributes.seo} />
        <div className={''}>
          <div className={'text-black font-[300] text-xs'}>
            Sie sind hier: Kellneroo {'>'}{' '}
            <span className={'text-black font-medium ml-1'}>All Blogs</span>
          </div>
          <div
            className={
              'text-[##423A3F] font-bold text-[54px] my-10 text-center'
            }
          >
            Our blog posts
          </div>
        </div>

        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-3 gap-6 mx-auto lg:grid-cols-1">
            {blogs.map((blog) => (
              <Blogs key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const [blogsRes, homepageRes] = await Promise.all([
    fetchAPI('/blogs', { populate: '*' }), // all the relationship, images ....
    fetchAPI('/homepage', {
      populate: {
        hero: '*',
        seo: { populate: '*' },
      },
    }),
  ])

  return {
    props: {
      blogs: blogsRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Index
