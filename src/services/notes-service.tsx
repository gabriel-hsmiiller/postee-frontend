import axios from "axios";
import {INote} from "../models/Note";

export class NotesService {
    constructor() { }

    async getNotes() {
        return axios.get('http://localhost:3000/notes');
    }

    async postNote(note: INote) {
        return axios.post('http://localhost:3000/notes', note);
    }

    async shareNote() {
        // TODO: implement method
    }

    async upvote() {
        // TODO: implement method
    }
}