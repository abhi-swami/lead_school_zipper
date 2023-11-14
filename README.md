<h1 align="center">Lead School Zipper</h1>

<h3 align="justify" width="80%">

The Zip Code Information App, built with React, is a dynamic application that empowers users to explore location details by entering a postal code. Utilizing the powerful https://api.zippopotam.us, this app ensures a seamless experience, transforming a simple postal code into a gateway for comprehensive location information. The app is engineered with user convenience in mind, integrating key features to provide a rich and error-resistant experience. [Assignment](https://docs.google.com/document/d/1CGynvbYCK1m-_nW4xD9R-972fLjobWtixKOBA0II5L0/edit?usp=sharing)

### Frontend Deployed URL 👉 [Click here](https://zipper-ten.vercel.app/)

</h3>

<h2 align="center">Technologies Used</h2>

<p align="center">
  <b>Frontend</b><br>
  <img src="https://img.shields.io/badge/react-%23323330.svg?style=for-the-badge&logo=react&logoColor=%23F7DF1E" alt="react">
   <img src="https://img.shields.io/badge/chakraui-%23323330.svg?style=for-the-badge&logo=chakra-ui&logoColor=%23F7DF1E" alt="react">
</p>

<p align="center">
  <b>Tools</b><br>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github">
  <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="vscode">
</p>

<p align="center">
  <b>Deployment</b><br>
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel">
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="netlify">
</p>

<h2 align="center">Features</h2>

1. **User-Friendly Interface:**
   - The application presents an intuitive interface with two components - one for entering postal codes and another for displaying location information.

2. **Effortless Data Entry:**
   - Users can input postal codes seamlessly through a dedicated form or input field.

3. **Dynamic Data Fetching:**
   - Upon submitting a postal code, the app initiates a GET request to the API, dynamically constructing the URL for fetching location information.

4. **Comprehensive Display:**
   - Fetched location information, including country, state, and place name, is displayed prominently for user reference.

5. **Error Handling:**
   - The application gracefully handles errors during API calls, ensuring a smooth user experience by displaying clear error messages.

6. **Loading Indicator:**
   - A visual loading indicator provides feedback to users during data fetching, indicating that information is being actively retrieved.

7. **Clear Information Option:**
   - A dedicated button or option allows users to easily clear displayed information, facilitating quick exploration of multiple locations.

8. **Stylish Design with TailwindCSS:**
   - The application is aesthetically pleasing and responsive, thanks to the styling implemented using TailwindCSS.

9. **Optional Redux Integration:**
   - Users have the option to implement Redux for advanced state management, enhancing scalability and maintainability.

**API Interaction:**

10. **Dynamic API URL:**
    - The API URL adapts dynamically based on the entered postal code, providing flexibility in data retrieval.

11. **GET Request Method:**
    - The application employs the GET request method for seamless interaction with the API.

12. **Sample Response Handling:**
    - The app processes and displays detailed location information received as a response from the API.


<h2 align="center">Project Structure:</h2>

1. **assets:**
   - Contains static assets such as background images (`background.jpg`) and the project logo (`logo.png`).

2. **components:**
   - **AllCards.jsx:**
     - Component responsible for rendering all cards in the application.
   - **CardComponent.jsx:**
     - Individual card component for displaying specific information.
   - **InputInfo.jsx:**
     - Component handling input fields and form for postal code submission.
   - **Loader.jsx:**
     - Component displaying a loading indicator during data fetching.
   - **LocationInfo.jsx:**
     - Component for displaying detailed location information.
   - **Navbar.jsx:**
     - Navigation bar component for easy navigation within the app.
   - **NotFound.jsx:**
     - Component to handle 404 errors or not-found scenarios.
   - **Pincode.jsx:**
     - Component for entering and submitting postal codes.
   - **ServerError.jsx:**
     - Component to handle and display server errors.

3. **Utils:**
   - **fetchWrapper.js:**
     - Utility function or module for wrapping and simplifying API fetch calls.
   - **randomNumbers.js:**
     - Utility function or module for generating random numbers, possibly used in the application.

4. **public:**
   - Contains static assets and the HTML template file (`index.html`) used as the entry point for the application.

5. **node_modules:**
   - Directory generated by npm to store project dependencies. Ignored in version control.

6. **build:**
   - Directory generated during the build process (using tools like Webpack) to store the production-ready code.

7. **config (Optional):**
   - Configuration files for tools and build processes. This directory is optional and may not be present in all projects.

8. **.gitignore:**
   - Specifies files and directories to be ignored by version control, such as `node_modules` and the `build` directory.

9. **README.md:**
   - Documentation providing an overview of the project, setup instructions, and usage guidelines.

10. **Other Configuration Files:**
    - Configuration files for tools used in the project, such as ESLint, Babel, etc. These files help define and manage project-specific configurations.

<h2 align="center">Getting Started</h2>

1. Clone the repository to your local machine.
2. Set up the backend API using Express and Mongoose (provide instructions if necessary).
3. Navigate to the project directory.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.

<h2 align="center">Contribution Guidelines</h2>

We welcome contributions to the lead school Zipper project. If you have ideas for new features or find any bugs, please open an issue in the repository. Pull requests are also encouraged.

<h2 align="center">Show Your Support</h2>

If you find this project interesting or useful, please consider giving it a ⭐️.

<h1 align="center">Happy Exploring!</h1>
