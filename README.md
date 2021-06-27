# State

> "In information technology and computer science, a system is described as stateful if it is designed to remember preceding events or user interactions; the remembered information is called the state of the system."
>
> - [Wikipedia](<https://en.wikipedia.org/wiki/State_(computer_science)>)

## Contents

- [Getting Started](#getting-started)
- [Study Tips](#study-tips)
- [Learning Objectives](#learning-objectives)
- [About the Projects](#about-the-projects)
- [Suggested Study](#suggested-study)
- Break-Down
  - [Week 1](#week-1)
  - [Week 2](#week-2)
- [Class Recordings](#class-recordings)
- [Curriculum](https://home.hackyourfuture.be/curriculum) (external)
- [HYF Home](https://home.hackyourfuture.be/) (external)

---

## Getting Started

How to study the code in this repo.

<details>
<summary>expand/collapse</summary>
<br>

> You will need [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer to study this material
>
> Using a browser with good DevTools will make your life easier: [Chromium](http://www.chromium.org/getting-involved/download-chromium), [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Edge](https://www.microsoft.com/edge), [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
1. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/state.git` (SSH) (recommended)
   - `git clone https://github.com/HackYourFutureBelgium/state.git` (HTTPS)
   - `gh repo clone HackYourFutureBelgium/state` (GH CLI)
1. `cd` into the repository
   - `cd state`
1. Run the `study` command from your CLI
   - `study`
1. The material will open in your default browser, you're good to go!

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should take care of it ; )

</details>
<br>

[TOP](#state)

---

## Study Tips

- Don't rush, understand! Programming is hard.
  - The examples and exercises will still be there to study later.
  - It's better to fail tests slowly and learn from your mistakes than to pass tests quickly and not understand why.
- Don't skip the examples! Understanding and experimenting with working code is a very effective way to learn programming.
- Practice [Pair Programming](https://study.hackyourfuture.be/collaborating/pair-programming): two people, one computer./

Not all assignments are created equal. These 3 emoji's will help you figure out how to spend your study time as effectively as possible.

- 🥚 `:egg:` - these assignments are required, they cover the base skills you'll need to move on.
- 🐣 `:hatching_chick:` - do your best to start these exercises. you don't need to finish or master them (yet) but getting the main idea will be helpful in coming weeks
- 🐥 `:hatched_chick:` - Have you finished all the 🥚's and started all the 🐣's? push yourself with these challenges!

[TOP](#state)

---

## Learning Objectives

<details>
<summary>expand/collapse</summary>
<br>

### Vocabulary

_State_, _Log_ and _Render_ are not words that come from JS or Web Development. They are general programming concepts. Any software that stores data has _state_. Any software that keeps track of user interactions for debugging uses _logging_. Any software with a user interface _renders_ data for the user.

- **State**
  - Information that is useful for the User of the program
  - One can use any data structure or data type to store this information (objects/arrays/numbers/...)
- **Log**
  - It is like a diary/journal. A person logs an activity, a program logs an action/location/variables etc.
  - Note that developers can also decide to log the _state_ of the program.
  - Also note the name of console.log() function is purposeful! It prints(logs) on the console.
  - It is also possible to print(log) to a file instead of console, which is a more common practice.
  - Want to see file logging in real life?
    1. open this repo with `study`
    2. watch the console output in your terminal
    3. those are server logs! a record of every [request and response](https://www.youtube.com/watch?v=DrI2lUXL1no) sent by the `study-lenses`
- **Render**
  - The term comes from the Computer Graphics.
  - Rendering simply means drawing something on the computer screen.
  - Rendering can also mean making something visual or preparing a component for your data.

### Programming Skills

- Data-first development
  - Understanding applications as Data + User Interactions
  - Developing from the "inside" out: planning the data & logic of your app without a user interface
- Defining _State_
  - Determining what data is important for a user
  - Choosing the correct JS data structure for you state
  - Separating important data from local variables
- Logging
  - Capture and store a log of all user interactions & state changes
  - Use this log to reconstruct user actions and debug your projects
- Dynamically update the DOM to represent the current state
  - Render data into DOM elements
  - Re-render portions of the DOM for a reactive experience

### Project Planning

- Using a _backlog_ to set priorities
- Writing _acceptance criteria_ to describe user stories
- Creating a user-story dependency chart to plan your development schedule
- Breaking user stories into code-able tasks

</details>
<br>

[TOP](#state)

---

## About the Projects

In the previous module you learned to decompose & plan projects, organize your code, and use HTML/CSS/JS to implement simple websites that process user input. That's nice but it misses the big picture.

Enter: **State**. This is a fancy programming term to talk about the data stored by your web pages. Nearly every app you use has state -> message histories, images, profile details, weather reports, ... you name it! Data is the core of any application. Just like you learned to write tests to describe your functions and show that they do what they should.

A good way to understand applications is to think of their _data_ and the _interactions_ a user can have with that data. You will explore the connection between state, UI and UX by learning to write **Components**. Components are functions that return parts of your UI by rendering _state_ into something the user can see and interact with.

In this module's projects you will want to focus on the data in your web page, how users can interact with it, how it changes over time, and how it is rendered to the UI.

[TOP](#state)

---

## Suggested Study

Helpful links, examples and exercises.

<details>
<summary>expand/collapse</summary>
<br>

### Coding

- [What is state and why should we care about it?](https://dev.to/codeartistryio/what-is-state-and-why-should-we-care-about-it-4o95)
- Code in this Repo
  - 🥚 [function-roles](./function-roles): Learn about **components**, functions that _render_ data into DOM elements
  - 🥚 [stepped](./stepped) (examples): single-file projects that have been built one step at a time
  - 🥚 [refactors](./refactors) (examples): study refactored code from a single JS file to separated JS projects
  - 🐣 [separated](./separated) (examples): projects to study that are separated into many folders and files.
  - 🐣 [rendering-data](./rendering-data) (exercises): write functions that turn JS data into DOM elements, practice inspecting elements in the DOM and debugger to check your work.
  - 🐥 [testing-components](./testing-components) (exercises): learn how to read and pass tests for component functions(tests in this directory must be run in Node.js, they will not work in the browser)
- More Practice
  - [javascript-toy\_\_dom-exercises](https://github.com/omahacodeschool/javascript-toy__dom-exercises)
  - [practice-and-learn-the-dom](https://github.com/tutsplus/practice-javascript-and-learn-the-dom)
  - [Learn DOM Rendering](https://github.com/oliverjam/learn-dom-rendering)
  - [Learn Form Validation](https://github.com/oliverjam/learn-form-validation)
- Working with the DOM
  - [Traversy DOM Crash Course](https://www.youtube.com/watch?v=0ik6X4DJKCc) - it's long, no need to finish it before Sunday
  - [JS Dom Tutorials: Accessing The DOM](https://dom-tutorials.appspot.com/static/index.html)
  - [DOM Tree (js.info)](https://javascript.info/dom-nodes)
  - [Walking the DOM (js.info)](https://javascript.info/dom-navigation)
  - [getElement & querySelector (js.info)](https://javascript.info/searching-elements-dom)
- DOM Elements: Attributes vs. Properties
  - [javascript.info](https://javascript.info/dom-attributes-and-properties)
  - [FullstackTraning](https://blog.fullstacktraining.com/html-attributes-vs-dom-properties/) (article)
  - [WebTunings](https://www.youtube.com/watch?v=9DWKjn969lM) (video)
  - StackOverflow: [the difference](https://stackoverflow.com/questions/6003819/what-is-the-difference-between-properties-and-attributes-in-html), [when to use which](https://stackoverflow.com/questions/3919291/when-to-use-setattribute-vs-attribute-in-javascript)
- Nodes vs. Elements
  - [Web Tunings](https://www.youtube.com/watch?v=FrX1bzWc8O4)
  - [StackOverflow](https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object)
- [What is Logging?](https://www.bmc.com/blogs/monitoring-logging-tracing/)

### Project Scoping

- What is project scope, and how to plan it
  - [be SMART](https://www.fool.com/the-blueprint/project-scope/)
  - [6 steps](https://www.potential.com/articles/project-scope/)
  - [cio.com](https://www.cio.com/article/3542776/what-is-project-scope-defining-and-outlining-project-success.html)
  - [clickup.com](https://clickup.com/blog/project-scope/)
- [What about Project Scope Management?](https://www.youtube.com/watch?v=cXAL56knUpE)
- [Requirements Gathering](https://www.brighthubpm.com/agile/123103-assembling-a-toolbox-for-agile-requirements/)
- [Scope Creep](https://duckduckgo.com/?q=scope+creep&atb=v214-1&ia=web)
- [Scope Statement Statement](https://duckduckgo.com/?q=project+scope+statement&atb=v214-1&ia=web)

</details>
<br>

[TOP](#state)

---

## Week 1

- Learn to plan applications around your data
- Learn to render your application's data into a user interface

<details>
<summary>expand/collapse</summary>
<br>

### Before Class

- [What is state and why should we care about it?](https://dev.to/codeartistryio/what-is-state-and-why-should-we-care-about-it-4o95)
- [stepped](./stepped): take a look through these incremental example projects

### During Class

#### Before Break

_All Together_:

- What is State? Why is it important?
  - Applications are data + user interactions
  - User stories tell how a user can interact with the data
- [./function-roles](./function-roles)
  - Components _render_ state for the user
  - What is a component function?
  - How can they be tested?

_In Small Groups_:

- Study the [separated](./separated) examples together:
  - What can a user do with this program?
  - What is the program's data?
  - How does each user interaction use state?
  - Do the logs help understand the program?

#### After Break

Planning with State and Components:

1. User stories
   - What can a user do with your application?
2. Program data
   - What data do you need for these use cases?
3. Wireframe
   - How is the data represented in the UI?
4. Component Tree
   - What are the relationships between components, which components are used inside other components?
   - _Presentational Components_: Components that display data but don't do anything (no event listeners). In a todo list, this might be the component that shows a checkbox or the text.
   - _Container Components_: Components for layout and interactivity. In a todo list, this might be a component that contains all the _presentational_ list items. This component will have layout styling and a bubbling event listener.
5. Build and test the components (outside of the main app!)
   - Start by developing the components at the bottom of the tree
   - Work your way up.

### Project

> after class

Continue working on the project your group began last module. This week you should:

- refactor all of your data into a single `state` object
- refactor your app to include at least one _component_

</details>
<br>

[TOP](#state)

---

## Week 2

<details>
<summary>expand/collapse</summary>
<br>

### Prep Work

> before class

### During Class

#### Before Break

#### After Break

### After Class

> after class

</details>
<br>

[TOP](#state)

---

## Class Recordings

Screen recordings of class. Coaches, when sending your PR's with links please ...

- Add a link to your video in the correct module's section
- Indicate which class you were teaching
- Which week it was
- Give your name
- and a helpful description

---

### Classes 9 & 10

[Unmesh](https://github.com/unmeshvrije), [Sali](https://github.com/Sali-Almurshidi), [Ismaila](https://github.com/auloin), [Louis](https://github.com/Mamboleoo)

- Week 1
  1. [State & Logging](https://vimeo.com/448445380)
  2. [Object vs. State](https://vimeo.com/448849518)
  3. [Integrating State](https://vimeo.com/448849847)
- Week 2
  1. [Project Planning & Isolate Rendering Data pt. 1](https://vimeo.com/451212160)
  2. [Isolate Rendering Data pt. 2 & Elements vs. Nodes](https://vimeo.com/451212701)
  3. [Integrate Rendering Data](https://vimeo.com/451213025)
  4. [Listener vs. Handler & Quiz Refactor pt. 1](https://vimeo.com/451213285)
  5. [Quiz Refactor pt. 2](https://vimeo.com/451213479)
  6. [Quiz Refactor pt. 3](https://vimeo.com/451213762)

### class-11-12

[Unmesh](https://github.com/unmeshvrije), [Thibault](https://github.com/ThibaultLesuisse)

- Week 1:
  - [State, Logging and Rendering](https://vimeo.com/493708942)
  - [JS Quiz Project](https://vimeo.com/493709184)
- Week 2:
  - [Part 1](https://vimeo.com/495147137)
  - [Part 2](https://vimeo.com/495162820/a3a9aab641)

### class-13-14

[Shao]()

- Week 1: [State & Components](https://vimeo.com/566258456)

[TOP](#state)
