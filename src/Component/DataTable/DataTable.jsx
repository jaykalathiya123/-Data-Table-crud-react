import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const DataTable = ({ Storage, handleEdit, setStorage }) => {
  const handleRemove = (id) => {
    const removeData = Storage.filter((item) => item.id !== id);
    setStorage(removeData);
  };
  return (
    <div className="container mx-auto mt-4">
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 440,
          backgroundColor: "linear-gradient(to right, #e0f7fa, #e0f7fa)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#00796b" }}>
              <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                #
              </TableCell>
              <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                Course
              </TableCell>
              <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                Message
              </TableCell>
              <TableCell sx={{ color: "black", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Storage.map((rec, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-of-type(odd)": { backgroundColor: "#f1f8e9" },
                  "&:nth-of-type(even)": { backgroundColor: "#e8f5e9" },
                  "&:hover": { backgroundColor: "#c8e6c9" },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{rec.name}</TableCell>
                <TableCell>{rec.email}</TableCell>
                <TableCell>{rec.course}</TableCell>
                <TableCell>{rec.message}</TableCell>
                <TableCell>
                  <button
                    className="bg-teal-500 text-white px-2 py-1 rounded-full hover:bg-teal-600 transition-colors duration-300 shadow-md"
                    onClick={() => handleEdit(rec.id)}
                  >
                    <PencilIcon className="w-5 h-5 inline-block" />
                  </button>

                  <button
                    className="bg-red-500 text-white px-2 mx-2 py-1 rounded-full hover:bg-red-600 transition-colors duration-300 shadow-md"
                    onClick={() => handleRemove(rec.id)}
                  >
                    <TrashIcon className="w-5 h-5 inline-block" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataTable;
