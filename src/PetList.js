
import React, { useState } from 'react';
import './PetList.css';

const fakeData = [
      { id: 1, name: 'Buddy', species: 'Dog', breed: 'Golden Retriever' },
    { id: 2, name: 'Whiskers', species: 'Cat', breed: 'Siamese' },
    { id: 3, name: 'Rocky', species: 'Dog', breed: 'German Shepherd' },
    { id: 4, name: 'Fluffy', species: 'Cat', breed: 'Maine Coon' },
    { id: 5, name: 'Max', species: 'Dog', breed: 'Labrador Retriever' },
    { id: 6, name: 'Mittens', species: 'Cat', breed: 'Persian' },
    { id: 7, name: 'Luna', species: 'Dog', breed: 'Husky' },
    { id: 8, name: 'Charlie', species: 'Parrot', breed: 'African Grey' },
    { id: 9, name: 'Simba', species: 'Lion', breed: 'African Lion' },
    { id: 10, name: 'Nemo', species: 'Fish', breed: 'Clownfish' },
];

const PetList = () => {
  const [petList, setPetList] = useState(fakeData);
  const [selectedPet, setSelectedPet] = useState(null);
  const [editPet, setEditPet] = useState({
    id: '',
    name: '',
    species: '',
    breed: '',
  });

  const handleEdit = (pet) => {
    setSelectedPet(pet);
    setEditPet({
      id: pet.id,
      name: pet.name,
      species: pet.species,
      breed: pet.breed,
    });
  };

  const handleSaveEdit = () => {
    setPetList((prevPetList) => {
      // Map over the previous pet list and update the edited pet's data
      return prevPetList.map((pet) => {
        if (pet.id === selectedPet.id) {
          return { ...pet, ...editPet };
        }
        return pet;
      });
    });
    setSelectedPet(null); // Clear the selected pet for editing
    setEditPet({ id: '', name: '', species: '', breed: '' }); // Reset the edit form
  };

  const handleDelete = (pet) => {
    setPetList((prevPetList) => {
      // Filter out the selected pet from the list
      return prevPetList.filter((item) => item.id !== pet.id);
    });
    setSelectedPet(null); // Clear the selected pet after deletion
  };

  return (
    <div className="pet-list-container">
      <h2>Pet List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {petList.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.id}</td>
              <td>
                {selectedPet === pet ? (
                  <input
                    value={editPet.name}
                    onChange={(e) => setEditPet({ ...editPet, name: e.target.value })}
                  />
                ) : (
                  pet.name
                )}
              </td>
              <td>
                {selectedPet === pet ? (
                  <input
                    value={editPet.species}
                    onChange={(e) => setEditPet({ ...editPet, species: e.target.value })}
                  />
                ) : (
                  pet.species
                )}
              </td>
              <td>
                {selectedPet === pet ? (
                  <input
                    value={editPet.breed}
                    onChange={(e) => setEditPet({ ...editPet, breed: e.target.value })}
                  />
                ) : (
                  pet.breed
                )}
              </td>
              <td>
                {selectedPet === pet ? (
                  <>
                    <button className="edit-button" onClick={handleSaveEdit}>
                      Save
                    </button>
                    <button className="delete-button" onClick={() => setSelectedPet(null)}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button className="edit-button" onClick={() => handleEdit(pet)}>
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => handleDelete(pet)}>
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PetList;
