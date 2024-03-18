import React from "react";
import "./TableDEv.css";
// import editPen from "../../../assets/images/edit-pen.svg";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";
import { dateFormateDbToView } from "../../../Utils/stringFunctions";
import comentaryIcon from "../../../assets/images/comentary-icon.svg";

// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

// import trashDelete from "../../../assets/images/trash-delete.svg";

const  Table = ({ dados }) => {
  // console.log(dados);

  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Nome do Evento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Data
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Comentários
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map((tp) => {
          return (
            <tr className="table-data__head-row" key={tp.idEvento}>
              <td className="table-data__data table-data__data--little">
                {tp.nomeEvento}
              </td>
              <td className="table-data__data table-data__data--little ">
                {dateFormateDbToView(tp.dataEvento)}
              </td>
              <td className="table-data__data table-data__data--little">
                <Link to={`/comentarios-evento/${tp.idEvento}`} state={tp}>
                  <img
                    className="table-data__icon"
                    src={comentaryIcon}
                    alt=""
                    // onClick={getComments}
                  />
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
