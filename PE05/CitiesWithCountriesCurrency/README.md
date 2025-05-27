# Input

Users need to fill in two text fields in the `AddCountry` page, one to add a country’s name and another to add its currency. Using React’s `useState` hooks, we get the inputs through `TextInput` components. Before submission, the form makes sure that both fields are properly filled.

# Process

After the user clicks “Add Country,” a new object is made with a unique ID and the chosen name and currency. The country is conditionally added to the shared state (or parent component) by calling the `addCountry()` function. After the update, the `Countries` screen is given the new array and displays each country with the help of `map()`.

# Output

When there are saved countries, each one is listed in a scrollable format with its name and currency next to it. When there are no current countries, a fallback message appears saying, "No saved countries!" It guarantees both an easy to use and helpful interface within the app.

