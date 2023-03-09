import {
  getGames,
  getCellphones,
  getLoadGames,
  getDelete,
  getEditar,
  getGuardar,
  getLoadPhones,
  getDeletePhone,
  getEditarPhone,
  getGuardarPhone,
} from "../services/axiosCRUDservices";

export async function obtainAllGames(setGames) {
  try {
    const response = await getGames();
    if (response.data && response.status === 200) {
      setGames(response.data);
    } else {
      throw new Error(`No game found`);
    }
  } catch (error) {
    alert(`Something went wrong: ${error}`);
  }
}

export function obtainAllCellphones(setCellphones) {
  getCellphones()
    .then((response) => {
      if (response.data && response.status === 200) {
        setCellphones(response.data);
      } else {
        throw new Error(`No Cellphone found`);
      }
    })
    .catch((error) => alert(`Something went wrong: ${error}`));
}

export async function loadGames(
  id,
  setTitulo,
  setDescripcion,
  setPlataforma,
  setPrecio,
  setCategoria
) {
  try {
    const { data } = await getLoadGames(id);

    setTitulo(data.titulo);
    setDescripcion(data.description);
    setPlataforma(data.plataforma);
    setPrecio(data.precio);
    setCategoria(data.categoria);
  } catch (error) {
    if (error.response.status === 404) {
      alert("El juego no existe!");
      document.querySelector("#btnClose").click();
    } else alert(error);
  }
}
export async function loadPhones(
  id,
  setMarca,
  setModelo,
  setColor,
  setPrecio,
  setDescripcion,
  setOperadora
) {
  try {
    const { data } = await getLoadPhones(id);

    setMarca(data.marca);
    setModelo(data.modelo);
    setColor(data.color);
    setPrecio(data.precio);
    setDescripcion(data.descripcion);
    setOperadora(data.operadora);
  } catch (error) {
    if (error.response.status === 404) {
      alert("El telefono no existe!");
      document.querySelector("#btnClose").click();
    } else alert(error);
  }
}
export async function eliminar(id) {
  try {
    const { data } = await getDelete(id);

    alert(data.message);
    if (data.status === 1) document.querySelector("#btnClose").click();
  } catch (error) {
    if (error.response.status === 404) {
      alert("Juego no existe!");
      document.querySelector("#btnClose").click();
    } else alert(error);
  }
}
export async function eliminarPhone(id) {
  try {
    const { data } = await getDeletePhone(id);

    alert(data.message);
    if (data.status === 1) document.querySelector("#btnClose").click();
  } catch (error) {
    if (error.response.status === 404) {
      alert("Phone no existe!");
      document.querySelector("#btnClose").click();
    } else alert(error);
  }
}

export async function editar(id, titulo, descripcion, plataforma, precio, categoria) {
  try {
    const juego = {
      juegoId: id,
      titulo: titulo,
      descripcion: descripcion,
      plataforma: plataforma,
      precio: precio,
      categoria: categoria,
    };
    getEditar(id, juego)
      .then((response) => {
        const data = response.data;
        alert(data.message);
        if (data.status === 1) {
          document.querySelector("#btnClose").click();
        }
      })
      .catch((error) => {
        alert(error);
      });
  } catch (error) {
    alert(error);
  }
}
export async function editarPhone(id, marca, modelo, color, precio, descripcion, operadora) {
  try {
    const phone = {
      marcaId: id,
      marca: marca,
      modelo: modelo,
      color: color,
      precio: precio,
      descripcion: descripcion,
      operadora: operadora,
    };
    getEditarPhone(id, phone)
      .then((response) => {
        const data = response.data;
        alert(data.message);
        if (data.status === 1) {
          document.querySelector("#btnClose").click();
        }
      })
      .catch((error) => {
        alert(error);
      });
  } catch (error) {
    alert(error);
  }
}

export async function guardar(titulo, descripcion, plataforma, precio, categoria) {
  try {
    const juego = {
      titulo: titulo,
      descripcion: descripcion,
      plataforma: plataforma,
      precio: precio,
      categoria: categoria,
    };
    getGuardar(juego)
      .then((response) => {
        const data = response.data;
        alert(data.message);
        if (data.status === 1) {
          document.querySelector("#btnClose").click();
        }
      })
      .catch((error) => {
        alert(error);
      });
  } catch (error) {
    alert(error);
  }
}
export async function guardarPhone(marca, modelo, color, precio, descripcion, operadora) {
  try {
    const phone = {
      marca: marca,
      modelo: modelo,
      color: color,
      precio: precio,
      descripcion: descripcion,
      operadora: operadora,
    };
    getGuardarPhone(phone)
      .then((response) => {
        const data = response.data;
        alert(data.message);
        if (data.status === 1) {
          document.querySelector("#btnClose").click();
        }
      })
      .catch((error) => {
        alert(error);
      });
  } catch (error) {
    alert(error);
  }
}
