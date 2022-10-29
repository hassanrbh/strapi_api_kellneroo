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
    <Link
      className="link-width"
      href={`/blogs/${blog.attributes.slug}`}
      key={blog.id}
    >
      <div className="p-6 mx-auto">
        <Image
          className="image-size mx-auto hover:shadow-xl"
          src={getStrapiURL(blog.attributes.background.data.attributes.url)}
          alt={blog.attributes.background.data.attributes.alternativeText}
          width={325}
          height={230}
        />

        <h2 className="blog-title font-archia">{blog.attributes.title}</h2>

        <h5 className="blog-description text-base break-word">
          {blog.attributes.description}
        </h5>

        <div
          className={
            'font-archia flex text-[#A1A1A1] font-bold text-xs d-flex gap-3'
          }
        >
          <p className="pr-2">
            {new Date(blog.attributes.createdAt).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              day: 'numeric',
              month: undefined,
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
