
export interface Author {
  name: string;
  avatarUrl?: string;
}


export interface PostListType {
  _id: string;
  title: string;
  coverImage: string;

  slug?: string;
  author: Author;
  readingTime?: number;

  commentsCount: number;
  isLiked: boolean;
  isBookmarked: boolean;

  category?: { title: string };
  type?: "free" | "premium";
  createdAt?: string;
}

export interface PostListProps {
  posts: PostListType[];
  totalPages?: number;
  showPagination?: boolean;
}


export interface PostListResponse {
  posts: PostListType[];
  totalPages: number;
}

export interface ActionResponse {
  message: string;
}

// export interface GetPostSlugResponse {
//   post: Post ;
// }


// export interface Category {
//   title: string;
// }

export interface Post {
  _id: string;
  title: string;
  briefText: string;
  text: string;
  coverImage: string;
  coverImageUrl?: string | null;
  slug?: string;
  author?: Author;
  readingTime?: number;
  commentsCount: number;
  isLiked: boolean;
  isBookmarked: boolean;
  category?: Category;
  type?: "free" | "premium";
  createdAt?: string;
  related?: Post[];
  comments: CommentType[];
}

export interface APIResponse<T> {
  data: T;
}

export interface DisplayPost {
  _id: string;
  title: string;
  category: {
    title: string;
  };
  author: {
    name: string;
  };
  createdAt: string;
  type: "free" | "premium";
}


export interface CommentType {
  _id: string
  user: {
    name: string
    avatarUrl: string
  }
  content: {
    text: string
  }
  createdAt: string
  openToComment: boolean
  answers: CommentType[];
}

export interface CommentPayload {
  postId: string;
  parentId?: string | null;
  text: string;
}

export interface CommentUpdatePayload {
  id: string;
  data: {
    text?: string;
    status?: string;
  };
}

export interface CommentRowData {
  index: number;
  comment: {
    _id: string;
    content: {
      text: string;
    };
    user: {
      name: string;
    };
    status: string;
    createdAt: string;
    answers?: CommentRowData[];
  };
}
export type RawComment = {
  _id: string;
  content?: { text: string };
  text?: string;
  user?: { name: string };
  userName?: string;
  status?: string;
  createdAt: string;
  answers?: RawComment[];
};

export interface CommentsTableData {
  comments: CommentRowData[];
}

export interface Comment {
  _id: string;
  title?: string;
  text?: string;
  status?: string;
  createdAt: string;
  updatedAt?: string;
  post?: string;
  author?: {
    _id: string;
    name: string;
    avatar?: string;
  };
}

export interface DisplayComment {
  _id: string;
  content: {
    text: string;
  };
  user: {
    name: string;
  };
  status?: string;
  createdAt: string;
  answers?: DisplayComment[];
}


export type CommentFormState = {
  error?: string;
  message?: string;
};

export type CommentFormProps = {
  postId: string;
  parentId?: string | null;
  onClose: () => void;
};

export type CommentTypeService = {
  comments: Comment[];
  count: number;
  commentsCount: number;
};

export interface SinglePostType {
  _id: string;
  title: string;
  text: string;
  briefText: string;
  coverImageUrl: string;
  related: PostListType[];
  comments: CommentType[];
}

export interface Category {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt?: string;
}


export interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
}  