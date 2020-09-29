## Coding quiz

For this assignment, I created a quiz structure that houses 10 questions and answers inside an object array. 
The quiz works almost entirely off javascript, and runs with a timer in the background. 
The user asked for this acceptance criteria, which is all met in the app:

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
Extra features:
- The original example showed that when the user clicked an answer, the quiz would move onto the next question. To accomodate for accidental clicks, or mind changes
I have created a submit answer button that moves the quesiton forward. 
- Disabled the submit answer button at the start of each question until an answer has been selected. This helps prevent the user from accidentally re-submitting the previously selected answer.
- Added some bootstrap formatting


## Link to app

## Screenshots

Start menu
<img src = ".\start screen.jpg" alt = "Save high score screen">

Question deployed
<img src = ".\question prompt.jpg" alt = "Question deployed screen">

Save high score
<img src = ".\Save high score screen.jpg" alt = "Save high score screen">