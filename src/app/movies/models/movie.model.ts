import { Theater } from './../../shared/theaters/models/theater.model';
import { Genre } from "../../shared/genres/models/genre.model";


export interface Movie {
    id: number,
    title: string,
    imageUrl: string,
    genres: Genre[],
}

export interface MovieDetail extends Movie {
    releaseDate: Date | string,
    genres: Genre[],
    description: string,
    duration: number,
    showtimes: Showtime[]
}

export interface Showtime{
    theater: Theater,
    dates: {
        date: Date | string,
        times: string[]
    }[]
}

export interface ShowtimeByDate{
    theater: Theater,
    times: string[]
}
 export interface Filter extends Movie{
    theater: Theater
} 
