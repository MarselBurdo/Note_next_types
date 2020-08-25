import { MainLayouts } from "../../components/MainLayout";
import { StyledButton } from "../../components/styled/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startShow } from "../../components/store/actions/fetchAction";
import { NextPageContext } from "next";
import { MyNote } from "../../interfaces/post";

interface NotePageProps {
  notes: MyNote;
}

export default function Note({ note: serverNote }: NotePageProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const note = useSelector((state) => state.fetch.note);

  useEffect(() => {
    if (!serverNote) {
      dispatch(startShow(router.query.id));
    }
  }, [dispatch]);

  return (
    <>
      {" "}
      {note ? (
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
      ) : (
        <>
          <MainLayouts>
            <h1>Loading...</h1>
          </MainLayouts>
        </>
      )}
    </>
  );
}

interface NoteNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Note.getInitialProps = async ({ query, req }: NoteNextPageContext) => {
  if (!req) {
    return {
      note: null,
    };
  }

  const resp = await fetch(`${process.env.API_URL}/notes/${query.id}`);
  const note: MyNote = await resp.json();
  return {
    note,
  };
};

// export async function getServerSideProps({ query, req }) {
//   // if (!req) {
//   //   return {
//   //     note: null,
//   //   };
//   // }
//   const resp = await fetch(`http://localhost:4444/notes/${query.id}`);
//   const note = await resp.json();
//   return {
//     props: { note },
//   };
// }
