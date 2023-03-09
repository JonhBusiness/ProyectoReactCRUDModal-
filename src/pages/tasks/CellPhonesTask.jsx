import React from "react";
import { useEffect, useState } from "react";
import { loadPhones, eliminarPhone, editarPhone, guardarPhone } from "../../hooks/LifeCicle";

export default function CellPhonesTask({ id, del }) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [operadora, setOperadora] = useState("");

  useEffect(() => {
    if (id !== undefined)
      loadPhones(id, setMarca, setModelo, setColor, setPrecio, setDescripcion, setOperadora);
  }, [id]);

  function enviar(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = document.querySelector("#formulario");

    if (form.checkValidity() === false) form.classList.add("was-validated");
    else {
      if (id === undefined) guardarPhone(marca, modelo, color, precio, descripcion, operadora);
      else if (del !== true) editarPhone(id, marca, modelo, color, precio, descripcion, operadora);
      else eliminarPhone(id);
    }
  }
  function cancelar(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <div className="d-flex justify-content-center ">
      <div className="mx-5 rounded-4 px-5 py-3 back text-white cuadro">
        <h1 className="text-center text-uppercase">
          {id === undefined ? "Add" : del !== true ? "Edit" : "Delete"}
        </h1>

        {id !== undefined ? (
          <div className="form-group text-uppercase fw-bolder">
            <label className="form-label">CellPhones ID</label>
            <input className="form-control" type="text" value={id} readOnly disabled></input>
          </div>
        ) : (
          ""
        )}

        <form id="formulario" className="needs-validation text-uppercase fw-bolder" noValidate>
          <div className="form-group mt-1">
            <label className="form-label">marca:</label>
            <input
              className="form-control"
              required
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">modelo:</label>
            <input
              className="form-control"
              required
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">color:</label>
            <input
              className="form-control"
              required
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">Precio</label>
            <input
              className="form-control"
              required
              type="text"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">descripcion</label>
            <input
              className="form-control"
              required
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">Operadora</label>
            <input
              className="form-control"
              required
              type="text"
              value={operadora}
              onChange={(e) => setOperadora(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <button
              className={`btn btn-${
                id === undefined ? "success" : del !== true ? "primary" : "danger"
              }`}
              onClick={(e) => enviar(e)}>
              {id === undefined ? "Guardar" : del !== true ? "Editar" : "Eliminar"}
            </button>
            <button
              className=" btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={(e) => cancelar(e)}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
