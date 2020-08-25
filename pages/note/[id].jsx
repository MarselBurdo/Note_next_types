import { MainLayouts } from "../../components/MainLayout";
import { StyledButton } from "../../components/styled/styled";
import Link from "next/link";

export default function Note({ note: serverNote }) {
  return (
    <>
      <MainLayouts>
        <h1 style={{ textAlign: "center" }}>Note {note.title}</h1>
        <br />
        <br />
        <br />
        <hr />
        <p>{note.text}</p>
        <StyledButton primary>
          <Link href={"/notes"}>
            <a style={{ textDecoration: "none" }}>Back to notes page</a>
          </Link>
        </StyledButton>
      </MainLayouts>
    </>
  );
}

Note.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return {
      note: null,
    };
  }
  const resp = await fetch(`http://localhost:4444/notes/${query.id}`);
  const note = await resp.json();
  return {
    note,
  };
};
