export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}

export interface Small {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}

export interface Medium {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}

export interface Large {
  name: string
  hash: string
  ext: string
  mime: string
  path?: any
  width: number
  height: number
  size: number
  url: string
}

export interface Formats {
  thumbnail: Thumbnail
  small: Small
  medium: Medium
  large: Large
}

export interface Attributes2 {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: any
  provider: string
  provider_metadata?: any
  createdAt: Date
  updatedAt: Date
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Background {
  data: Data2
}

export interface Attributes3 {
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface Data3 {
  id: number
  attributes: Attributes3
}

export interface Writer {
  data: Data3
}

export interface Attributes4 {
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
}

export interface Data4 {
  id: number
  attributes: Attributes4
}

export interface Category {
  data: Data4
}

export interface Attributes5 {
  title: string
  description: string
  content: string
  createdAt: Date
  updatedAt: Date
  publishedAt?: any
}

export interface Datum {
  id: number
  attributes: Attributes5
}

export interface Articles {
  data: Datum[]
}

export interface BooksAttributes {
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  title: string
  description: string
  facebook: string
  twitter: string
  instagram: string
  youtube: string
  slug: string
  background: Background
  writer: Writer
  category: Category
  articles: Articles
}

export interface Data {
  id: number
  attributes: Attributes2
}

export interface Meta {
  nothing: any
}

export interface Blogs {
  data: Data
  meta: Meta
}
