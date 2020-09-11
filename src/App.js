import React, { useState } from 'react';

import { Container, Form, FormGroup, Button, ResultContainer } from './styles';
import GlobalStyle from './assets/styles/global';

import logo from './assets/img/Logo.png';

function App() {
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const { gender, age, weight, height, activity_level } = event.target.elements;

    const genderOption = gender.options[gender.selectedIndex].value;
    const activityOption = activity_level.options[activity_level.selectedIndex].value;
    const ageValue = Number(age.value);
    const weightValue = Number(weight.value);
    const heightValue = Number(height.value);

    const tmb = Math.round(
      genderOption === 'female'
      ? (655 + (9.6 * weightValue) + (1.8 * heightValue) - (4.7 * ageValue))
      : (66 + (13.7 * weightValue) + (5 * heightValue) - (6.8 * ageValue))
    );

    const maintenance = Math.round(tmb * Number(activityOption));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;

    setResult(
      <ResultContainer>
          <ul>
            <li>
              Seu metabolismo basal é de <strong>{tmb} calorias</strong>.
            </li>
            <li>
              Para manter o seu peso você precisa consumir em média <strong>{maintenance} calorias</strong>.
            </li>
            <li>
              Para perder peso você precisa consumir em média <strong>{loseWeight} calorias</strong>.
            </li>
            <li>
              Para ganhar peso você precisa consumir em média <strong>{gainWeight} calorias</strong>.
            </li>
          </ul>
        </ResultContainer>
    );
  }



  return (
    <>
      <Container>
        <img src={logo} />
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="gender">sexo:</label>
            <select id="gender" >
              <option value="male">masculino</option>
              <option value="female">feminino</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label htmlFor="age">idade:</label>
            <input
              id="age"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="weight">peso:</label>
            <input
              id="weight"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="height">altura:</label>
            <input
              id="height"
              type="number"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="activity_level">nível de atividade física:</label>
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
        {result}
        <GlobalStyle />
      </Container>
    </>
  );
}

export default App;
