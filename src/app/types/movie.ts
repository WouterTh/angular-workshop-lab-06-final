export interface Movie {
    type: 'movie',
    id: number,
    title: string,
    year: number,
    runtime: number,
    genres: string[],
    director: string,
    actors: string,
    plot: string,
    posterUrl: string
}