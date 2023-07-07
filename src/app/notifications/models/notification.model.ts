export interface Notification{
    id: string | number;
    readed: boolean,
    title: string,
    subtitle?: string,
    date?: Date
}

export const defaultNotif: Notification = {id: 'default', readed: false, title:'Estas nuevas películas pueden interesarte', subtitle: 'Haz click aqui para ver las peliculas que pensamos que te gustarán'};