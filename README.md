🚀 Password Generator

Personal description:

- Class exercise @ [Digital Career Institute](https://digitalcareerinstitute.org/courses/web-development-course)

- I've break down the assignment in single tasks.

- I've ask for help when I was stuck for too long.

- what was tricky: in the output example to understand that every third character has to be in Uppercase.

- I've learnt that there is an event called 'load'.

💻 Here the class assignment:

# Password Generator

Description:

- This app generates passwords.

- There should be a Generate Password button which the user can click to show a new password using all letters and different characters.

- By default, the password generated should use mixed cases (both lowercase and uppercase).

Create a password generator WebApp with the following instructions:

1. Use the constant "charset" in your function (move it there). It contains all characters to use.

```javascript
const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";
```

2. Your function should have 2 arguments:

   - length (Number) The length of the password
   - mixedCase (Boolean) Whether or not to use mixed cases (lowercase + uppercase)

3. If the second argument is true, use uppercase for every third character.
4. Use the function `getRandomInt()` to generate random numbers where you need them.
5. Register an onClick event for the button to generate a new password.
6. Update the generated password inside of the "output" element.
7. Generate the first password as soon as the page is loaded, using a default length of 20.

Examples for generated passwords: - 876FocMkcCv98teXc(Ov - %lfXcrLt-#ke3r6R5§-? - Nd1Z\$yRx

Bonus version:

1. Add an input field to define the length of the password.

2. Add a checkbox to define if the password should use mixed cases.

3. Generate a new password on change of the input elements.

4. **Optional:** Free free to use Bootstrap for styling.
