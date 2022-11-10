import { Articles } from './articles'

export type AllBlogsTypes = {
  blogs: {
    data: Articles[]
    meta: {
      pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
      }
    }
  }
  homepage: any
  page: string
}
