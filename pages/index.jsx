import Link from "next/link";
import Head from "next/head";

import { Navbar } from "../components/styled/styled";
import GlobalStyle from "../components/styled/theme";
import { MainLayouts } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayouts>
      <h1>Hello NextJS</h1>
    </MainLayouts>
  );
}
