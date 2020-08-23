import {useRouter} from 'next/router'

import { MainLayouts } from '../../components/MainLayout';
import { StyledButton } from '../../components/styled/styled';

export default function Note(){
  const router = useRouter()
  return <MainLayouts>
  <h1>Note</h1>
  
  <StyledButton>Note edit {router.query.id}</StyledButton>
  </MainLayouts>
}
