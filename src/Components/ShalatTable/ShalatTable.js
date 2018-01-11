import React, { Component } from "react";
import moment from "moment";
import 'moment/locale/id'
import "./ShalatTable.css";

moment.locale('id')

const ShalatTable = props => {
  return (
    <table>
      <th colSpan="2">Hari ini {moment().format("dddd, Do MMMM YYYY")}</th>
      {props.times.map(time => {
        return (
          <tr>
            <td className="left">{time.name}</td>
            <td className="right">{time.time}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default ShalatTable;
