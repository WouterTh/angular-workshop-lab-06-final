import { Book, ProductTypes } from '../types';

export function isBook(product: ProductTypes): product is Book {
    return product.type === 'book';
}
