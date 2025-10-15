# TODO for Plantsy Core Deliverables

- [x] Edit PlantPage.js: Add useState for plants (array) and searchTerm (string), useEffect to fetch plants from http://localhost:6001/plants on mount, pass props to children.
- [x] Edit PlantList.js: Receive plants and searchTerm as props, filter plants by name (case-insensitive), map to PlantCard components.
- [x] Edit PlantCard.js: Receive plant as prop, display name, image, price, add inStock toggle button, update parent plants on toggle.
- [x] Edit NewPlantForm.js: Add useState for form data, handle form submit to POST /plants, update plants state on success.
- [x] Edit Search.js: Receive setSearchTerm as prop, update searchTerm on input change.
- [x] Test the app: Run npm run server and npm start, verify all features work.
