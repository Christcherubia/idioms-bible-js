// Vous commencez par déclarer un tableau idioms1 qui contient des objets représentant différentes entrées d'idiomes. 
// Chaque objet a des propriétés telles que idiom, name, age, et langage.
// Mes Tableaux
let idioms1 = [
  {
    idiom: "Prier en mon nom",
    name: "Jésus",
    age: 32,
    langage: "Araméen",
  },
  {
    idiom: "1000",
    name: "Jean",
    age: 85,
    langage: "Grec Koinè",
},
];

// Ensuite, vous ciblez un élément HTML avec l'ID "target" à l'aide de document.getElementById("target") et le stockez dans la constante containerContents. 
// Cet élément sera utilisé pour afficher le contenu.
const containerContents = document.getElementById("target");
// Vous ciblez un autre élément HTML avec l'ID "searchInput" à l'aide de document.getElementById("searchInput") et le stockez dans la constante search. 
// Cet élément est probablement un champ de recherche où l'utilisateur peut entrer des termes de recherche.
const search = document.getElementById("searchInput");

// ************************************ //
// Vous créez un élément <ul> (liste non ordonnée) en utilisant document.createElement("ul") et le stockez dans la constante ulContents.
// Cette liste contiendra les éléments de votre tableau idioms1.
const ulContents = document.createElement("ul");
// Vous parcourez le tableau idioms1 avec idioms1.forEach((item) => { ... }). 
idioms1.forEach((item) => {
// Pour chaque élément de votre tableau, vous créez un élément <li> (élément de liste) contenant du texte en utilisant document.createElement("li"). 
const liContents = document.createElement("li");
//Le texte contenu dans chaque élément <li> est constitué des propriétés de chaque objet de votre tableau.
liContents.textContent = `
Idiom: ${item.idiom}, Name: ${item.name}, Age: ${item.age}, Langage: ${item.langage}
`;
// Vous ajoutez chaque élément <li> créé dans l'étape précédente à la liste non ordonnée <ul> avec ulContents.appendChild(liContents). 
// Cela crée une structure HTML de la liste à afficher.
ulContents.appendChild(liContents);
});

// ----------------------------------
// filter de searchItem, pour filtrer et afficher les éléments du tableaux

// Vous ajoutez un écouteur d'événements sur l'élément de recherche en utilisant search.addEventListener("input", () => { ... }). 
// Cela signifie que la fonction à l'intérieur des accolades sera exécutée chaque fois que l'utilisateur saisit quelque chose dans le champ de recherche.
search.addEventListener("input", () => {
    // Dans la fonction de l'événement input, vous commencez par obtenir la valeur saisie par l'utilisateur dans le champ de recherche et la stockez dans "term". 
    const term = search.value.toLocaleLowerCase(); // Vous convertissez cette valeur en minuscules pour rendre la recherche insensible à la casse.
    

// Vous filtrez les données en utilisant .filter(). 
const filteredData = idioms1.filter((item) => { // La fonction filterData filtre les éléments de idioms1 en fonction du terme de recherche (term) en comparant 
    // chaque propriété de l'objet (idiom, name, age, langage) avec le terme de recherche.
    return (
      item.idiom.toLocaleLowerCase().includes(term) ||
      item.name.toLocaleLowerCase().includes(term) ||
      item.age.toString().includes(term) ||
      item.langage.toLowerCase().includes(term)
      );
    });
    
// Vous effacez le contenu précédent dans le conteneur principal en utilisant une boucle while 
// qui supprime tous les éléments enfants du conteneur jusqu'à ce qu'il soit vide.
  while (containerContents.firstChild) { // Efface le contenu précédent
      containerContents.removeChild(containerContents.firstChild);
  }

  // Vous créez une nouvelle liste non ordonnée <ul> pour afficher les éléments filtrés et la stockez dans la constante ulFilteredContents.
  const ulFilteredContents = document.createElement("ul");
  // Vous parcourez les éléments filtrés et créez un élément <li> pour chaque élément en utilisant .forEach(). 
  filteredData.forEach((item) => {
      const liFilteredContents = document.createElement("li");
      // Afficher les éléments filtrés
      liFilteredContents.textContent = `
      Idiom: ${item.idiom}, Name: ${item.name}, Age: ${item.age}, Langage: ${item.langage}
      `;
    // Vous ajoutez ensuite ces éléments <li> à la liste non ordonnée <ul>.
      ulFilteredContents.appendChild(liFilteredContents);
   });
// Enfin, vous ajoutez la liste contenant les éléments filtrés au conteneur principal, 
// remplaçant ainsi le contenu précédent par les éléments filtrés.
   containerContents.appendChild(ulFilteredContents);
});
// Ainsi, ce code vous permet de filtrer et d'afficher des éléments de votre tableau 
// en fonction des termes de recherche saisis par l'utilisateur dans le champ de recherche.








