import { Helmet } from "react-helmet";
import Root from ".";
import { CSSReset } from "../src/components/css-reset";
import NotesProvider from "../src/components/note/components/notes-provider";

export default function _App({props}) {
    return (
        <NotesProvider initNotes={[]}>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Inter&family=Dosis&display=swap" rel="stylesheet" />
            </Helmet>
            <CSSReset />
            <Root {...props} />
        </NotesProvider>
    );
}