import { PostType } from "./post-type.enum";
import { User } from "./user.model";

export interface Post {
    id: number;
    body?: string;
    image?: string;
    video?: string;
    type: PostType;
    user: User;
    likes?: number;
    comments?: number;
    date?: string;
}

export const defaultPost: Post = {
    id: 0,
    user: {id: 0, name: ''},
    type: 100
}