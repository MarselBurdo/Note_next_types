import Link from "next/link";
import Head from "next/head";

import { Navbar } from "./styled/styled";
import GlobalStyle from "./styled/theme";

export function MainLayouts({ children, title = "Next styled App" }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="nextJS, next, styled-components" />
        <meta name="description" content="nextJS application" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <Navbar>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/notes">
              <a>Notes</a>
            </Link>
          </li>
        </ul>
      </Navbar>
      <main>{children}</main>
    </>
  );
}
