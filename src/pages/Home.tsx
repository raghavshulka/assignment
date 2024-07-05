import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  interface DataType {
    id: string;
    title: string;
    body: string;
  }

  const [datas, setDatas] = useState<DataType[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get<DataType[]>("https://jsonplaceholder.typicode.com/posts");
      setDatas(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 300 },
    {
      field: "title",
      headerName: "Title",
      width: 500,
      editable: true,
    },
    {
      field: "body",
      headerName: "Body",
      width: 500,
      editable: true,
    },
  ];

  const rows = datas;

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      <Link to={"/task"}>
        <Button sx={{ margin: "20px" }} variant="outlined">
          Task2
        </Button>
      </Link>
    </>
  );
};

export default Home;
