import { Movie } from "../movies/models/movie.model";
import { GENRES } from "./getGenres";
import { THEATERS } from "./getTheaters";

export const MOVIES: Movie[] = [
    {
        id: 1,
        title: "Mario Bros",
        releaseDate: new Date(),
        genres: GENRES.slice(1,3),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/b2a79734566eba8b95cc277641a1f676.jpg?v=00002111",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Flash",
        releaseDate: new Date(),
        genres: GENRES.slice(2,4),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/227b519e83a8b99329302ad2d37d0bbb.jpg?v=00002131",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Elementos",
        releaseDate: new Date(),
        genres: GENRES.slice(1,4),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/6aa4601e49a56d928205c271b55fd463.jpg?v=00002131",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "La Sirenita",
        releaseDate: new Date(),
        genres: GENRES.slice(2,5),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/fcb985a11f362bc8c05a89788fb5ac5c.jpg?v=00002131",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Flash",
        releaseDate: new Date(),
        genres: GENRES.slice(4,5),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/227b519e83a8b99329302ad2d37d0bbb.jpg?v=00002131",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Maremoto",
        releaseDate: new Date(),
        genres: GENRES.slice(2),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/807a10e7d83eea38f7264c7f10e22c96.jpg?v=00002131",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Mario Bros",
        releaseDate: new Date(),
        genres: GENRES.slice(1,3),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/b2a79734566eba8b95cc277641a1f676.jpg?v=00002111",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "Flash",
        releaseDate: new Date(),
        genres: GENRES.slice(2,4),
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum ipsa quas repellat expedita facilis doloremque natus nesciunt minus quis aliquam! Libero cupiditate reprehenderit asperiores perferendis accusantium atque commodi totam do",
        duration: 163,
        imageUrl:"https://static.cinemarkhoyts.com.ar/Images/Posters/227b519e83a8b99329302ad2d37d0bbb.jpg?v=00002131",
        showtimes:[
            {
                theater: THEATERS[0],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[1],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            },
            {
                theater: THEATERS[2],
                dates:[
                    {
                        date: new Date(2023,6,20),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,21),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,22),
                        times: ["12:00", "15:30", "20:30"]
                    },
                    {
                        date: new Date(2023,6,23),
                        times: ["12:00", "15:30", "20:30"]
                    }
                ]
            }
        ]
    }
];