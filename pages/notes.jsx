import {useState, useEffect} from 'react'

import { StyledButton } from "../components/styled/styled";
import { MainLayouts } from "../components/MainLayout";

export default function Notes() {
  const [notes, setNotes] = useState([])
  const dispatch =

  return (
    <MainLayouts title='Notes'>
      <h1>Notes</h1>
      <StyledButton primary>Create Note</StyledButton>
    </MainLayouts>
  );
}
