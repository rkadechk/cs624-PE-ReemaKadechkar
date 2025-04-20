Input
A TextInput field appears within the user interface for users to enter a favorite course (e.g., CS 624) when desired. The entered data gets stored in the LikedCourse state through useState hook provided by React. The application shows a personalized text when users provide their text input.

Process
CoreComponents defines its functionality using arrow functions to implement React Native core elements that include View, Text, ScrollView, Image, TextInput, and StyleSheet. The application code first declares three empty static lists containing core and depth of study and capstone courses. The program uses the lists for data mapping which produces text views that display all courses dynamically. The user's liked course will be shown through conditional rendering methods only after they provide an input.

Output
The app enables users to read through a list of MSCS program courses that are grouped into Core with 24 credits and Depth of Study with 6 credits and Capstone containing 3 credits. The application includes both an image element with added user input that brings together visual components for improved interactivity.