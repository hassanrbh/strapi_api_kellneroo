import { Background, Category, Writer } from './image'

export interface Attributes {
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  title: string
  description: string
  facebook?: any
  twitter?: any
  instagram?: any
  youtube?: any
  slug: string
  background: Background
  writer: Writer
  category: Category
}

export interface Articles {
  id: number
  attributes: Attributes
}
