import { useState, useEffect } from "react";

import { StyledButton, Card, Sector } from "../components/styled/styled";
import { MainLayouts } from "../components/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { showNotes } from "../components/store/actions/fetchAction";

export default function Notes() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.fetch);

  useEffect(() => dispatch(showNotes()), [dispatch]);

  return (
    <MainLayouts title="Notes">
      <h1>Notes</h1>
      <StyledButton primary>Create Note</StyledButton>
      <Sector>
        {notes &&
          notes.map((elem, i) => (
            <>
              <Card key={i}>
                <a>{elem.title}</a>
              </Card>
            </>
          ))}
      </Sector>
    </MainLayouts>
  );
}
