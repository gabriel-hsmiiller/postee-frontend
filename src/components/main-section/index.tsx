import React from "react";
import Note from "../note";
import { StyledMainSection } from "./style";
import { INote } from "../../models/Note";
import { NotesService } from "../../services/notes-service";
import { NotesContext } from "../note/components/notes-provider";

export default function MainSection() {
    const notesService: NotesService = new NotesService();
    const notesContext = React.useContext(NotesContext);

    React.useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        notesService.getNotes().then((response) => {
            const {data} = response;
            notesContext.setNotes(data);
        });
    }

    return (
        <StyledMainSection>
            {
                notesContext.notes.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).map((item, i) => <Note key={i} item={item} />)
            }
        </StyledMainSection>
    );
}