import LikeButton from './like-button';
 
function Header({ title }) {
  return <h1>{title ? title : 'Learn React'}</h1>;
}
 
export default function HomePage() {
  const foods = ['Pizza', 'Orange', 'Salmon'];

 
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
 
      <LikeButton />
    </div>
  );
}