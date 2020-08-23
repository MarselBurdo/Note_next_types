import { StyledButton } from "../components/styled/styled";
import { MainLayouts } from "../components/MainLayout";

export default function Notes() {
  return (
    <MainLayouts title='Notes'>
      <h1>Notes</h1>
      <StyledButton primary>Create Note</StyledButton>
    </MainLayouts>
  );
}
