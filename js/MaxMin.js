const d = document;

export class MaxAndMin {
  constructor() {
    this.array = [];
  }

  print() {
    //Selectores y elementos
    const $section = d.getElementById("container-section"),
      $containerBottons = d.querySelector(".container-buttons"),
      $sectionArray = d.querySelector(".container-array"),
      $array = d.querySelector(".array");
    const $input = d.createElement("input"),
      $btn = d.createElement("button"),
      $container = d.createElement("div"),
      $tittle = d.createElement("h2");

    // Creando botones
    const $btnMax = d.createElement("button"),
      $btnMin = d.createElement("button");

    // Agregando clases
    $containerBottons.classList.add("hide");
    $container.classList.add("flex");
    $input.classList.add("input");
    $btn.classList.add("btn-input");
    $btnMax.classList.add("btn-main");
    $btnMin.classList.add("btn-main");
    $tittle.classList.add("tittle-h2");
    $sectionArray.classList.remove("hide");

    // Valores de los elementos
    $input.setAttribute("type", "number");
    $tittle.innerHTML = "introduce los numeros";
    $btn.innerText = "agregar";
    $btnMax.innerHTML = "Mayor a Menor";
    $btnMin.innerHTML = "Menor a Mayor";
    $array.innerHTML = `[ ]`;
    $btnMax.id = "max-to-min";
    $btnMin.id = "min-to-max";

    // Insertando los elementos en el contenedor
    $container.appendChild($tittle);
    $container.appendChild($input);
    $container.appendChild($btn);
    $container.appendChild($btnMax);
    $container.appendChild($btnMin);

    $section.appendChild($container);
  }

  add() {
    // Selectores
    const $input = d.querySelector(".input"),
      $array = d.querySelector(".array");
    // Validaciones
    if ($input.value.length === 0) return console.error("sin numero");

    // Agregando los valores al arreglo
    this.array.push($input.value);
    $array.innerHTML = `[${this.array}]`;
  }

  delete() {
    const $input = d.querySelector(".input");
    $input.value = null;
  }

  end(value) {
    if (this.array.length === 0) return console.error("Introduzca numeros");

    // Selectores
    const $container = d.querySelector(".flex"),
      $array = d.querySelector(".array"),
      $arrayEnd = d.querySelector(".array-end"),
      $tittleEnd = d.querySelector(".tittle-end"),
      $tiitleMain = d.querySelector(".tittle-main"),
      $btnRestart = d.querySelector(".btn-end"),
      $containerEnd = d.getElementById("container-end");

    $container.remove();
    $array.remove();
    $tiitleMain.innerHTML = "Arreglo final";
    $btnRestart.classList.remove("hide");
    $containerEnd.classList.remove("hide");
    $containerEnd.classList.add("container-end");

    // operacion selecionada
    if (value === "max-to-min") {
      $tittleEnd.innerHTML = "De Mayor a Menor";
      this.greaterThan();
    } else {
      $tittleEnd.innerHTML = "De Menor a Mayor";
      this.smallerThan();
    }
    $arrayEnd.innerHTML = `[${this.array}]`;
  }

  // Metodos de acomodamiento
  greaterThan() {
    // Validaciones!!!!
    if (this.array.length === 0) return console.log("fin");

    this.array.sort(function (a, b) {
      return b - a;
    });
    const array = this.array.map((num) => parseInt(num));
    this.array = array;
    console.log("Descendente:  " + this.array);
  }

  smallerThan() {
    // Validaciones!!!!
    if (this.array.length === 0) return console.log("fin");

    this.array.sort(function (a, b) {
      return a - b;
    });
    const array = this.array.map((num) => parseInt(num));
    this.array = array;
    console.log("Ascendente:  " + this.array);
  }
}
