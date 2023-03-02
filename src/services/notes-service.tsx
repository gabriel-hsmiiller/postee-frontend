import axios from "axios";
import {INote} from "../models/Note";
import html2canvas from "html2canvas";
import download from "downloadjs";

const API_URL = process.env.API_URL;

export class NotesService {
    constructor() { }

    async getNotes() {
        return axios.get(`${API_URL}/notes`);
    }

    async postNote(note: INote) {
        return axios.post(`${API_URL}/notes`, note);
    }

    async saveNote(element: HTMLElement) {
        const canvas = await html2canvas(element);
        const dataURL = canvas.toDataURL('image/png');
        download(dataURL, 'download.png', 'image/png');
    }

    async upvote() {
        // TODO: implement method
    }
}