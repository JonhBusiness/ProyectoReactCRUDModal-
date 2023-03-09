import React from "react";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import { Table } from "..//../components/Table";
import { obtainAllCellphones } from "../../hooks/LifeCicle";
import CellPhonesTask from "../tasks/CellPhonesTask";
export default function CellPhones() {
  const [cellphones, setCellphones] = useState([]);
  const [id, setId] = useState();
  const [del, setDel] = useState();

  function configuar(id, del) {
    setId(id);
    setDel(del);
  }
  useEffect(() => {
    obtainAllCellphones(setCellphones);
  }, [cellphones]);

  return (
    <div>
      <Menu />
      <h1 className="text-uppercase d-flex justify-content-center animate__animated animate__fadeInRight">
        CellPhones
      </h1>
      {cellphones === undefined ? (
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
          filas={cellphones}
          controlador="zonecellphones"
          campos={["Id", "Marca", "Modelo", "Color", "precio", "Descripcion", "Operadora"]}
        />
      )}
      <div
        className="modal fade "
        id="phonesModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content back">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 text-white " id="exampleModalLabel">
                CellPhones
              </h1>
              <button
                type="button"
                id="btnClose"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <CellPhonesTask id={id} del={del} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
