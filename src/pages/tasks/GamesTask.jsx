import React from "react";
import { useEffect, useState } from "react";
import { loadGames, eliminar, editar, guardar } from "../../hooks/LifeCicle";

export default function GamesTask({ id, del }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    if (id !== undefined)
      loadGames(id, setTitulo, setDescripcion, setPlataforma, setPrecio, setCategoria);
    else {
      setTitulo("");
      setDescripcion("");
      setPlataforma("");
      setPrecio("");
      setCategoria("");
    }
  }, [id]);

  function enviar(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = document.querySelector("#formulario");

    if (form.checkValidity() === false) form.classList.add("was-validated");
    else {
      if (id === undefined) guardar(titulo, descripcion, plataforma, precio, categoria);
      else if (del !== true) editar(id, titulo, descripcion, plataforma, precio, categoria);
      else eliminar(id);
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
            <label className="form-label">Games ID</label>
            <input className="form-control" type="text" value={id} readOnly disabled></input>
          </div>
        ) : (
          ""
        )}

        <form id="formulario" className="needs-validation text-uppercase fw-bolder" noValidate>
          <div className="form-group mt-1 ">
            <label className="form-label">Titulo:</label>
            <input
              className="form-control"
              required
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">Descripcion:</label>
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
            <label className="form-label">Plataforma:</label>
            <input
              className="form-control"
              required
              type="text"
              value={plataforma}
              onChange={(e) => setPlataforma(e.target.value)}
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
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              disabled={del === true ? true : false}
            />
            <div className="valid-feedback">Correcto</div>
            <div className="invalid-feedback">Complete el campo</div>
          </div>
          <div className="form-group mt-2">
            <label className="form-label">Categoria</label>
            <input
              className="form-control"
              required
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
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
              className="btn btn-secondary"
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
