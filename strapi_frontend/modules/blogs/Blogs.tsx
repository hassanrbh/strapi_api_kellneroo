import Link from 'next/link'
import React from 'react'
import { getStrapiURL } from '../../lib/api'
import { Articles } from '../../types/articles'
import Image from 'next/image'

type Props = {
  blog: Articles
}

const Blogs = ({ blog }: Props) => {
  return (
    <Link href={`/blogs/${blog.attributes.slug}`} key={blog.id}>
      <div className="p-6">
        <Image
          className={'rounded-super'}
          src={getStrapiURL(blog.attributes.background.data.attributes.url)}
          alt={blog.attributes.background.data.attributes.alternativeText}
          width={325}
          height={230}
        />

        <h2 className="mb-8 text-2xl font-semibold tracking-widest text-[#070707] mt-4">
          {blog.attributes.title}
        </h2>

        <h1 className="mx-auto mb-8 text-base  font-[400] leading-none tracking-tighter text-[#070707] lg:text-3xl break-words">
          {blog.attributes.description}
        </h1>

        <div className={'flex text-[#A1A1A1] font-bold text-xs '}>
          <p>
            {new Date(blog.attributes.createdAt).toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: undefined,
              day: 'numeric',
            })}
          </p>
          <p className={'ml-4'}>
            {blog.attributes.writer.data.attributes.name}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Blogs
