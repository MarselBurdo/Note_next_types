import { StyledButton, Card, Sector } from "../components/styled/styled";
import { MainLayouts } from "../components/MainLayout";

import { showNotes } from "../components/store/actions/fetchAction";
import Link from "next/link";
import { MyNote } from "../interfaces/post";

interface NotesPageProps {
  notes: MyNote[]
}

export default function Notes({ notes }: NotesPageProps) {
  return (
    <MainLayouts title="Notes">
      <h1>Notes</h1>
      <StyledButton primary>Create Note</StyledButton>
      <Sector>
        {notes &&
          notes.map((elem) => (
            <>
              <Card key={elem.id}>
                <Link href={`note/[id]`} as={`note/${elem.id}`}>
                  <a>{elem.title}</a>
                </Link>
              </Card>
            </>
          ))}
      </Sector>
    </MainLayouts>
  );
}

Notes.getInitialProps = async () => {
  const resp = await fetch(`${process.env.API_URL}/notes`);
  const notes: MyNote[] = await resp.json();

  return {
    notes,
  };
};
