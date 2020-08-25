import { useState, useEffect } from "react";

import { StyledButton, Card, Sector } from "../components/styled/styled";
import { MainLayouts } from "../components/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { showNotes } from "../components/store/actions/fetchAction";
import Link from "next/link";

export default function Notes({ notes }) {
  const dispatch = useDispatch();
  // const notes =[]
  // const { notes } = useSelector((state) => state.fetch);

  // useEffect(() => dispatch(showNotes()), [dispatch]);

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
  const resp = await fetch("http://localhost:4444/notes");
  const notes = await resp.json();

  return {
    notes,
  };
};
