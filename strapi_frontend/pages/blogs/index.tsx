import React from 'react'
import { fetchAPI, getStrapiURL } from '../../lib/api'
import Seo from '../../modules/seo/seo'
import { Articles } from '../../types/articles'
import Image from 'next/image'

type IIndex = {
  articles: Articles[]
  homepage: any
}

const Index = ({ articles, homepage }: IIndex) => {
  return (
    <div className={'container mx-auto px-10 '}>
      <Seo seo={homepage.attributes.seo} />
      <div className={'mt-4'}>
        <div className={'text-black font-[300] text-xs'}>
          Sie sind hier: Kellneroo {'>'}{' '}
          <span className={'text-black font-medium'}>Blog</span>
        </div>
        <div className={'text-[##423A3F] font-bold text-[54px] text-center'}>
          Our blog posts
        </div>
        <ul className={'grid grid-cols-3'}>
          {articles.map((article) => (
            <li key={article.id}>
              <Image
                className={'rounded-super'}
                src={getStrapiURL(
                  article.attributes.background.data.attributes.url
                )}
                alt={
                  article.attributes.background.data.attributes.alternativeText
                }
                width={325}
                height={190}
              />
              <h3 className={'font-semibold text-2xl text-[#070707]'}>
                {article.attributes.title}
              </h3>
              <p className={'font-normal text-base'}>
                {article.attributes.description}
              </p>
              <div>
                <p>{article.attributes.createdAt.toString()}</p>
                <p>{article.attributes.writer.data.attributes.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const [articlesRes, homepageRes] = await Promise.all([
    fetchAPI('/blogs', { populate: '*' }),
    fetchAPI('/homepage', {
      populate: {
        hero: '*',
        seo: { populate: '*' },
      },
    }),
  ])

  return {
    props: {
      articles: articlesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Index
