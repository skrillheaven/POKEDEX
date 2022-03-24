function consulta_pokemon() {
    //se obtiene el valor del input entrada
    const PokeName = document.getElementById("Entrada");
    //se vuelve todo en minusculas
    let pokeinput = PokeName.value.toLowerCase();
    //se realiza la consulta con la api
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokeinput;
    fetch(url).then((res) => {
            //en caso de error arojara una imagen y se activa el motodo botones
            if (res.status != "200") {
                console.log(res);
                PokeImg("/img/enojado.png");
                botones("false");

            } else {
                return res.json();
            }

        }) // va a consultar el resultado del api por medio de una 'promesa'
        .then((data) => {
            //consultas a la api de manera especifica ya teniendo la busqueda del pokemon
            console.log(data);

            //consulta para  obtener la imagen del pokemon
            let pokeimg = data.sprites.front_default;
            console.log(pokeimg);
            PokeImg(pokeimg);

            //se manda a llamar el ID
            let pokenumero = data.id;
            console.log(pokenumero);

            //se manda a llamar el nombre
            let pokename1 = data.name;
            console.log(pokename1);

            //se manda a llamar el tipo de pokemon
            let poketype = data.types[0].type.name;
            console.log(poketype);

            //consulta del peso
            let pokepeso = data.weight;
            console.log(pokepeso);

            //consulta de la altura 
            let pokealtura = data.height;
            console.log(pokealtura)

            // asignacion de valores funcion pokedatos
            PokeDatos(pokenumero, pokename1, poketype, pokepeso, pokealtura);

            //creando una funcion al boton estadisticas
            const botonesta = document.getElementById("botonestadisticas");

            //funcion click del boton
            botonesta.addEventListener("click", () => {
                    /*hp,atack,defensa,speed,atack special*/
                    let hp = data.stats[0].base_stat;
                    console.log(hp);

                    let ataque = data.stats[1].base_stat;
                    console.log(ataque);

                    let defensa = data.stats[2].base_stat;
                    console.log(defensa);

                    let velocidad = data.stats[5].base_stat;
                    console.log(velocidad);

                    let ataqueespecial = data.stats[3].base_stat;
                    console.log(ataqueespecial);
                    //se envian las variables al metodo
                    pokeEstadisticas(hp, ataque, defensa, velocidad, ataqueespecial);

                })
                //funcion al boton habilidades por medio del id
            const botonhabili = document.getElementById("botonhabili");

            botonhabili.addEventListener("click", () => {
                //consultas de prueba
                let canhabili1 = data.abilities;
                // let ca = data.abilities[0].ability.name;
                console.log(canhabili1);
                //console.log(ca);


                //consulta para ver la cantidad de habilidades
                let canhabili = data.abilities.length;
                //se imprime la cantidad de habilidades
                console.log(canhabili);
                //declaracion de variables a usar
                let hab1, hab2, hab3, hab4, hab5;

                //condicional sobre cantidad de habilidades y con forme a eso mandarlo al metodo habilidad3s
                if (canhabili == "1") {
                    hab1 = "1 :" + data.abilities[0].ability.name;

                }
                if (canhabili == "2") {
                    hab1 = "1 :" + data.abilities[0].ability.name;
                    hab2 = "2 :" + data.abilities[1].ability.name;


                }
                if (canhabili == "3") {
                    hab1 = "1 :" + data.abilities[0].ability.name;
                    hab2 = "2 :" + data.abilities[1].ability.name;
                    hab3 = "3 :" + data.abilities[2].ability.name;


                }
                if (canhabili == "4") {
                    hab1 = "1 :" + data.abilities[0].ability.name;
                    hab2 = "2 :" + data.abilities[1].ability.name;
                    hab3 = "3 :" + data.abilities[2].ability.name;
                    hab4 = "4 :" + data.abilities[3].ability.name;

                }
                if (canhabili == "5") {
                    hab1 = "1 :" + data.abilities[0].ability.name;
                    hab2 = "2 :" + data.abilities[1].ability.name;
                    hab3 = "3 :" + data.abilities[2].ability.name;
                    hab4 = "4 :" + data.abilities[3].ability.name;
                    hab5 = "5 :" + data.abilities[4].ability.name;

                }
                pokehabiliades(canhabili, hab1, hab2, hab3, hab4, hab5);


            })



            //PokeDatos(pokeDatos1);
        })


}
//consulta_pokemon();

//metodo imagen 
const PokeImg = (url) => {
    const pokeImg = document.getElementById("ImagenP");
    pokeImg.src = url;

}

//metodo datos basicos del pokemon
const PokeDatos = (ID, name, types, Peso, Altura) => {


    const pokeID = document.getElementById("L1"); //se busca el objeto por medio del id
    pokeID.textContent = "ID: " + ID; // se le asigna el vlor al contenido del objeto 

    const pokeDatos = document.getElementById("L2");
    pokeDatos.textContent = "Nombre: ";

    const pokeerror4 = document.getElementById("L3");
    pokeerror4.textContent = name;

    const pokeTypes = document.getElementById("L4");
    pokeTypes.textContent = "Tipo: " + types;

    const pokepeso = document.getElementById("L5");
    pokepeso.textContent = "Peso: " + Peso + " lb"

    const pokealtura = document.getElementById("L6");
    pokealtura.textContent = "Altura: " + Altura + " in";


    const pokeboton1 = document.getElementById("botonestadisticas");
    pokeboton1.textContent = "Estadis";

    const pokeboton2 = document.getElementById("botonhabili");
    pokeboton2.textContent = "Habili";

}

//metodo acciones cuando hay un error y los botones sueltan error
const botones = (condicion) => {

    if (condicion == "false") {
        //contenido de loslabels en el div "cuadro"
        var nada = "";
        const pokeerror1 = document.getElementById("L1");
        pokeerror1.textContent = "Este pokemon no";

        const pokeerror2 = document.getElementById("L2");
        pokeerror2.textContent = "existe";

        const pokeerror3 = document.getElementById("L3");
        pokeerror3.textContent = nada;

        const pokeerror4 = document.getElementById("L4");
        pokeerror4.textContent = nada;

        const pokeerror5 = document.getElementById("L5");
        pokeerror5.textContent = "Vuelve a intentarlo";

        const pokeerror6 = document.getElementById("L6");
        pokeerror6.textContent = nada;


        const pokeboton1 = document.getElementById("botonestadisticas");
        pokeboton1.textContent = "Error";

        const pokeboton2 = document.getElementById("botonhabili");
        pokeboton2.textContent = "Error";

    }
}

//metodo de plasmado de las estadisticas del pokemon
const pokeEstadisticas = (hp, ataq, defen, speed, speatq) => {

    const pokeesta1 = document.getElementById("L2");
    pokeesta1.textContent = "HP: " + hp;

    const pokeesta2 = document.getElementById("L3");
    pokeesta2.textContent = "Ataque: " + ataq;

    const pokeesta3 = document.getElementById("L4");
    pokeesta3.textContent = "Defensa: " + defen;

    const pokeesta4 = document.getElementById("L5");
    pokeesta4.textContent = "Velocidad: " + speed;

    const pokeesta5 = document.getElementById("L6");
    pokeesta5.textContent = "Ataque Especial: " + speatq;

    const pokeesta6 = document.getElementById("L1");
    pokeesta6.textContent = "Estadisticas";



}

//meotodo de las habilidades del pokemon
const pokehabiliades = (can, h1, h2, h3, h4, h5) => {
    const pokeesta = document.getElementById("L1");
    pokeesta.textContent = "Habilidades (" + can + ")";

    const pokeesta1 = document.getElementById("L2");
    pokeesta1.textContent = h1;

    const pokeesta2 = document.getElementById("L3");
    pokeesta2.textContent = h2;

    const pokeesta3 = document.getElementById("L4");
    pokeesta3.textContent = h3;

    const pokeesta4 = document.getElementById("L5");
    pokeesta4.textContent = h4;

    const pokeesta5 = document.getElementById("L6");
    pokeesta5.textContent = h5;

}

//PokeImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png");

/*const imprimir = () => {
    const PokeName = document.getElementById("PokeName");
    let pokeinput = PokeName.value;
    console.log("hola " + pokeinput);
}
console.log("hola " + pokeinput);
} */