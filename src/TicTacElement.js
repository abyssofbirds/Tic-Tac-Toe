import React from "react";

/**
 * @param {function} handleChangeTable
 * @param elem
 * @param position
 * @return {JSX.Element}
 */
export default ({ handleChangeTable, elem, position }) => (
  <td
    className="border square align-middle text-uppercase"
    onClick={() => handleChangeTable(position)}
  >
    {elem}
  </td>
);
