import { EnumBookStatus } from "./book-status.enum";

export interface BookItemModel {
    id: number;
    title: string;
    content: string;
    img: string;
    status: EnumBookStatus;
    explanation: string;
    user: string;
    readPage: number;
    progress?: string;
    isFavorite: boolean;

}