import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ShowSelection = ({ selectedShow, onSelectShow }) => {
  const [shows] = useState([
    { id: 1, name: "The Lion King",  price: 50.00 },
    { id: 2, name: "The Woman King",  price: 45.00 },
    { id: 3, name: "Legen Of The Seeker",  price: 70.00 },
    { id: 3, name: "Aloe Vera",  price: 40.00 },
  ]);

  const handleShowSelect = (event) => {
    const selectedShowId = event.target.value;
    const selectedShow = shows.find((show) => show.id === selectedShowId);
    onSelectShow(selectedShow);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="show-select-label">Select a Show</InputLabel>
        <Select
          labelId="show-select-label"
          id="show-select"
          value={selectedShow ? selectedShow.id : ""}
          onChange={handleShowSelect}
        >
          {shows.map((show) => (
            <MenuItem key={show.id} value={show.id}>
              {show.name} - (₵ {show.price})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ShowSelection;
