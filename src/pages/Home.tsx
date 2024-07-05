import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  interface type {
    id: String;
    title: string;
    body: string;
  }

  const [datas, setDatas] = useState<type>({
    id: "",
    title: "",
    body: "",
  });

  const getData: any = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => {
        console.error(err);
      })
      .then((res) => {
        const data = res.data;
        setDatas(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const columns: GridColDef<(typeof rows)[type]>[] = [
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
        <Button sx={{ margin:'20px'}} variant="outlined"> Task2</Button>
      </Link>
    </>
  );
};

export default Home;
