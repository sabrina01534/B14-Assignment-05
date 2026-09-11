import React, { type Dispatch, type SetStateAction } from 'react';
import type { Icard } from '../../Type/CardType';
import { CiSquareRemove } from 'react-icons/ci';

interface IRemoveCard{
    cart:Icard
     selectCard:Icard[]
            setSelectCard:Dispatch<SetStateAction<Icard[]>>
}

const RemoveCard = ({selectCard,setSelectCard}:IRemoveCard) => {

    const handlRemoveButton=(cart:Icard)=>{
         
    }
    return (
        <div className='grid grid-cols-1 '>
            {selectCard.map((cart:Icard)=>{
             return(
                <div className='flex gap-2 justify-between'>
                    <div className='flex gap-2'>
                      <img src={cart.icon} alt="" />
                      <div>
                        <h2>{cart.title}</h2>
                        <p>{cart.type}</p>
                    </div>
                    </div>
                    <span className='cursor-pointer' onClick={()=>handlRemoveButton(cart)}><CiSquareRemove /></span>
                </div>
             )
            })}
             
        </div>
    );
};

export default RemoveCard;