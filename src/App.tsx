import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2="string"> Olá Mundo! </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quos dignissimos minus eligendi rerum,
        molestias similique cumque tempore, eos laboriosam sunt tempora animi saepe possimus quod earum voluptatum ipsum
        dicta.
      </p>
    </>
  );
}
