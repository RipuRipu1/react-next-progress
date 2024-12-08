import { useState } from 'react';
 
function Header({ title }) {
  return <h1>{title ? title : 'Learn React'}</h1>;
}
 
function HomePage() {
  const foods = ['Pizza', 'Orange', 'Salmon'];
 
  const [likes, setLikes] = useState(0);
 
  function handleClick() {
    setLikes(likes + 1);
  }
 
  return (
    <div>
      <Header title="Develop a simple web using React and Next JS" />
      <ul>
        {foods.map((food) => (
          <li key={food}>{food}</li>
        ))}
      </ul>
 
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}