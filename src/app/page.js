import TaskBoard from '../components/TaskBoard';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-800">
      <TaskBoard />
    </main>
  );
}