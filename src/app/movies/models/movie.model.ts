import { Genre } from "../../shared/genres/models/genre.model";
import { Theater } from "../../shared/theaters/models/theater.model";

export interface Movie {
    id: number,
    title: string,
    releaseDate: Date | string,
    genres: Genre[],
    description: string,
    duration: number,
    imageUrl: string,
    showtimes: {
        theater: Theater,
        dates: {
            date: Date | string,
            times: string[]
        }[]
    }[]
}