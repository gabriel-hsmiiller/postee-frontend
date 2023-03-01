import Image from "next/image";
import { MdOutlineStickyNote2 } from "react-icons/md";
import logo from '../../../assets/img/Logo.svg';
import { StyledHeader } from "./style";
import { NotesService } from "../../services/notes-service";
import React from "react";
import { INote } from "../../models/Note";
import { NotesContext } from "../note/components/notes-provider";

export function Header() {
    const [noteContent, setNoteContent] = React.useState('');
    const [requesting, setRequesting] = React.useState(false);
    const [showToast, setShowToast] = React.useState(false);
    const [toastError, setToastError] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState('');
    const notesService: NotesService = new NotesService();
    const notesContext = React.useContext(NotesContext);

    const showToastFunction = (message: string) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setToastMessage('');
            setShowToast(false);
            setToastError(false);
        }, 3500);
    }

    const createNote = () => {
        setRequesting(true);

        const content = noteContent;
        let tags = noteContent.split(' ');
        tags = tags.filter((tag) => tag.indexOf('#') === 0);
        tags = tags.map((tag) => tag.slice(1));

        const note: INote = {
            content,
            tags
        }

        notesService.postNote(note)
            .then((response) => {
                if (response.status === 201) {
                    const newNotes = [...notesContext.notes, response.data]
                    notesContext.setNotes(newNotes);
                    setNoteContent('');
                    showToastFunction('Note posted!');
                } else {
                    setToastError(true);
                    showToastFunction('An error occured. Try again later.');
                }
            })
            .catch((e) => {
                console.error(e);
                setToastError(true);
                showToastFunction('An error occured. Try again later.');
            })
            .finally(() => setRequesting(false));
    }

    return (
        <StyledHeader>
            {
                showToast ? 
                <div className={['toast', (toastError ? 'toast-error' : 'toast-success')].join(' ')}>
                    {toastMessage}
                </div>
                : false
            }

            <Image src={logo} alt="" />
            <h1>Post whatever you want, anonymously and for free!</h1>
            <div className="input-container">
                <textarea
                    disabled={requesting ? true : null}
                    placeholder="Type anything..."
                    maxLength={360}
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}/>
                <button
                    disabled={requesting ? true : null}
                    onClick={() => createNote()}>
                    <MdOutlineStickyNote2 size={40} color="white" />
                </button>
            </div>
        </StyledHeader>
    );
}