export interface Comment {
    id: string;
    avatar: string;
    name: string;
    handle: string;
    time: string;
    text: string;
    likes: number;
    replies: number;
}

export interface Post {
    id: string;
    likes: number;
    commentCount: number;
    reposts: number;
    comments: Comment[];
}

export interface Service {
    id: number;
    label: string;
    title: string;
    description: string;
    image: string;
}

export interface ThreadReplyType {
    id: string;
    avatar: string;
    name: string;
    handle: string;
    time: string;
    text: string;
    replies: number;
    reposts: number;
    likes: number;
    views: string;
    verified?: boolean;
}
