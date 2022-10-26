export interface Thumbnail {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Medium {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path?: any;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Formats {
  thumbnail: Thumbnail;
  small: Small;
  medium: Medium;
  large: Large;
}

export interface Attributes {
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: Formats;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  previewUrl?: any;
  provider?: string;
  provider_metadata?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface ShareImage {
  data: Data;
}

export interface DefaultSeo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  shareImage: ShareImage;
}

export interface RootObject {
  defaultSeo: DefaultSeo;
}
