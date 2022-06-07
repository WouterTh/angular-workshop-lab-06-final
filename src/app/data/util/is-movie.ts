import { Movie, ProductTypes } from '../types';

export function isMovie(product: ProductTypes): product is Movie {
    return product.type === 'movie';
}