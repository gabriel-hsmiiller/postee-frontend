import { IClientUpvote } from "./ClientUpvote";

export interface INote {
    _id?: string;
    content: string;
    upvotes?: Array<IClientUpvote>;
    tags: Array<string>;
    createdAt?: number;
}