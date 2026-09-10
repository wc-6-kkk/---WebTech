import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const app = {
    name: "WebTech",
    version: "1.0",
    author: "Weronika Czupryna",
    technologiesCount: 3
  };

  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};

const student = {
  name: "...",
  surname: "...",
  className: "4P",
  specialization: "technik programista"
};

const course = {
  name: "...",
  teacher: "...",
  hours: 6,
  completed: 1
};

  return (
    <div>

      <p>zadanie 16</p>

      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p><br></br>

      <p>zadanie 17</p>

      <p>{technology.name}</p>

      <p>Kategoria: {technology.category}</p>

      <p>Liczba godzin: {technology.hours}</p>

    </div>
  );
}

export default App;
