import React from 'react';

import { Container, Form, FormGroup, Button, ResultContainer } from './styles';
import GlobalStyle from './assets/styles/global';

function App() {
  return (
    <>
      <Container>
        <h1>getkcal</h1>
        <Form>
          <FormGroup>
            <label for="gender">sexo:</label>
            <select id="gender" >
              <option value="male">masculino</option>
              <option value="female">feminino</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label for="age">idade:</label>
            <input
              id="age"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <label for="weight">peso:</label>
            <input
              id="weight"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <label for="height">altura:</label>
            <input
              id="height"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <label for="activity_level">nível de atividade física:</label>
            <select id="activity_level">
              <option value="1.2">Sedentário</option>
              <option value="1.375">Pouca atividade</option>
              <option value="1.55">Atividade moderada</option>
              <option value="1.725">Atividade intensa</option>
              <option value="1.9">Atividade muito intensa</option>
            </select>
          </FormGroup>
          <Button>calcular</Button>
        </Form>
        <ResultContainer>
          <ul>
            <li>
              Seu metabolismo basal é de <strong>1606 calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>1928 calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>1638 calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>2217 calorias</strong>.
            </li>
          </ul>
        </ResultContainer>
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
