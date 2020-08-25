import { MainLayouts } from "../../components/MainLayout";
import { StyledButton } from "../../components/styled/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startShow } from "../../components/store/actions/fetchAction";

export default function Note({ note: serverNote }) {
  console.log(serverNote);
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
      {!note ? (
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
