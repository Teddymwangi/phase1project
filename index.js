const carList = document.getElementById('carList');

// Fetch data from the JSON server
fetch('http://localhost:3000/cars')
    .then(response => response.json())
    .then(data => {
        // Iterate through the data and create a card for each car
        data.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';

            const carImage = document.createElement('img');
            carImage.className = 'car-image';
            carImage.src = car.image;
            carImage.alt = car.brand;

            const carDetails = document.createElement('div');
            carDetails.innerHTML = `<strong>Brand:</strong> ${car.brand}<br>
                                    <strong>Model:</strong> ${car.model}<br>
                                    <strong>Price:</strong> $${car.price}<br>
                                    <strong>Description:</strong> ${car.description}`;

            carCard.appendChild(carImage);
            carCard.appendChild(carDetails);

            carList.appendChild(carCard);
            // Sample JSON data (replace this with your actual JSON data)
        const carsData = {
            "cars": [
                // ... (insert JSON data here)
            ]
        };

        const searchInput = document.getElementById("searchInput");
        const carDetailsDiv = document.getElementById("carDetails");

        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredCars = carsData.cars.filter(car => {
                const brand = car.brand.toLowerCase();
                const model = car.model.toLowerCase();
                return brand.includes(searchTerm) || model.includes(searchTerm);
            });

            // Display filtered car details
            displayCarDetails(filteredCars);
        });

        function displayCarDetails(cars) {
            carDetailsDiv.innerHTML = "";
            cars.forEach(car => {
                const carDiv = document.createElement("div");
                carDiv.innerHTML = `
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Price: $${car.price}</p>
                    <p>Description: ${car.description}</p>
                    <img src="${car.image}" alt="${car.brand} ${car.model}" style="max-width: 200px;">
                `;
                carDetailsDiv.appendChild(carDiv);
            });
        }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
