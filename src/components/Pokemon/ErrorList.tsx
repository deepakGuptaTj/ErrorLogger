import { Dropdown, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Image from "next/image";
import { THSort } from "@components/TableSort";

const typeColorMap: Record<string, string> = {
  normal: "#aa9",
  fighting: "#b54",
  flying: "#89f",
  poison: "#a59",
  ground: "#db5",
  rock: "#ba6",
  bug: "#ab2",
  ghost: "#66b",
  steel: "#aab",
  fire: "#f42",
  water: "#39f",
  grass: "#7c5",
  electric: "#fc3",
  psychic: "#f59",
  ice: "#6cf",
  dragon: "#76e",
  dark: "#754",
  fairy: "#e9e",
  unknown: "#aa9",
  shadow: "#aa9",
};

type Props = {
  Errors: any;
} & Pick<Parameters<typeof THSort>[0], "setSort" | "setOrder">;

export default function ErrorList(props: Props) {
  const { Errors, setSort, setOrder } = props;
  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
        <tr>
          <th>#</th>

          <th>Id</th>

          <th>Error</th>
          <th>Updated At</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        {Errors.map((error: any, index: number) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{error["_id"]}</td>
            <td>{error.errors}</td>
            <td>{error["updated_at"]}</td>
            <td>{error["created_at"]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
