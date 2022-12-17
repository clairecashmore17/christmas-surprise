import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, skills, spirit, evil, strength) {
  return { name, skills, spirit, evil, strength };
}

const rows = [
  createData(
    "Eggnog the radio elf",
    "Using the radio, taking notes",
    "7 / 10",
    "3 / 10",
    4.0
  ),
  createData(
    "Mrs. Claus",
    "Organizing, baking, dancing, kindness",
    "9 / 10",
    "1 / 10",
    12.0
  ),
  createData(
    "Daisy the Bakery Elf",
    "Memory, baking, music, stealing money",
    "5 / 10",
    "5 / 10",
    8.0
  ),
  createData(
    "Nicholas Cage",
    "Using red paint, lying, buying things, one liners",
    "1 / 10",
    "9 / 10",
    6.0
  ),
  createData(
    "Santa Claus",
    "Delivering presents, wearing red, talking to reindeer",
    "9/ 10",
    "1 / 10",
    8.0
  ),
  createData(
    "Sneaky Snowman",
    "Watching everyones moves",
    "10 / 10",
    "10 / 10",
    100.0
  ),
];
const Characters = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Characters</TableCell>
            <TableCell align="right">Skills</TableCell>
            <TableCell align="right">Christmas Spirit</TableCell>
            <TableCell align="right">Evilness</TableCell>
            <TableCell align="right">Strength</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.skills}</TableCell>
              <TableCell align="right">{row.spirit}</TableCell>
              <TableCell align="right">{row.evil}</TableCell>
              <TableCell align="right">{row.strength}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Characters;
