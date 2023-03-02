import { StyledNote } from "./style";
import { HiDownload } from 'react-icons/hi';
import { BiUpvote } from 'react-icons/bi';
import { INote } from "../../models/Note";
import { convertTags } from "../../utils/note-text.util";
import { NotesService } from "../../services/notes-service";

interface NoteProps {
    item: INote;
}

export default function Note(props: NoteProps) {
    const {item} = props;

    const notesService = new NotesService();

    const saveNote = async () => {
        const element = document.getElementById(`note_${item._id}_download`);
        const elementCopy = element.cloneNode(true);
        document.body.appendChild(elementCopy);
        (elementCopy as HTMLElement).id = `note_${item._id}_download_copy`;
        (elementCopy as HTMLElement).style.display = 'block';

        await notesService.saveNote((elementCopy as HTMLElement));

        document.body.removeChild(elementCopy);
    }

    return (
        <StyledNote>
            <div className="content">
                <p className="body" dangerouslySetInnerHTML={{ __html: convertTags(item.content) }} />
            </div>
            <div className="button-group">
                <button>
                    <BiUpvote size={40} />
                    <span>Upvote</span>
                </button>
                <button onClick={() => saveNote()}>
                    <HiDownload size={40} />
                    <span>Save</span>
                </button>
            </div>
            <div className="downloadable-content" id={`note_${item._id}_download`}>
                <p className="body" dangerouslySetInnerHTML={{ __html: convertTags(item.content) }} />
                <p className="footer">Posted in <span className="link">postee.com</span></p>
            </div>
        </StyledNote>
    );
}