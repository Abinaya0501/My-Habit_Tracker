function Navbar({ onAddClick }) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-6">
      <div className="flex-1">
        <a className="text-xl font-bold">
          Habit Tracker
        </a>
      </div>

      <div className="flex-none">
        <button className="btn btn-primary btn-sm" onClick={onAddClick}>
          Add habit
        </button>
      </div>
    </div>
  );
}

export default Navbar;