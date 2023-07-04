"use client";
import { useState } from "react";

import MaleIcon from "./icons/Maleicon";
import FemaleIcon from "./icons/Femaleicon";

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

  function handleMaleClick() {
    const maleRightArm = document.getElementById("maleRightArm");
    maleRightArm.classList.add("animate-maleRightArm");

    const femaleRightArm = document.getElementById("femaleRightArm");
    femaleRightArm.classList.remove("animate-femaleRightArm");
  }

  function handleFemaleClick() {
    const femaleRightArm = document.getElementById("femaleRightArm");
    femaleRightArm.classList.add("animate-femaleRightArm");

    const maleRightArm = document.getElementById("maleRightArm");
    maleRightArm.classList.remove("animate-maleRightArm");
  }

  return (
    <div className="w-3/4">
      <h2 className="font-4xl font-semibold mb-12">Kontaktformular</h2>

      <form onSubmit={handleSubmit} className="grid gap-6 grid-cols-2">
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="firstName" aria-label="Vorname">
            Vorname*
          </label>
          <input
            className="p-2 text-base border border-solid border-[gray] rounded"
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Christoph"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm" htmlFor="lastName" aria-label="Nachname">
            Nachname*
          </label>
          <input
            className="p-2 text-base border border-solid border-[gray] rounded"
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Raddatz"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm" htmlFor="email" aria-label="Email Adresse">
            E-Mail Adresse*
          </label>
          <input
            className="p-2 text-base border border-solid border-[gray] rounded"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            placeholder="otto@nova.com"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            className="text-sm"
            htmlFor="phoneNumber"
            aria-label="Telefonnummer"
          >
            Telefonnummer*
          </label>
          <input
            className="p-2 text-base border border-solid border-[gray] rounded"
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="0123 4567 890"
            required
          />
        </div>

        <div
          onChange={(e) => setGender(e.target.value)}
          className="flex flex-col gap-3 justify-between"
        >
          <h3 className="text-sm">Geschlecht*</h3>
          <div>
            <div className="flex">
              <div>
                <input
                  className="hidden peer"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                />
                <label
                  htmlFor="male"
                  aria-label="Geschlecht männlich"
                  onClick={handleMaleClick}
                  className="w-[60px] h-14 flex content-around justify-center p-3 border border-solid border-[gray] rounded-l-lg text-accent-color bg-background-color cursor-pointer hover:drop-shadow-lg hover:bg-accent-color hover:text-background-color peer-checked:bg-accent-color peer-checked:text-background-color"
                >
                  <MaleIcon />
                </label>
              </div>

              <div>
                <input
                  className="hidden peer"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                />
                <label
                  htmlFor="female"
                  aria-label="Geschlecht weiblich"
                  onClick={handleFemaleClick}
                  className="w-[60px] h-14 flex content-around justify-center p-3 border-t border-r border-b border-[gray] rounded-r-lg text-accent-color bg-background-color cursor-pointer hover:drop-shadow-lg hover:bg-accent-color hover:text-background-color peer-checked:bg-accent-color peer-checked:text-background-color"
                >
                  <FemaleIcon />
                </label>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="col-span-2 p-3 my-3 rounded-lg text-background-color bg-accent-color text-xl font-semibold hover:drop-shadow-lg"
        >
          Abschicken
        </button>
      </form>
    </div>
  );
}
