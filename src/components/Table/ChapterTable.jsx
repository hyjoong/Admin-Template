import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { tableRow } from "../../components/Chart/dummyData";

const ChapterTable = () => {
  const [data, setData] = useState(tableRow);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 200,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 160,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      description: "This column has a status",
      sortable: true,
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/detail/" + params.row.id}>
              <button
                className="EditButton"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#36a56f",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={10}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default ChapterTable;
