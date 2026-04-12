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

I used AI throughout this project when I got stuck or didn’t understand certain parts of React. Below are the types of questions I asked and how AI helped me. I tried to understand the explanations instead of just copying code.

---

Prompt 1:
"I don’t really understand how to start the TaskBoard component. How do I even store tasks and what does useState look like?"

AI Response:
AI showed me:
```js
const [tasks, setTasks] = useState([]);
```
and explained that tasks stores the data and setTasks updates it. This helped me understand how React state works.

---

Prompt 2:
"My input box isn’t doing anything. How does it actually save what the user types?"

AI Response:
AI explained controlled inputs and gave:
```js
value={title}
onChange={(e) => setTitle(e.target.value)}
```
It explained that e.target.value is whatever the user types, which helped it click for me.

---

Prompt 3:
"I don’t understand how to send data from the form to the main component. How do components talk to each other?"

AI Response:
AI showed:
```js
<AddTaskForm onAddTask={handleAddTask} />
```
and inside the form:
```js
onAddTask(title);
```
This helped me understand props and how data flows between components.

---

Prompt 4:
"How do I show all the tasks on the screen? Do I use a loop?"

AI Response:
AI explained .map():
```js
tasks.map((task) => (
  <div>{task.title}</div>
))
```
and compared it to a loop, which made it easier to understand.

---

Prompt 5:
"My toggle button is either not working or changing everything. How do I only update one task?"

AI Response:
AI showed:
```js
tasks.map((task) =>
  task.id === id ? { ...task, done: !task.done } : task
)
```
and explained that it checks the id and only changes the matching task.

---

Prompt 6:
"I tried deleting a task but it deletes everything. How do I delete just one?"

AI Response:
AI explained .filter():
```js
tasks.filter((task) => task.id !== id)
```
and said it keeps everything except the one clicked.

---

Prompt 7:
"I don’t get how to make the All / Active / Done buttons. How does it know what to show?"

AI Response:
AI showed:
```js
const [filter, setFilter] = useState('all');
```
and filtering logic:
```js
if (filter === 'active') return !task.done;
if (filter === 'done') return task.done;
```

---

Prompt 8:
"My code wasn’t updating when I changed things. Why does React not update sometimes?"

AI Response:
AI explained that React needs a NEW array, not modifying the old one. That’s why we use map and filter instead of directly editing.

---

Prompt 9:
"I got really confused with the folder structure. Should components go inside src or app?"

AI Response:
AI explained components should go in:
src/components
and that app is mainly for pages. This helped fix my structure.

---

Prompt 10:
"I accidentally put my components in the wrong folder and everything broke. How do I fix the imports?"

AI Response:
AI showed how to fix imports like:
```js
import TaskBoard from '../components/TaskBoard';
```
and explained how relative paths work.

---

Prompt 11:
"I don’t understand how TaskBoard, TaskList, and TaskCard connect. Mine wasn’t showing anything."

AI Response:
AI explained passing props step by step:
TaskBoard → TaskList → TaskCard  
This helped me understand component structure.

---

Prompt 12:
"My toggle and delete buttons weren’t working together. What am I doing wrong?"

AI Response:
AI explained I needed separate functions (handleToggle and handleDelete) and pass both down as props.

---

Prompt 13:
"I’ve never uploaded a project to GitHub like this. How do I connect everything?"

AI Response:
AI walked me through:
```bash
git add .
git commit -m "message"
git push
```
and explained what each command does.

---

Overall, AI helped me understand React concepts like state, props, and array methods (map and filter). I made sure to understand the code instead of just copying it.