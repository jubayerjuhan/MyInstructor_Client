import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { addInstructorFields } from "../../utils/InputFieldsDetail/InputFieldsDetail";
import AdminPageWrapper from "../AdminPageWrapper/AdminPageWrapper";
import Select from "@mui/material/Select";
import { getAllCars } from "../../api_calls/Admin/admin_car";
import { client } from "../../client";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addInstructorAdmin } from "../../api_calls/Admin/admin_instructors";
import { toast } from "material-react-toastify";

const AddInstructor = () => {
  const ref = useRef<HTMLDivElement>();
  const [cars, setCars] = useState<any[]>([]);
  const [suburbs, setSuburbs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [multiValue, setMultiValue] = useState({
    languages: [],
    car: {},
    serviceSuburbs: [],
  });

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    const instructorLanguage: string[] = [];
    let instructor = { ...data };
    instructor.avater = data.avater[0];
    // pushing language
    multiValue.languages?.forEach((language: any) => {
      instructorLanguage.push(language.name);
    });
    // adding language on instrucotr
    instructor.languages = instructorLanguage;
    console.log(instructor, "instructor");

    // car
    instructor.car = { ...multiValue.car, numberPlate: instructor.numberPlate };
    console.log(instructor);

    // suburbs
    const suburbs: any[] = [];
    multiValue.serviceSuburbs.forEach((suburb: any) => {
      suburbs.push({ name: suburb.suburb, postCode: suburb.postcode });
    });

    // pushing suburbs to instructor
    instructor.serviceSuburbs = {};
    instructor.serviceSuburbs.suburbs = suburbs;
    console.log(instructor, "Instructor");

    const formData = new FormData();
    Object.keys(instructor).forEach((key, index) => {
      if (key === "car") return;
      if (key === "serviceSuburbs") return;
      formData.append(key, instructor[key]);
    });

    formData.append(
      "car",
      JSON.stringify({ ...multiValue.car, numberPlate: instructor.numberPlate })
    );
    formData.append(
      "serviceSuburbs",
      JSON.stringify(instructor.serviceSuburbs)
    );

    saveInstructor(formData);
  };

  const saveInstructor = async (formData: any) => {
    setLoading(true);
    const { success, message } = await addInstructorAdmin(formData);
    if (!success) {
      setLoading(false);
      return toast.error(message);
    }
    toast.success("Instructor Added Successfully");
    setLoading(false);
  };

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const data = await getAllCars();
    setCars(data?.cars);
  };

  const handleSubrubSearch = async (e: any) => {
    if (e.target.value.length === 0) setSuburbs([]);
    if (e.target.value.length < 2) return;
    setLoading(true);
    const { data } = await client.get(`/search-suburbs/${e.target.value}`);
    setLoading(false);
    setSuburbs(data.suburbs);
  };

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
                  {...register(field.name)}
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

          // file upload
          if (field.type === "file") {
            return (
              <>
                <InputLabel id="demo-simple-select-label">
                  {field.label}
                </InputLabel>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <Box>
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      {...register(field.name)}
                    />
                    image
                  </Box>
                  <PhotoCamera />
                </IconButton>
              </>
            );
          }

          // car field
          if (field.name === "car") {
            return (
              <Autocomplete
                onChange={(e, value) =>
                  setMultiValue({ ...multiValue, [field.name]: value })
                }
                id="tags-standard"
                ref={ref}
                className="movies"
                options={cars}
                getOptionLabel={(option: any) =>
                  option.name ? option.name : "Select Car"
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
                  {...register(field.name)}
                  onChange={(e, value) =>
                    setMultiValue({ ...multiValue, [field.name]: value })
                  }
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
                  {...register(field.name)}
                  multiple
                  loading={loading}
                  onChange={(e, value) =>
                    setMultiValue({ ...multiValue, [field.name]: value })
                  }
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
              {...register(field.name)}
              name={field.name}
              id="outlined-basic"
              label={field.label}
              variant="outlined"
              type={field.type}
            />
          );
        })}

        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </Box>
    </AdminPageWrapper>
  );
};

export default AddInstructor;
