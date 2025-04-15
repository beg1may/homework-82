import mongoose, {Types} from "mongoose";
import Album from "./Album";

const Schema = mongoose.Schema;

const TrackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Название обьязательное поле'],
    },
    album: {
        type: [Schema.Types.ObjectId, 'Album not found'],
        ref: "Album",
        required: true,
        validate: {
            validator: async (value: Types.ObjectId) => {
                const album = await Album.findById(value);
                return !!album;
            },
            message: "Album not found",
        }
    },
    duration: {
        type: String,
        required: [true, 'Продолжительность обьязательное поле'],
    },
});

const Track = mongoose.model('Track', TrackSchema);
export default Track;