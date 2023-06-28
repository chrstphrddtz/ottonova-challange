"use client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, Stack, FormLabel, FormHelperText } from "@mui/material";
import MuiPhoneNumber from "mui-phone-number";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-row gap-2">
      <h2 className="font-2xl">Kontaktformular</h2>
      <Stack className="flex flex-col gap-2">
        <TextField
          label="Vorname"
          id="firstName"
          name="firstName"
          type="text"
          variant="outlined"
          size="small"
          required
        />

        <TextField
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
        label="Email"
        id="email"
        name="email"
        type="email"
        variant="outlined"
        size="small"
        required
      />

      <MuiPhoneNumber
        defaultCountry={"de"}
        label="Telefon"
        id="phoneNumber"
        name="phoneNumber"
        variant="outlined"
        size="small"
        required
      />

      <Button variant="outlined" size="large" className="w-100 m-auto">
        Submit
      </Button>
    </form>
  );
}
