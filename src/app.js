import React from 'react';
import jumboDate from '../src/fixtures/jumbo.json';
import Jumbotron from './components/jumbotron';
export default function App() {
  return (
    <Jumbotron.Container>
      {jumboDate.map((item) => (
        <Jumbotron key={item.id} direction={item.direction} >
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.image} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
