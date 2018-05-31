![The G2i Logo](screenshots/g2i-web-150px.png "The G2i logo")

# Trivia Game Coding Challenge

## Overview

Your challenge is to create a simple, 10 question, true or false, trivia app in the technology you are applying to work in. While the problem you are working on is simple, you should treat this like a real world application. This is a chance to show off your abilities and impress.

**The application code will be reviewed and scored on these key areas with many subset areas for each:**

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of industry best practices

## Goals

Implement the screens based off the wireframes and api below using advanced techniques and industry best practices for your platform. Note that the wireframes may not be complete, so use your best judgment for UI/UX implementation. **Do not use a boilerplate like React Boilerplate or Ignite for this challenge.** We want to see how you structure your project and what tooling you use from scratch. Create react app or create react native app are fine to use.

## Specifications

Data:

The api url is: https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean

Sample returned json:

```javascript
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },…]}
```

### Intro / Home Screen:

![The Intro screen for the app](screenshots/Intro.png "The Intro screen for the app")

- Static Text
- BEGIN button navigates to the Quiz screen and starts the Quiz

### Quiz Screen:

![The Quiz screen for the app](screenshots/Quiz.png "The Quiz screen for the app")

- The headline is from question category
- The card element contains the current question
- The next question should appear after the current question is answered True or False
- After all questions have been answered, navigate to the Results Screen

### Results screen:

![The Results screen for the app](screenshots/Score.png "The Results screen for the app")

- The Score shows correct and total
- Displays a list of the questions and whether the answer was correct or not
- PLAY AGAIN starts over and navigates to the Home Screen
----
© 2018 G2i Inc.  All rights reserved.  Certain information contained herein is derived from information which is protected by copyrights held by G2i Inc. This code challenge, including any parts of it, cannot be duplicated, distributed, copied, modified, used to make a derivative work or used in any way without the prior written consent of G2i Inc.
