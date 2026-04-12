# Task Manager App

This is a simple task manager built using React and Next.js.

## Features
- Add tasks
- Toggle tasks (mark complete/incomplete)
- Delete tasks
- Filter tasks (All, Active, Done)
- Clear completed tasks
- Task counter (Total, Active, Done)

## Technologies Used
- React (useState)
- Next.js
- Tailwind CSS

## How to Run
1. Install dependencies:
npm install

2. Run the development server:
npm run dev

3. Open in browser:
http://localhost:3000

## AI Usage Details

I used AI heavily throughout this project because I was confused at multiple points, especially with React state, props, folder structure, and using the terminal for setup. I asked a lot of small, basic questions and worked through the project step by step instead of trying to do everything at once.

---

**Prompt 1:**  
"I don’t understand what to type in the terminal to even start this project. What am I supposed to run first?"

**AI Response:**  
AI explained how to use `npx create-next-app` and guided me through each setup question step by step.

---

**Prompt 2:**  
"It’s asking me questions like TypeScript and Tailwind and I don’t know what to pick"

**AI Response:**  
AI told me exactly which options to choose (No TypeScript, Yes Tailwind, Yes App Router) to keep things simple.

---

**Prompt 3:**  
"I don’t get why my localhost page isn’t working"

**AI Response:**  
AI explained I needed to run `npm run dev` and keep the terminal open.

---

**Prompt 4:**  
"Can I close the terminal or will it break everything?"

**AI Response:**  
AI explained that closing the terminal stops the app, but I can restart it with `npm run dev`.

---

**Prompt 5:**  
"I don’t understand what page.js even does"

**AI Response:**  
AI explained that `page.js` is the main page and is where components get rendered.

---

**Prompt 6:**  
"I don’t get where I’m supposed to put components, I keep messing up the folders"

**AI Response:**  
AI showed that components belong in `src/components` and not inside `app`.

---

**Prompt 7:**  
"I accidentally made the components folder inside app and everything broke"

**AI Response:**  
AI walked me step by step to delete it and recreate it in the correct place.

---

**Prompt 8:**  
"I don’t understand why my import isn’t working"

**AI Response:**  
AI explained relative paths like:
```js
import TaskBoard from '../components/TaskBoard';
```

---

**Prompt 9:**  
"I don’t understand useState at all"

**AI Response:**  
AI explained it simply and showed:
```js
const [tasks, setTasks] = useState([]);
```

---

**Prompt 10:**  
"Why do we need useState instead of a normal variable?"

**AI Response:**  
AI explained that React only updates the UI when state changes.

---

**Prompt 11:**  
"I don’t understand how to add a task from the input"

**AI Response:**  
AI helped me create a controlled input and pass the value using props.

---

**Prompt 12:**  
"What does e.target.value even mean?"

**AI Response:**  
AI explained that it represents what the user is typing in the input.

---

**Prompt 13:**  
"I don’t get how the form sends data to TaskBoard"

**AI Response:**  
AI showed how to pass a function as a prop and call it inside the form.

---

**Prompt 14:**  
"My tasks aren’t showing up after I add them"

**AI Response:**  
AI explained I needed to update state using:
```js
setTasks([...tasks, newTask]);
```

---

**Prompt 15:**  
"Why do we use ...tasks?"

**AI Response:**  
AI explained it copies the array so React detects a change.

---

**Prompt 16:**  
"I don’t understand how to display multiple tasks"

**AI Response:**  
AI showed how to use `.map()` to render each task.

---

**Prompt 17:**  
"I don’t get map at all"

**AI Response:**  
AI explained it like a loop that returns a new list.

---

**Prompt 18:**  
"My toggle button changes everything instead of one task"

**AI Response:**  
AI showed:
```js
tasks.map((task) =>
  task.id === id ? { ...task, done: !task.done } : task
)
```

---

**Prompt 19:**  
"I don’t understand that line at all"

**AI Response:**  
AI broke it down into: check id → copy object → flip done.

---

**Prompt 20:**  
"What does ...task mean?"

**AI Response:**  
AI explained it copies all properties of the object.

---

**Prompt 21:**  
"My delete button deletes all tasks"

**AI Response:**  
AI explained `.filter()`:
```js
tasks.filter((task) => task.id !== id)
```

---

**Prompt 22:**  
"I don’t understand filter"

**AI Response:**  
AI explained it removes the matching item and keeps the rest.

---

**Prompt 23:**  
"How do I make the text cross out when done?"

**AI Response:**  
AI showed conditional class:
```js
task.done ? 'line-through' : ''
```

---

**Prompt 24:**  
"I don’t understand props at all"

**AI Response:**  
AI explained props as passing data/functions between components.

---

**Prompt 25:**  
"I don’t get why we have TaskList and TaskCard"

**AI Response:**  
AI explained separation of concerns and reusable components.

---

**Prompt 26:**  
"I don’t understand how these components connect"

**AI Response:**  
AI explained the flow:
TaskBoard → TaskList → TaskCard

---

**Prompt 27:**  
"I don’t understand how the filter buttons work"

**AI Response:**  
AI showed:
```js
const [filter, setFilter] = useState('all');
```

---

**Prompt 28:**  
"How does it know what tasks to show?"

**AI Response:**  
AI explained filtering logic with conditions.

---

**Prompt 29:**  
"My filtered tasks aren’t updating"

**AI Response:**  
AI explained derived values and re-rendering.

---

**Prompt 30:**  
"I don’t understand why React isn’t updating sometimes"

**AI Response:**  
AI explained that React needs a new array instead of mutating the old one.

---

**Prompt 31:**  
"How do I save tasks after refresh?"

**AI Response:**  
AI showed localStorage with useEffect.

---

**Prompt 32:**  
"I don’t understand useEffect"

**AI Response:**  
AI explained it runs code when dependencies change.

---

**Prompt 33:**  
"Why do we use JSON.stringify?"

**AI Response:**  
AI explained it converts objects into strings for storage.

---

**Prompt 34:**  
"Why do we use JSON.parse?"

**AI Response:**  
AI explained it converts stored strings back into objects.

---

**Prompt 35:**  
"I don’t understand how to push this to GitHub"

**AI Response:**  
AI walked me through:
```bash
git add .
git commit -m "message"
git push
```

---

**Prompt 36:**  
"I pasted all commands at once and it broke"

**AI Response:**  
AI explained to run commands one at a time and use Ctrl+C if stuck.

---

**Prompt 37:**  
"My GitHub repo is empty even after I created it"

**AI Response:**  
AI explained I needed to run `git push` to upload files.

---

## Summary

Overall, I was very confused during this project, especially with React concepts like state, props, and how components connect. I also struggled with the folder structure and using the terminal correctly for setup and GitHub. AI helped guide me step by step, breaking things down into simple explanations and showing example code when I didn’t understand. I used AI more like a tutor than a generator, asking many follow-up questions until things made sense. The most confusing parts for me were updating state correctly using map and filter, passing data between components, and understanding how localStorage works with useEffect. By the end, I understood how all the pieces connect and was able to build the full application.