// =====================================================
// COMPONENT: AddTaskForm
// PURPOSE: Lets the user type and add a new task.
// This is a controlled input, meaning React controls
// the value using state.
// =====================================================

'use client';

import { useState } from 'react';

export default function AddTaskForm({ onAddTask }) {
  // This state tracks what the user is typing
  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // prevents page refresh

    if (title.trim() === '') return; // no empty tasks

    onAddTask(title); // send task up to parent
    setTitle(''); // clear input after submit
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 rounded-lg bg-slate-800 px-3 py-2 text-white"
      />

      <button className="rounded-lg bg-blue-600 px-4 py-2 text-white">
        Add
      </button>
    </form>
  );
}