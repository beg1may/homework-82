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

export interface ITracks {
    id: string;
    name: string;
    album: string;
    duration: string;
}

export type ITrackWithoutId = Omit<ITracks, "id">;

export interface IUser {
    username: string;
    password: string;
    token: string;
}