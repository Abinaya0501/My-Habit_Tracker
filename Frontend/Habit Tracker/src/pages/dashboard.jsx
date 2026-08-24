import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import HabitForm from "../components/habitform";
import HabitCard from "../components/habitcard";
import ProgressBar from "../components/progressbar";
import { addHabit as createHabit, deleteHabit as removeHabit, getHabits, updateHabit } from "../services/habitApi";

const routine = [
  { name: "Learn Python", category: "Study", duration: "2 hours", schedule: "Morning" },
  { name: "HackerRank questions", category: "Study", duration: "45 minutes", schedule: "4:00 AM" },
  { name: "College work", category: "Work", duration: "1 hour 30 minutes", schedule: "Daily" },
  { name: "Aptitude practice", category: "Study", duration: "45 minutes", schedule: "Daily" },
  { name: "Communication and practice questions", category: "Personal", duration: "1 hour", schedule: "Morning" },
];

function Dashboard() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHabits() {
      try {
        const response = await getHabits();
        if (response.data.length) {
          setHabits(response.data);
        } else {
          const seeded = await Promise.all(routine.map((habit) => createHabit(habit)));
          setHabits(seeded.map((response) => response.data));
        }
      } catch {
        setError("Could not connect to the backend. Start the server on port 5000.");
      } finally {
        setLoading(false);
      }
    }
    loadHabits();
  }, []);

  const completed = habits.filter((habit) => habit.completed).length;

  async function addHabit(habit) {
    try {
      const response = await createHabit(habit);
      setHabits((current) => [...current, response.data]);
      setError("");
    } catch {
      setError("Could not save this habit.");
    }
  }

  async function toggleHabit(id) {
    const habit = habits.find((item) => item._id === id);
    if (!habit) return;
    try {
      const response = await updateHabit(id, { completed: !habit.completed });
      setHabits((current) => current.map((item) => item._id === id ? response.data : item));
    } catch {
      setError("Could not update this habit.");
    }
  }

  async function deleteHabit(id) {
    try {
      await removeHabit(id);
      setHabits((current) => current.filter((habit) => habit._id !== id));
    } catch {
      setError("Could not delete this habit.");
    }
  }

  return (
    <div className="app-container">
      <Navbar onAddClick={() => document.querySelector("input")?.focus()} />

      <main className="dashboard">
        <div className="dashboard-header">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Daily practice</p>
          <h1>Small actions. Real momentum.</h1>
          <p>Keep your best routines visible and make today count.</p>
        </div>

        <ProgressBar completed={completed} total={habits.length} />

        <HabitForm onAdd={addHabit} />

        {error && <div className="alert alert-error mt-6">{error}</div>}

        <section className="habit-section">
          <div className="habit-section-header">
            <h2>My Habits</h2>
          </div>

          <div className="habit-grid">
            {loading ? <span className="loading loading-spinner loading-lg" /> : habits.length === 0 ? <div className="empty-state">No habits yet. Add one above to get started.</div> : habits.map((habit) => (
              <HabitCard key={habit._id} habit={habit} onToggle={toggleHabit} onDelete={deleteHabit} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;