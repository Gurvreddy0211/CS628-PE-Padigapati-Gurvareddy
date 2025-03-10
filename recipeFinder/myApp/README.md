Input: The users can enter recipe data such as name, ingredients, and cooking process through an interactive web-based interface
implemented with React. The app provides forms to create new recipes and edit existing recipes. The users can navigate the
detailed information of a chosen recipe by just clicking the name of the recipe in the list.

Process: The backend, which is coded in 'Node.js and Express', manages user input through CRUD recipes API calls. Recipe
information is stored in 'MongoDB Atlas'. The backend is called by the frontend through 'fetch API or Axios', and 'React Router'
has been used for routing between pages.

Output: The user dynamically updates the list of recipes on the home page, reflecting changes immediately when a user adds,
edits, or deletes a recipe. Feedback is provided in the form of confirmation messages or updated views.