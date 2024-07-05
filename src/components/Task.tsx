import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Button } from "@mui/material";

const Task = () => {
  const [checked, setChecked] = useState<boolean[]>([false, false]);
  const [checked2, setChecked2] = useState<boolean[]>([false, false, false]);

  const [visible1, setVisible1] = useState<boolean>(false);
  const [visible2, setVisible2] = useState<boolean>(false);

  const handleParentChange = (setChecked: any, length: number) => (e: any) => {
    const checked = e.target.checked;
    setChecked(Array(length).fill(checked));
  };

  const handleChildChange =
    (index: number, checkedArray: boolean[], setChecked: any) => (e: any) => {
      const newCheckedArray = [...checkedArray];
      newCheckedArray[index] = e.target.checked;
      setChecked(newCheckedArray);
    };

  const children1 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="support"
        control={
          <Checkbox
            checked={checked[0]}
            onChange={handleChildChange(0, checked, setChecked)}
          />
        }
      />
      <FormControlLabel
        label="customer success"
        control={
          <Checkbox
            checked={checked[1]}
            onChange={handleChildChange(1, checked, setChecked)}
          />
        }
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="graphic design"
        control={
          <Checkbox
            checked={checked2[0]}
            onChange={handleChildChange(0, checked2, setChecked2)}
          />
        }
      />
      <FormControlLabel
        label="product design"
        control={
          <Checkbox
            checked={checked2[1]}
            onChange={handleChildChange(1, checked2, setChecked2)}
          />
        }
      />
      <FormControlLabel
        label="web design"
        control={
          <Checkbox
            checked={checked2[2]}
            onChange={handleChildChange(2, checked2, setChecked2)}
          />
        }
      />
    </Box>
  );

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Button
          sx={{
            minWidth: "30px",
            minHeight: "30px",
          }}
          onClick={() => setVisible1((prev) => !prev)}
          variant="outlined"
        >
          {visible1 ? "-" : "+"}
        </Button>

        <FormControlLabel
          label="customer service"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={handleParentChange(setChecked, checked.length)}
            />
          }
        />
        {visible1 ? children1 : " "}
      </div>

      <div>
        <Button
          sx={{
            minWidth: "30px",
            minHeight: "30px",
          }}
          onClick={() => setVisible2((prev) => !prev)}
          variant="outlined"
        >
          {visible2 ? "-" : "+"}
        </Button>

        <FormControlLabel
          label="design"
          control={
            <Checkbox
              checked={checked2[0] && checked2[1] && checked2[2]}
              indeterminate={
                !!(checked2[0] || checked2[1] || checked2[2]) &&
                !(checked2[0] && checked2[1] && checked2[2])
              }
              onChange={handleParentChange(setChecked2, checked2.length)}
            />
          }
        />
        {visible2 ? children2 : " "}
      </div>
    </>
  );
};

export default Task;
