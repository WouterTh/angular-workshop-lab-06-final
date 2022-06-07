export interface Book {
    type: 'book',
    title: string,
    isbn: string,
    pageCount: number,
    published: string,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    authors: string[],
    categories: string[]
}
