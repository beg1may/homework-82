export interface IArtists {
    id: string;
    name: string;
    image: string | null;
    information: string;
}

export type IArtistWithoutId = Omit<IArtists, "id">;
