# Favorite Movies & TV Shows

This is an interactive web application built with React.js for managing and displaying a list of your favorite movies and TV shows. The application allows users to browse a collection of movies, add new entries, and easily filter the list by title or minimum rating.

## Key Features

- **Movie Listing:** A clean and responsive list view of all movies, each with its title, description, and star rating.
- **Add New Movie:** A dedicated form to easily add a new movie to the list. The form includes fields for:
  - `Title`
  - `Description`
  - `Poster URL`
  - `Rating (0-5)`
- **Dynamic Filtering:** Users can filter the movie list in real-time by:
  - **Title:** Searching for a specific movie title.
  - **Minimum Rating:** Displaying only movies that meet or exceed a certain rating.
- **Detailed View:** Clicking on a movie card takes the user to a detailed view, which includes a full description and an embedded YouTube trailer.

## Project Structure

The project is structured with a modular component-based approach using React. This makes the code organized, reusable, and easy to maintain.
Here is the README.md file for your project. This version incorporates the file structure and visual elements shown in the provided images, and is structured to be clear and professional.
Suggested README.md file content
# Favorite Movies & TV Shows

This is an interactive web application built with React.js for managing and displaying a list of your favorite movies and TV shows. The application allows users to browse a collection of movies, add new entries, and easily filter the list by title or minimum rating.

## Screenshots

<p align="center">
  <img src="http://googleusercontent.com/file_content/4" alt="Movie List and Filtering" width="200">
  <img src="http://googleusercontent.com/file_content/1" alt="Add New Movie Form" width="200">
  <img src="http://googleusercontent.com/file_content/0" alt="Movie Details with Trailer" width="200">
</p>

## Key Features

- **Movie Listing:** A clean and responsive list view of all movies, each with its title, description, and star rating.
- **Add New Movie:** A dedicated form to easily add a new movie to the list. The form includes fields for:
  - `Title`
  - `Description`
  - `Poster URL`
  - `Rating (0-5)`
- **Dynamic Filtering:** Users can filter the movie list in real-time by:
  - **Title:** Searching for a specific movie title.
  - **Minimum Rating:** Displaying only movies that meet or exceed a certain rating.
- **Detailed View:** Clicking on a movie card takes the user to a detailed view, which includes a full description and an embedded YouTube trailer.

## Project Structure

The project is structured with a modular component-based approach using React. This makes the code organized, reusable, and easy to maintain.


src/
├── App.css
├── App.js            # The main application component.
├── index.css
├── index.js          # The entry point of the application.
├── components/
│   ├── AddMovieForm.js   # Form component for adding new movies.
│   ├── Filter.js         # Component for handling search and rating filters.
│   ├── MovieCard.js      # Displays a single movie's information in the list.
│   ├── MovieDescription.js # Displays a detailed view of a single movie.
│   └── MovieList.js      # Manages and renders the list of MovieCard components.

## How to Run Locally

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Zakariaghoudi/movie-app.git]
    cd your-repository
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the application:**
    ```bash
    npm start
    ```

The application will now be running on `http://localhost:3000`.

## Technologies Used

-   **React.js**: For building the user interface.
-   **CSS**: For styling the application components.
-   **React Router**: To handle navigation between the movie list and detailed views (implied by the `Back to Home` button).

## Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


