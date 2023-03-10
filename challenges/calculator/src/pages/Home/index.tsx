import Display from '../../components/Display';
import { FormButtons } from '../../components/FormButtons';
import { Container, ContainerContent } from './styles';

export function Home() {
  return (
    <Container>
      <ContainerContent>
        <Display />
        <FormButtons />
      </ContainerContent>
    </Container>
  );
}
