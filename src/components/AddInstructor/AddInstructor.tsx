import {
  Autocomplete,
  Box,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { addInstructorFields } from "../../utils/InputFieldsDetail/InputFieldsDetail";
import AdminPageWrapper from "../AdminPageWrapper/AdminPageWrapper";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getAllCars } from "../../api_calls/Admin/admin_car";
import { getSuburbs } from "../../api_calls/user_api";
import { toast } from "material-react-toastify";
import { client } from "../../client";

const AddInstructor = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [suburbs, setSuburbs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    getCars();
    getAllSuburbs();
  }, []);

  const getCars = async () => {
    const data = await getAllCars();
    setCars(data?.cars);
  };

  const getAllSuburbs = async () => {
    // const { success, message, suburbs } = await getSuburbs();
    // if (!success) return toast.error(message);
    // setSuburbs(suburbs);
  };

  const handleSubrubSearch = async (e: any) => {
    if (e.target.value.length === 0) setSuburbs([]);
    if (e.target.value.length < 2) return;
    setLoading(true);
    const { data } = await client.get(`/search-suburbs/${e.target.value}`);
    setLoading(false);
    setSuburbs(data.suburbs);
  };
  console.log(suburbs, "suburbs");

  return (
    <AdminPageWrapper>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {addInstructorFields.map((field: any, key: number) => {
          // select field
          if (field.type === "select") {
            return (
              <>
                <InputLabel id="demo-simple-select-label">
                  {field.label}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  {field?.options &&
                    field.options.map((option: any, key: number) => (
                      <MenuItem value={option} key={key}>
                        {option}
                      </MenuItem>
                    ))}
                </Select>
              </>
            );
          }

          // car field
          if (field.name === "car") {
            return (
              <Autocomplete
                multiple
                onChange={(e, value) => console.log(e, value)}
                id="tags-standard"
                options={cars}
                getOptionLabel={(option: any) =>
                  option.name ? option.name : "Nai"
                }
                renderInput={(params) => (
                  <>
                    <TextField
                      {...params}
                      onChange={(e) => console.log(e)}
                      variant="outlined"
                      label={field.label}
                      placeholder={field.label}
                    />
                  </>
                )}
              />
            );
          }

          // language field
          if (
            field.type === "multiple" &&
            field.options &&
            field.name === "languages"
          ) {
            return (
              <>
                <Autocomplete
                  multiple
                  onChange={(e, value) => console.log(value)}
                  id="tags-standard"
                  options={field.options ? field.options : []}
                  getOptionLabel={(option: any) =>
                    option.name ? option.name : "Nai"
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label={field.label}
                      placeholder={field.label}
                    />
                  )}
                />
              </>
            );
          }
          if (field.type === "multiple" && field.name === "serviceSuburbs") {
            return (
              <>
                <Autocomplete
                  multiple
                  onChange={(e, value) => console.log(value)}
                  id="tags-standard"
                  options={suburbs}
                  getOptionLabel={(option: any) =>
                    option.suburb ? option.suburb : "Nai"
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      onChange={handleSubrubSearch}
                      variant="outlined"
                      label={field.label}
                      placeholder="Suburb"
                    />
                  )}
                />
              </>
            );
          }

          // text field
          return (
            <TextField
              name={field.name}
              id="outlined-basic"
              label={field.label}
              variant="outlined"
              type={field.type}
            />
          );
        })}
      </Box>
    </AdminPageWrapper>
  );
};

export default AddInstructor;
