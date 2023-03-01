import React from "react";
import { INote } from "../../../models/Note";

export type NotesContextType = {notes: Array<INote>, setNotes: Function};

export const NotesContext = React.createContext<NotesContextType>({
    notes: [],
    setNotes: () => console.error("Configure setNotes")
});

export default function NotesProvider({ children, initNotes }) {
    const [notes, setNotes] = React.useState<Array<INote>>(initNotes);

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            {children}
        </NotesContext.Provider>
    );
};