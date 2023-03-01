import { StyledNote } from "./style";
import { RiShareForwardLine } from 'react-icons/ri';
import { BiUpvote } from 'react-icons/bi';
import { INote } from "../../models/Note";
import { convertTags } from "../../utils/note-text.util";

interface NoteProps {
    item: INote;
}

export default function Note(props: NoteProps) {
    const {item} = props;

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
                <button>
                    <RiShareForwardLine size={40} />
                    <span>Share</span>
                </button>
            </div>
        </StyledNote>
    );
}