Input:
   Part 1: The goal is to enhance the Profile Card by adding user details (name, occupation, and profile description) using text styling techniques.
   Part 2: Using flexbox layout techniques, the goal is to restructure the Profile Card component into a gallery of 6 cards that can expand/collapse when clicked.
Process:
   Part 1:
      •	Enhanced the Profile Card by adding name, occupation, and description Text components with appropriate styling.
      •	Used View and Text components with nested styling to achieve the desired UI.
   Part 2:
      •	Reorganized the Profile Card into a reusable component.
      •	Created a gallery of 6 cards using flexDirection: 'row', flexWrap: 'wrap', and flex: 1 for dynamic sizing.
      •	Added onPress functionality to toggle between expanded and collapsed (thumbnail) views using useState.
Output:
   Part 1:
      •	A Profile Card with styled text displaying the user's name, occupation, and description.
   Part 2:
      •	A gallery of 6 Profile Cards in a grid layout (screenshots saved in PE04/Part2).
      •	Clicking a card expands it to show details, and clicking again collapses it to a thumbnail.
      •	Flexbox ensures proper alignment and responsiveness across screen sizes.

