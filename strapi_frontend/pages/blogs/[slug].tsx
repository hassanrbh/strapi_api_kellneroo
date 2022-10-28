import React from 'react'
import { fetchAPI, getStrapiURL } from '../../lib/api'
import { Articles } from '../../types/articles'
import { BooksAttributes } from '../../types/books'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faYoutube,
// } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const Blog = ({
  blog,
}: {
  blog: { id: number; attributes: BooksAttributes }
}) => {
  return (
    <div>
      <div className={'flex justify-center container flex-col '}>
        <div className={'text-[#000000] font-[300] text-xs  mt-4'}>
          Sie sind hier: Kellneroo {'>'}{' '}
          <span className={'text-black font-medium ml-1'}>
            {blog.attributes.title}
          </span>
        </div>

        <div className={'mt-20 flex gap-3 text-xs font-bold items-center'}>
          <div
            className={
              'bg-[#A1A1A1] text-white h-6 w-20 md:mb-0 rounded-full flex items-center justify-center cursor-pointer'
            }
          >
            <p className={`text-xs  font-semibold`}>
              {blog.attributes.category.data.attributes.name}
            </p>
          </div>
          <div className={'text-[#A1A1A1]'}>
            {new Date(blog.attributes.publishedAt).toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: undefined,
              day: 'numeric',
            })}
          </div>
          <div className={'text-[#A1A1A1]'}>
            {blog.attributes.writer.data.attributes.name}
          </div>
        </div>
        <div
          className={'mt-2 font-[600] text-[54px] text-[#1A1A1A] font-archia'}
        >
          {blog.attributes.title}
        </div>
        <p
          className={'font-[300] text-2xl text-[#1A1A1A] max-w-md font-archia'}
        >
          {blog.attributes.description}
        </p>
        {/* <div className={'flex items-center gap-3 text-black mt-2'}>
          <FontAwesomeIcon icon={faFacebook} width={'21px'} />
          <FontAwesomeIcon icon={faTwitter} width={'21px'} />
          <FontAwesomeIcon icon={faInstagram} width={'21px'} />
          <FontAwesomeIcon icon={faYoutube} width={'21px'} />
        </div> */}
      </div>
      <div className={'mt-10'}>
        <Image
          src={getStrapiURL(blog.attributes.background.data.attributes.url)}
          className={'w-full rounded-help h-[830px]'}
          width={blog.attributes.background.data.attributes.width}
          alt={blog.attributes.background.data.attributes.alternativeText}
          height={830}
          quality={100}
          priority
        />
      </div>
      <div className={'flex justify-between items-center container mx-auto'}>
        <summary>
          <ul>
            <div className={'text-lg text-[500] text-black'}>SUMMARY</div>
            {blog.attributes.articles.data.map((article, idx) => (
              <li key={article.id} className={'text-lg text-[500] font-archia'}>
                {idx + 1}. {article.attributes.title}
              </li>
            ))}
          </ul>
        </summary>
        <div>
          {blog.attributes.articles.data.map((article) => (
            <div key={article.id}>
              <p>{article.attributes.title}</p>
              <div>{article.attributes.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className={'font-raleway text-2xl font-bold'}>TRENDING ARTICLES</h1>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const articlesRes = (await fetchAPI('/blogs', {
    fields: ['slug'],
  })) as { data: Articles[] }

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug.toString(),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const blogs = await fetchAPI('/blogs', {
    filters: {
      slug: params.slug,
    },
    populate: '*',
  })

  return {
    props: { blog: blogs.data[0] },
    revalidate: 1,
  }
}

export default Blog
