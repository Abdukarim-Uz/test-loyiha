    export interface hero_film {
        value: {
            id: number,
            title: string,
            subtitle: string,
            desc: string,
            image: string
        }[]
    }

    export interface recent_moviesProps {
        value: { id: number, title: string, category: string, status: string, date: string }[],
    }

    export interface movierProps {
        value: { id: number, title: string, image: string, rating: string, year: string }[] | string | null,
    }

