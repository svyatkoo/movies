export interface IMovieImages {
    backdrops: IImageItem[],
    id: number,
    logos: IImageItem[],
    posters: IImageItem[]
}

interface IImageItem {
    aspect_ratio: number,
    height: number,
    iso_639_1: null | string,
    file_path: string,
    vote_average: number,
    vote_count: number,
    width: number
}