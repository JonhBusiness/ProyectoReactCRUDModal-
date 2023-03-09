import React from "react";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import { Table } from "..//../components/Table";
import { obtainAllGames } from "../../hooks/LifeCicle";
import GamesTask from "../tasks/GamesTask";

export default function Games() {
  const [games, setGames] = useState();
  const [id, setId] = useState();
  const [del, setDel] = useState();

  function configuar(id, del) {
    setId(id);
    setDel(del);
  }

  useEffect(() => {
    obtainAllGames(setGames);
  }, [games]);

  return (
    <div>
      <Menu />
      <h1 className="text-uppercase d-flex justify-content-center animate__animated animate__fadeInRight">
        Games
      </h1>
      {games === undefined ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}>
          <div className="spinner-grow" style={{ width: "3rem", height: " 3rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Table
          evento={configuar}
          filas={games}
          controlador="zonegames"
          campos={["Id", "Titulo", "Descripcion", "plataforma", "precio", "categoria"]}
        />
      )}
      <div
        className="modal fade "
        id="gamesModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content back">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 text-white " id="exampleModalLabel">
                Games
              </h1>
              <button
                type="button"
                id="btnClose"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <GamesTask id={id} del={del} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
