export interface Notification{
    title: string,
    subtitle?: string,
    date?: Date
}

export const defaultNotif: Notification = {title:'Estas nuevas películas pueden interesarte', subtitle: 'Haz click aqui para ver las peliculas que pensamos que te gustarán'};