// =====================================================
// COMPONENT: TaskCard
// PURPOSE: Displays one task and lets the user toggle it
// or delete it.
// =====================================================

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="mb-2 flex items-center justify-between rounded-lg bg-slate-800 px-3 py-2">
      
      {/* This text changes style when the task is completed */}
      <span
        className={`${
          task.done ? 'line-through text-gray-400' : 'text-white'
        }`}
      >
        {task.title}
      </span>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onToggle(task.id)}
          className="rounded bg-green-600 px-2 py-1 text-sm text-white"
        >
          Toggle
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="rounded bg-red-600 px-2 py-1 text-sm text-white"
        >
          Delete
        </button>
      </div>

    </div>
  );
}