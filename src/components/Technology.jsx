import Counter from "./Counter";
function Technology({name, category, hours, image}) {
  
  const getImageUrl = (fileName) => {
    return new URL(`../assets/${fileName}`, import.meta.url).href;
  };
  
  return (
    <section className="technology">
      <h3>{name}</h3>
      <img src={getImageUrl(image)} alt=""/>
      <p>Kategoria: <span className="categoryLabel">{category}</span></p>
      <p>Liczba godzin: {hours}</p>

      <button onClick={() => {
        console.log(`Technologia: ${name}\nKategoria: ${category}\nLiczba godzin: ${hours}`);
      }}>
        Pokaż informacje
      </button>
      <Counter />
    </section>
  );
}

export default Technology;