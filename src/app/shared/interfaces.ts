export type TId = string | number;

export interface Link {
  title: string;
  routerLink: string | string[];
}

export interface FbCreateResponse {
  name: string;
}

export interface User {
  email: string;
  password: string;
}

export interface Post {
  id?: TId;
  title: string;
  content: string;
  author: string;
  date: Date;
}
