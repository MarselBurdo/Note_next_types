import Link from "next/link";

export default function Error() {
  return (
    <>
      <h1>New 404 error</h1>
      <p>
        You cool man, go to{" "}
        <Link href="/">
          <a>main </a>
        </Link>
        page
      </p>
    </>
  );
}
