export interface Post {
    title: string;
    briefText: string;
    text: string;
    coverImageUrl: string;
    related?: Post[];
}

export interface APIResponse {
    data: {
        post: Post | null;
    };
}
export interface CreatePostPayload {
    title: string;
    briefText: string;
    text: string;
    slug: string;
    readingTime: number;
    category: string;
    coverImage: File | null;
}

export interface CategoryOption {
    _id: string;
    title: string;
}

export interface PostEdit {
    _id?: string;
    title?: string;
    briefText?: string;
    text?: string;
    slug?: string;
    readingTime?: number;
    category?: { _id: string; title: string };
    coverImage?: File | null;
    coverImageUrl?: string | null;
}

export interface FormValues {
    title: string;
    briefText: string;
    text: string;
    slug: string;
    readingTime: number;
    category: string;
    coverImage: File | string | null;
}
