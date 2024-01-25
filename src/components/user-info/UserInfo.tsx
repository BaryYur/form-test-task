import React from "react";

import {Box, Typography} from "@mui/material";

type UserInfoProps = {
  name: string;
  lastName: string;
  email: string;
}

export const UserInfo: React.FC<UserInfoProps> = ({
  name,
  lastName,
  email,
}) => {
  return (
    <>
      <Typography fontSize="20px" textAlign="center" fontWeight="bold">User information</Typography>
      <Box
        sx={{
          background: "white",
          borderRadius: "20px",
          padding: "15px",
          width: "300px",
          marginTop: "20px"
        }}
      >
        <div>
          <Typography fontWeight="bold">User name:</Typography>
          <Typography>{name} {lastName}</Typography>
        </div>
        <div style={{ marginTop: "15px" }}>
          <Typography fontWeight="bold">User email:</Typography>
          <Typography>{email}</Typography>
        </div>
      </Box>
    </>
  );
}