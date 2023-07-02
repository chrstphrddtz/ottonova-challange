"use client";
import { useState } from "react";

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
    <div className="w-3/4">
      <h2 className="font-4xl font-semibold mb-12">Kontaktformular</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 grid-cols-2">
        {/* <div className="flex flex-row justify-between"> */}
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="firstName">Vorname*</label>
          <input
            className="p-2 text-base border border-solid border-black rounded focus: decoration-solid decoration-2"
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Christoph"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm" htmlFor="lastName">Nachname*</label>
          <input
            className="p-2 text-base border border-solid border-black rounded focus: decoration-solid decoration-2"
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Raddatz"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm" htmlFor="email">E-Mail Adresse*</label>
          <input
            className="p-2 text-base border border-solid border-black rounded focus: decoration-solid decoration-2"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            placeholder="hello@chrstphrddtz.com"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm" htmlFor="phoneNumber">Telefonnummer*</label>
          <input
            className="p-2 text-base border border-solid border-black rounded focus: decoration-solid decoration-2"
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="0123 4567 890"
            required
          />
        </div>

        <button
          type="submit"
          className="col-span-2 p-3 my-3 border-2 border-solid rounded-lg text-background-color bg-accent-color bg-var(--accentColor) text-xl font-semibold hover:decoration-solid hover:decoration-2"
        >
          Abschicken
        </button>
      </form>
    </div>
  );

  // return (
  //   <form onSubmit={handleSubmit} className="flex flex-col gap-2">
  //     <h2 className="font-4xl font-semibold">Kontaktformular</h2>
  //     <Stack className="flex flex-row gap-2">
  //       <TextField
  //         onChange={(e) => setFirstName(e.target.value)}
  //         label="Vorname"
  //         id="firstName"
  //         name="firstName"
  //         type="text"
  //         variant="outlined"
  //         size="small"
  //         required
  //       />

  //       <TextField
  //         onChange={(e) => setLastName(e.target.value)}
  //         label="Nachname"
  //         id="lastName"
  //         name="lastName"
  //         type="text"
  //         variant="outlined"
  //         size="small"
  //         required
  //       />
  //     </Stack>

  //     <TextField
  //       onChange={(e) => setEmail(e.target.value)}
  //       label="Email"
  //       id="email"
  //       name="email"
  //       type="email"
  //       variant="outlined"
  //       size="small"
  //       required
  //     />

  //     <TextField
  //       onChange={(e) => setPhoneNumber(e.target.value)}
  //       label="Telefon"
  //       id="phoneNumber"
  //       name="phoneNumber"
  //       type="tel"
  //       variant="outlined"
  //       size="small"
  //       required
  //     />

  //     <ToggleButtonGroup
  //       exclusive
  //       color="primary"
  //       value={gender}
  //       onChange={handleChange}
  //     >
  //       <ToggleButton value="male" onChange={(e) => setGender(e.target.value)}>
  //         Male
  //       </ToggleButton>
  //       <ToggleButton
  //         value="female"
  //         onChange={(e) => setGender(e.target.value)}
  //       >
  //         Female
  //       </ToggleButton>
  //     </ToggleButtonGroup>

  //     <Button
  //       type="submit"
  //       variant="outlined"
  //       size="large"
  //       className="w-100 m-auto text-var(--backgroundRGB) bg-var(--accentColor)"
  //     >
  //       Abschicken
  //     </Button>
  //   </form>
  // );
}
