const Sidebar = ({ setCategory }) => {
  return (
    <div className="list-group shadow-sm">
      <button
        className="list-group-item fw-bold"
        disabled
      >
        Categories
      </button>

      <button
        className="list-group-item list-group-item-action"
        onClick={() => setCategory("All")}
      >
        All
      </button>

      <button
        className="list-group-item list-group-item-action"
        onClick={() => setCategory("Electronics")}
      >
        Electronics
      </button>

      <button
        className="list-group-item list-group-item-action"
        onClick={() => setCategory("Accessories")}
      >
        Accessories
      </button>
    </div>
  );
};

export default Sidebar;
