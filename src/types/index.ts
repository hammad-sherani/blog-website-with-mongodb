export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
  createdAt: Date;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  author: User;
  categories: string[];
  tags: string[];
  status: 'draft' | 'published';
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  _id: string;
  content: string;
  author: {
    name: string;
    email: string;
  };
  post: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

export interface Newsletter {
  _id: string;
  email: string;
  isActive: boolean;
  subscribedAt: Date;
}