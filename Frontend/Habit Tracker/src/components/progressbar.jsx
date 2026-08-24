function ProgressBar({ completed = 0, total = 0 }) {
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body">
      <div className="progress-header">
        <h2 className="card-title">Today's progress</h2>
        <span className="font-bold text-primary">{progress}%</span>
      </div>

      <progress
        className="progress progress-success w-full"
        value={progress}
        max="100"
      ></progress>

      <p className="mt-2 text-sm text-gray-500">
        {completed} of {total} habits completed
      </p>
      </div>
    </div>
  );
}

export default ProgressBar;