import { StyledButton } from "../../components/styled/styled";
import Router from 'next/router'
import { MainLayouts } from "../../components/MainLayout";

export default function Company() {
  return (
    <MainLayouts>
      {" "}
      <h1>Company Name</h1>
      <StyledButton onClick={() => alert("Donate")}>Donate</StyledButton>
      <StyledButton primary onClick={()=> Router.push('/notes')}>Go Notes</StyledButton>
    </MainLayouts>
  );
}
