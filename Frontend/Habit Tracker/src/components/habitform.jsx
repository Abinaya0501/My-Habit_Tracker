import { useState } from "react";

function HabitForm({ onAdd }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Health");

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim()) return;
    onAdd({ name: name.trim(), category });
    setName("");
  }

  return (
    <div className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Keep the rhythm</p>
        <h2 className="card-title text-2xl">Add a habit</h2>
      </div>

      <form className="grid gap-3 md:grid-cols-[1fr_180px_auto]" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. Read for 20 minutes"
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <select className="select select-bordered w-full" value={category} onChange={(event) => setCategory(event.target.value)}>
          <option>Health</option>
          <option>Study</option>
          <option>Fitness</option>
          <option>Personal</option>
          <option>Work</option>
        </select>

        <button type="submit" className="btn btn-primary">Add habit</button>
      </form>
      </div>
    </div>
  );
}

export default HabitForm;