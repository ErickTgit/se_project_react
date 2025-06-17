import Sidebar from "./Sidebar";
import ClothingSection from "./ClothingSection";
import "../blocks/Profile.css";

export const Profile = ({
  weatherData,
  clothingItems,
  handleCardClick,
  handleAddClick,
}) => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profile__section-container">
        <div className="profile__title-container">
          <p className="profile__section-title">Your Items</p>
          <button
            type="button"
            onClick={handleAddClick}
            className="profile__section-button"
          >
            + Add New
          </button>
        </div>
        <ClothingSection
          weatherData={weatherData}
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
          showAll={true}
        />
      </div>
    </div>
  );
};
