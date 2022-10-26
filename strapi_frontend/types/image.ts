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

export interface Attributes {
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

export interface Data {
  id: number
  attributes: Attributes
}

export interface Background {
  data: Data
}

export interface Attributes2 {
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface Data2 {
  id: number
  attributes: Attributes2
}

export interface Writer {
  data: Data2
}

export interface Attributes3 {
  name: string
  slug: string
  createdAt: Date
  updatedAt: Date
}

export interface Data3 {
  id: number
  attributes: Attributes3
}

export interface Category {
  data: Data3
}

export interface Relationships {
  background: Background
  writer: Writer
  category: Category
}
