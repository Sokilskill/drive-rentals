# Drive Rentals

Drive Rentals is a web application that allows users to browse and book rental
cars. The application is designed for the convenience of users who are looking
for cars for temporary use.

![Home page](/public/readme.png)

## Key Features

- **Browse Car List:** Explore various cars presented in the application.

- **Detailed Information:** Get detailed information about each car, including
  technical specifications, rental conditions, and available accessories.

- **Rental Booking:** Place rental orders for cars directly from the
  application.

# Car Listings Filter

This filter allows for convenient selection of cars based on brand, hourly
price, and mileage in miles. You can also choose "All" to display the entire
list of this category.

## Features

- **Form State Persistence:** The form automatically saves entered data even
  when navigating to other pages and returning.

- **Convenient Filter Display:** For a better understanding of the applied
  filter.

- **Load More:** The "Load More" button adds new listings. If there is no more
  data on the server, the button is hidden.

## Usage

1. Choose the car brand, hourly price, and mileage.
2. Press the "Load More" button to add new listings.

## Technical Details

- **Frontend:** Implemented in React with the use of Redux for managing the
  application state.

- **Backend:** Car data and rental conditions are obtained from mockAPI.

## Installation and Running

1. Clone the repository:
   `git clone https://github.com/your-username/drive-rentals.git`
2. Navigate to the project directory: `cd drive-rentals`
3. Install dependencies: `npm install`
4. Run the application: `npm run dev`

## Help and Contribution

If you would like to contribute to the development of the application or have
any questions, please create an
[Issue](https://github.com/Sokilskill/drive-rentals/issues) or submit a
[Pull Request](https://github.com/Sokilskill/drive-rentals/pulls).
