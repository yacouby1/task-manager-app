'use client';

import { useEffect, useState } from 'react';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import TaskStats from './TaskStats';

export default function TaskBoard() {
  // This state stores all tasks
  // We keep it here because tasks change and multiple parts of the app need it
  const [tasks, setTasks] = useState([]);

  // This state stores which filter button is selected
  // because the visible task list changes based on the user's choice
  const [filter, setFilter] = useState('all');

  // This effect loads saved tasks from localStorage when the component first appears
  // so the user's tasks do not disappear after refreshing the browser
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // This effect saves the current tasks to localStorage every time tasks changes
  // so browser refresh keeps the most recent task list
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(title) {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      done: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleToggle(id) {
    // We use map to create a new array so React re-renders
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDelete(id) {
    // Filter returns a new array without the clicked task
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleClearCompleted() {
    // This keeps only tasks that are not done
    setTasks(tasks.filter((task) => !task.done));
  }

  // These counts are derived from the current tasks array,
  // so they do not need their own state
  const totalTasks = tasks.length;
  const activeTasks = tasks.filter((task) => !task.done).length;
  const completedTasks = tasks.filter((task) => task.done).length;

  // This is a derived value, not state, because it can be calculated
  // from the current tasks and selected filter on every render
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.done;
    if (filter === 'done') return task.done;
    return true;
  });

  return (
    <div className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="mb-4 text-2xl font-bold">Task Board</h2>

      <AddTaskForm onAddTask={handleAddTask} />

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter('all')}
          className="rounded bg-gray-600 px-3 py-1 text-sm text-white"
        >
          All
        </button>

        <button
          onClick={() => setFilter('active')}
          className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
        >
          Active
        </button>

        <button
          onClick={() => setFilter('done')}
          className="rounded bg-green-600 px-3 py-1 text-sm text-white"
        >
          Done
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks yet...</p>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}

      <TaskStats
        totalTasks={totalTasks}
        activeTasks={activeTasks}
        completedTasks={completedTasks}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
}