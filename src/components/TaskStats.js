// =====================================================
// COMPONENT: TaskStats
// PURPOSE: Shows task counts and gives the user one
// button to remove all completed tasks.
// =====================================================

export default function TaskStats({
  totalTasks,
  activeTasks,
  completedTasks,
  onClearCompleted,
}) {
  return (
    <div className="mt-4 rounded-lg bg-slate-800 p-4">
      <div className="mb-3 flex flex-wrap gap-3 text-sm text-white">
        <span>Total: {totalTasks}</span>
        <span>Active: {activeTasks}</span>
        <span>Done: {completedTasks}</span>
      </div>

      <button
        onClick={onClearCompleted}
        className="rounded bg-red-700 px-3 py-2 text-sm text-white"
      >
        Clear Completed
      </button>
    </div>
  );
}