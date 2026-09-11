import type { Dispatch, SetStateAction } from "react";
import type { Icard } from "../../Type/CardType";
import RemoveCard from "./RemoveCard";


interface ISelectedPlayer{
      selectCard:Icard[]
        setSelectCard:Dispatch<SetStateAction<Icard[]>>
}

const SelectedCard = ({selectCard,setSelectCard}:ISelectedPlayer) => {

    if(selectCard.length===0){
        return  <p className='text-gray-500'>No technologies selected yet.</p>
    }
    return (
        <div className='col-span-3 border border-gray-100'>
        {selectCard.map((card:Icard ,ind:number)=>{
         return(
            <RemoveCard key={ind} selectCard={selectCard} setSelectCard={setSelectCard}/>
         )   
        })}
</div>>
    );
};

export default SelectedCard;