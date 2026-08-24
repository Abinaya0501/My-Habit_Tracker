function HabitCard({ habit, onToggle, onDelete }) {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">

        <div className="flex justify-between items-start">
          <div>
            <h2 className="card-title">
              {habit.name}
            </h2>

            <div className="badge badge-primary mt-2">
              {habit.category}
            </div>
          </div>

          <span className="badge badge-warning badge-outline">{habit.streak} day streak</span>
        </div>

        <p className="text-gray-500">
          {habit.completed ? "Completed today" : "Ready when you are"}
        </p>

        <div className="mt-2 flex flex-wrap gap-2 text-sm text-base-content/70">
          {habit.duration && <span className="badge badge-ghost">{habit.duration}</span>}
          {habit.schedule && <span className="badge badge-ghost">{habit.schedule}</span>}
        </div>

        <div className="card-actions justify-end mt-3">
          <button className={`btn btn-sm ${habit.completed ? "btn-success" : "btn-outline btn-success"}`} onClick={() => onToggle(habit._id)}>
            {habit.completed ? "Undo" : "Complete"}
          </button>

          <button className="btn btn-ghost btn-sm text-error" onClick={() => onDelete(habit._id)}>
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default HabitCard;