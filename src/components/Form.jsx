"use client";
import { use, useState } from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, Stack } from "@mui/material";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert("Daten erfolgreich übermittelt");

    console.log(firstName, lastName, email, phoneNumber);

    event.target.reset();
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
