import { useState } from "react";

const SearchParams = () => {
  const ANIMALS = [" ", "Dog", "Cat", "Reptile", "Bird", "Other"];
  const BREEDS = [" ", "Labrador", "Yorkshire", "German"];
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            defaultValue={``}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            {ANIMALS.map((animal) => {
              return <option key={animal}>{animal}</option>;
            })}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            name="breed"
            value={breed}
            disabled={!animal || BREEDS.length === 0}
            placeholder="Select Breed"
            defaultValue={``}
            onChange={(e) => setBreed(e.target.value)}
          >
            {BREEDS.map((breed) => {
              return <option key={breed}>{breed}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
