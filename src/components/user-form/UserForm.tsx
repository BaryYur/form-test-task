import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useCreateUserMutation } from "../../redux/usersApi";
import { addUser } from "../../redux/usersSlice";

import {
  Button,
  CircularProgress,
  FormControl,
  TextField,
  Typography
} from "@mui/material";

import * as Elements from "./Elements";

import toast from "react-hot-toast";

export const UserForm = () => {
  const dispatch = useDispatch();
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const addingUser = async () => {
    try {
      const response = await createUser({
        name: userName,
        lastName: userLastName,
        email: userEmail,
      }).unwrap();

      dispatch(addUser(response));

      toast.success("User successfully added");

      setUserName("");
      setUserLastName("");
      setUserEmail("");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  const addUserHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (userName === "" || userLastName === "" || userEmail === "") {
      toast("Some fields are empty");

      return;
    }

    await addingUser();
  }

  return (
    <Elements.Form onSubmit={addUserHandler}>
      <Typography fontSize="20px" fontWeight="bold" textAlign="center">Create user</Typography>
      <FormControl>
        <TextField
          value={userName}
          label="Your name"
          variant="outlined"
          onChange={(event) => setUserName(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <TextField
          value={userLastName}
          label="Your last name"
          variant="outlined"
          onChange={(event) => setUserLastName(event.target.value)}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="email"
          value={userEmail}
          label="Your email"
          variant="outlined"
          onChange={(event) => setUserEmail(event.target.value)}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        style={{ height: "42px", textTransform: "capitalize", fontWeight: "600", fontSize: "16px" }}
      >
        {isLoading ? <CircularProgress size={28} /> : <span>Submit</span>}
      </Button>
    </Elements.Form>
  );
}