[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=23318892)
# Goal
Create a simple Castro & Chambers Fan Site using the useState() hook

1. Run npm i vite in your terminal
2. Start your app
Run npm run dev and open the link
3. Import useState from React
At the top of your file, import useState so you can create and manage state
Reference yesterday’s code along
4. Create state for Mr. Castro’s likes
Create castroLikes and setCastroLikes with a starting value of 5
5. Create state for Mr. Chambers’ dislikes
Create chambersDislikes and setChambersDislikes with a starting value of 10
6. Create state for dark/light mode
Create darkMode and setDarkMode with a starting value of false
7. Increase Castro likes
Add an onClick so castroLikes increases by 1 when clicked
8. Display Castro likes
Show castroLikes on the screen using { }
9. Increase Chambers dislikes
Add an onClick so chambersDislikes increases by 1 when clicked
10. Display Chambers dislikes
Show chambersDislikes on the screen using {}
11. Reset Castro likes
Set castroLikes back to 0 when the reset button is clicked
12. Reset Chambers dislikes
Set chambersDislikes back to 0 in the same button
13. Toggle screen mode
Add an onClick that switches darkMode between true and false, use this code:
onClick={() => setDarkMode(!darkMode)}
14. Display current mode
Show "Dark Mode" or "Light Mode" depending on darkMode, use this code:
{darkMode ? "Dark Mode" : "Light Mode"}


