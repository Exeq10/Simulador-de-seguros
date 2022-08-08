const setMarcas = document.getElementById("marca");
const setAño = document.getElementById("año");
const getCobertura = document.getElementById("cobertura");
const boton = document.getElementById("boton");
const form = document.getElementById("formulario");
const resultado = document.getElementById("resultados");

/* defino las marcas de forma dinamica */

marcas.forEach((datos) => {
  const { marca, valor } = datos;

  let opcion = document.createElement("option");

  opcion.innerHTML += ` <option  name = "${marca}">${marca}</option>`;
  opcion.setAttribute("value", `${valor}`);

  setMarcas.appendChild(opcion);
});

/* defino los años  */

años.forEach((años) => {
  const { año, valor } = años;
  let opcion = document.createElement("option");

  opcion.innerHTML += ` <option>${año}</option>`;
  opcion.setAttribute("value", `${valor}`);
  opcion.setAttribute("name", `${año}`);

  setAño.appendChild(opcion);
});

function Cotizar() {
  let total;

  resultado.innerHTML = ` <p class=" load animate__animated animate__bounce animate__infinite infinite">
  Cargando...
</p>`;
  setTimeout(() => {
    if (getCobertura.value === "completa") {
      total = parseInt(setMarcas.value) + parseInt(setAño.value) + 5000;

      resultado.innerHTML = `<p >Vehiculo : ${showChange()}</> <p>Año : ${showChangeAño()}</p> <p>Cobertura : Completa</p><h3>Monto a pagar: ${Formato(
        total,
        "UYU"
      )}</h3>
      

      
        
       </p>`;
    } else {
      total = parseInt(setMarcas.value) + parseInt(setAño.value) + 1000;
      resultado.innerHTML = `<p>Vehiculo : ${showChange()}</p><p>Año : ${showChangeAño()}</p> <p>Cobertura : Básica</p><h3>Monto a pagar: ${Formato(
        total,
        "UYU"
      )}</h3> `;
    }
  }, 2000);
}

function showChange() {
  let selected = setMarcas.options[setMarcas.selectedIndex].text;

  return selected;
}

function showChangeAño() {
  let selected = setAño.options[setAño.selectedIndex].text;
  return selected;
}

function Validar() {
  if (
    setMarcas.value === "0" ||
    setAño.value == "0 " ||
    getCobertura.value == "0"
  ) {
    resultado.innerHTML =
      '<p class = "alerta"> Debe seleccionar todos los campos </p>';

    setTimeout(() => {
      resultado.innerHTML = "";
    }, 1500);
  } else {
    Cotizar();
  }
}

const Formato = (valor, moneda) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: moneda,
    minimumFractionDigits: 2,
  });
};
