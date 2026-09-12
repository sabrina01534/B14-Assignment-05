// import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Icard } from '../../Type/CardType';
// import { FaStar } from 'react-icons/fa';
import NewCard from './NewCard';

import { CiSquareRemove } from 'react-icons/ci';


interface IAvaialablecard{
   card:Icard[];
        selectCard:Icard[]
        setSelectCard:Dispatch<SetStateAction<Icard[]>>
   handleSelectCard: (card: Icard) => void;
}


const AvailableCard = ({card,handleSelectCard ,selectCard ,setSelectCard}:IAvaialablecard) => {
    

const handlRemoveButton=(cart:Icard)=>{
    
    const restCard=selectCard.filter(card=>cart.title !=card.title)

    setSelectCard(restCard)
}
    return (

        <div className='grid grid-cols-12 gap-2'>
            <div className=' col-span-9'>
             <div className='grid grid-cols-3 gap-4'>
                 {card.map((cart:Icard,ind:number)=>{
                   
                return(
                   <NewCard key={ind} cart={cart} handleSelectCard={handleSelectCard} selectCard={selectCard}/>
                    

                )
              })}
             </div>
            </div>
            <div className='col-span-3 border border-gray-100'>
  <div>
    <h1 className='text-2xl font-bold'>Your Stack</h1>
   {selectCard.length===0?
    <>
     <p className='text-gray-500'> No technologies selected yet.</p>
     <p className='border border-dashed border-gray-200 mt-10 rounded text-center p-5'>Your stack is empty. </p>
   
    </>:(
   <>
    <p>{selectCard.length} :Technologies selected</p>
   
   {selectCard.map((cart:Icard,ind:number)=>(
    <div key={ind} className='border border-gray-200 rounded-xl mt-4 ml-2 pl-3'>
    <div className='flex gap-2 text-center w-full'>
            
       <img className='text-center items-center mt-2 h-10 w-10' src={cart.icon} alt=""/>
    <div className='flex w-full items-center'>
        <div className='ml-1'>
            <p className='text-xl text-gray-500'>{cart.title}</p>
        <p className='text-gray-500'>{cart.type}</p>
        </div>
       
            <span className='cursor-pointer mr-4 ml-auto'><CiSquareRemove className='text-2xl' onClick={()=>handlRemoveButton(cart)}/></span>
       
    </div>
    </div>
    </div>

   ))}
    {selectCard.length>0 &&(
    <button onClick={()=>setSelectCard([])} className='mt-5 cursor-pointer btn bg-linear-to-r from-[#F97316] 
    to-[#EC4899] w-full text-white'>Remove All</button>
   )}
   
</>
)}
   
  </div>
{/* <NewCard selectCard={selectCard} setSelectCard={setSelectCard}/> */}
  {/* <RemoveCard/> */}
            </div>
        </div>
    );
};

export default AvailableCard;