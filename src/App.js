// ? deafult exportun importu, istediğimiz isimle import edebiliriz
// import MyCat from "./components/Cat";
import Cat from "./components/Cat";

function App() {
  return (
    //! JSX (HTML- JS'nin birleşmiş hali)
    <div className="App">
      <Cat
        name="Cenitin"
        img="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
        color="grey"
        isBlueEyed
      />
      <Cat
        name="Garfield"
        img="https://media.istockphoto.com/id/1419259075/tr/foto%C4%9Fraf/ginger-cat-lies.jpg?s=612x612&w=is&k=20&c=PWLtFNvmH46d4NFIjGjy43_uqqpknOyTmlrO78N5wOo="
        color="orange"
        isBlueEyed={false}
      />
      <Cat
        name="Şerafettin"
        img="https://cdn.pixabay.com/photo/2023/11/02/16/49/cat-8361048_1280.jpg"
        isBlueEyed={true}
      />
      {/* <MyCat /> */}
    </div>
  );
}

export default App;
