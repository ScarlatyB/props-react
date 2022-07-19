import * as React from 'react';
import Main from './src/components/Main';
import './style.css';

const BemVindo = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} idade={props.idade} />
      <Social fb={props.facebook} />
    </div>
  );
};

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá, me chamo {props.nome}</h2>
      <h3>tenho {props.idade}anos </h3>
    </div>
  );
};

const Social = (props) => {
  return (
    <div>
      <a href={props.fb}>Facebook</a>
      <p>Twitter</p>
      <p>WhatsApp</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <BemVindo
        nome="Scarlaty"
        idade="26"
        facebook="google.com"
      />
      <BemVindo nome="Ana" idade="15" />
    </div>
  );
}
