export interface INote {
    _id?: string;
    content: string;
    upvotes?: Array<object>;
    tags: Array<string>;
    createdAt?: number;
}