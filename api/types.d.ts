export interface IArtists {
    id: string;
    name: string;
    image: string | null;
    information: string;
}

export type IArtistWithoutId = Omit<IArtists, "id">;

export interface IAlbums {
    id: string;
    name: string;
    artist: string;
    yearOfManufacture: number;
    image: string | null;
}

export type IAlbumWithoutId = Omit<IAlbums, "id">;
