import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationPage = ({ count, page, handlechange }) => {
  return (
    <Stack>
      <Typography color={"white"}>{page}</Typography>
      <Pagination
        count={count}
        onChange={handlechange}
        variant="outlined"
        color="secondary"
      />
    </Stack>
  );
};

export default PaginationPage;
