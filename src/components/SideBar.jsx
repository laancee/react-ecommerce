// src/components/Sidebar.jsx
const Sidebar = () => {
  return (
    <aside className="bg-light p-3">
      <h5>Categories</h5>
      <ul className="list-group">
        <li className="list-group-item">Electronics</li>
        <li className="list-group-item">Clothing</li>
        <li className="list-group-item">Books</li>
        <li className="list-group-item">Accessories</li>
      </ul>
    </aside>
  );
};

export default Sidebar;