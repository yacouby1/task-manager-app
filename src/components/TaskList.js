// =====================================================
// COMPONENT: TaskList
// PURPOSE: Displays all tasks by mapping over the tasks
// array and rendering a TaskCard for each one.
// =====================================================

import TaskCard from './TaskCard';

export default function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}