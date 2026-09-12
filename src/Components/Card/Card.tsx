import { use, useState } from "react";
import type { Icard } from "../../Type/CardType";
import AvailableCard from "./AvailableCard";
// import SelectedCard from "./SelectedCard";


interface CardProps {
  
  cardPromise: Promise<Icard[]>;
}

const Card = ({ cardPromise }: CardProps) => {
  const card = use(cardPromise);
  const [selectCard, setSelectCard] = useState<Icard[]>([]);

  const handleSelectCard = (card: Icard): void => {
    const NewselectCard = [...selectCard, card];
    setSelectCard(NewselectCard);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h1 className="text-3xl font-bold mt-5">
          Explore the
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="text-gray-500 mb-6">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <AvailableCard
        card={card}
        handleSelectCard={handleSelectCard}
        selectCard={selectCard}
        setSelectCard={setSelectCard}
      />
      {/* <SelectedCard selectCard={selectCard} setSelectCard={setSelectCard} /> */}
    {/* <RemoveCard selectCard={selectCard} setSelectCard={setSelectCard}/> */}
    </div>
  );
};

export default Card;
