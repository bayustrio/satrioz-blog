export interface IStory {
  content: string;
  image: File | undefined;
}

export interface ICreateStory {
  story: IStory;
}

export interface IDataStory {
  commentCount: number;
  comments: string | null;
  content: string;
  createdAt: string;
  image: string;
  likeCount: number;
  likes: string | null;
  readtime: number;
  slug: string;
  title: string;
  updatedAt: string;
  __v: 0;
  _id: string;
  author: IDataAuthor;
}

export interface IDataAuthor {
  createdAt: string;
  email: string;
  photo: string;
  readList: string | null;
  readListLength: number;
  role: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
}

export interface IFullDataStory {
  data: IDataStory[];
  page: number;
  pages: number;
  success: boolean;
}
