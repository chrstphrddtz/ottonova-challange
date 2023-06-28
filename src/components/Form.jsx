"use client";
import { useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControl,
  Stack,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(
      "Form Information: ",
      firstName,
      lastName,
      email,
      phoneNumber,
      gender
    );

    event.target.reset();
  }

  function handleChange(event, newGender) {
    setGender(newGender);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <h2 className="font-4xl font-semibold">Kontaktformular</h2>
      <Stack className="flex flex-row gap-2">
        <TextField
          onChange={(e) => setFirstName(e.target.value)}
          label="Vorname"
          id="firstName"
          name="firstName"
          type="text"
          variant="outlined"
          size="small"
          required
        />

        <TextField
          onChange={(e) => setLastName(e.target.value)}
          label="Nachname"
          id="lastName"
          name="lastName"
          type="text"
          variant="outlined"
          size="small"
          required
        />
      </Stack>

      <TextField
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        id="email"
        name="email"
        type="email"
        variant="outlined"
        size="small"
        required
      />

      <TextField
        onChange={(e) => setPhoneNumber(e.target.value)}
        label="Telefon"
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        variant="outlined"
        size="small"
        required
      />

      {/* <Switch id="gender" name="gender" label="Geschlecht" required /> */}

      <ToggleButtonGroup
        exclusive
        color="primary"
        value={gender}
        onChange={handleChange}
      >
        <ToggleButton value="male" onChange={(e) => setGender(e.target.value)}>
          Male
        </ToggleButton>
        <ToggleButton
          value="female"
          onChange={(e) => setGender(e.target.value)}
        >
          Female
        </ToggleButton>
      </ToggleButtonGroup>

      <Button
        type="submit"
        variant="outlined"
        size="large"
        className="w-100 m-auto"
      >
        Abschicken
      </Button>
    </form>
  );
}
