import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../lib/fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";
import AdoptedPetContext from "../context/AdoptedPetContext";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPets] = useContext(AdoptedPetContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal}-{pet.breed}-{pet.city}-{pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt{pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt{pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPets(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

const DetailsErrorBoundary = (props) => (
  <ErrorBoundary>
    <Details {...props} />
  </ErrorBoundary>
);

export default DetailsErrorBoundary;
