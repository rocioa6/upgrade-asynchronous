/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

fetch("https://api.agify.io?name=michael")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

/*   2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.*/

const baseUrl = "https://api.nationalize.io";
const printName = (object) => {
  let newElement$$ = document.createElement("p");
  newElement$$.className = object.name;

  let elementText = `
    El nombre ${object.name} tiene una probabilidad de ${object.country[0].probability} de ser de ${object.country[0].country_id}
    `;
  for (let i = 0; i < object.country.length; i++) {
    if (i === object.country.length - 1) {
      elementText += `
        y una probabilidad de ${Math.round(
          object.country[i].probability * 100
        )}% de ser de ${object.country[i].country_id}
        `;
    } else {
      elementText += `
    , una probabilidad de ${Math.round(
      object.country[i].probability * 100
    )}% de ser de ${object.country[i].country_id}
    `;
    }
  }
  newElement$$.innerHTML = elementText;
  document.body.appendChild(newElement$$);
  let eraseButton$$ = document.createElement("button");
  eraseButton$$.innerText = "X";
  eraseButton$$.addEventListener("click", (event) => {
    let deleteElement = newElement$$.parentNode;
    deleteElement.removeChild(newElement$$);
  });
  newElement$$.appendChild(eraseButton$$);
};

const fetchFromApi = async () => {
  const res = await fetch(baseUrl + `/?name=${input.value}`);
  const getName = await res.json();
  printName(getName);
};

let input = document.querySelector("input");
document.querySelector("button").addEventListener("click", fetchFromApi);

/* 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */
