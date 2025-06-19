import ItemCard from "./ItemCard";

const ClothingSection = ({
  weatherData,
  clothingItems,
  handleCardClick,
  showAll = false,
}) => {
  const clothesToDisplay = showAll
    ? clothingItems
    : clothingItems.filter((item) => item.weather === weatherData.type);
  return (
    <ul className="cards__list">
      {clothesToDisplay.map((item) => {
        return (
          <ItemCard key={item._id} item={item} onCardClick={handleCardClick} />
        );
      })}
    </ul>
  );
};

export default ClothingSection;
