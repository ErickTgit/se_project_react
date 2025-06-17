import "../blocks/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img
          className="sidebar__avatar"
          src="src\assets\pfp.svg"
          alt="Defualt avatar"
        />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default Sidebar;
