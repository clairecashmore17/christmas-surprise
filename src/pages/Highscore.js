import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./index.css";
const Highscore = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      {" "}
      <div className="homepage">
        <div className="rating">How did you like this game?</div>
        <Box
          sx={{
            "& > legend": { mt: 2 },
          }}
        >
          <Typography component="legend">Rate me!</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              console.log(newValue);
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default Highscore;
