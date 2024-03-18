import React from "react";
import comentaryIcon from "../../assets/images/comentary-icon.svg";
import detalhesEvento from "../../assets/images/detalhesevento.svg";
import { dateFormateDbToView } from "../../Utils/stringFunctions";
import ToggleSwitch from "../Toggle/Toggle";
// importa a biblioteca de tootips ()
import "react-tooltip/dist/react-tooltip.css";
// import { Tooltip } from "react-tooltip";

// import trashDelete from "../../../assets/images/trash-delete.svg";
import "./TableEvComments.css";

const Table = ({ dados }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Comentarios do Evento
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map((e) => {

          

          return (
            <tr className="tbal-data__head-row" key={Math.random()}>
              <td className="tbal-data__data tbal-data__data--big">
                {e.descricao}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
