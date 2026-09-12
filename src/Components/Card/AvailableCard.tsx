// import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Icard } from '../../Type/CardType';
// import { FaStar } from 'react-icons/fa';
import NewCard from './NewCard';

interface IAvaialablecard{
   card:Icard;
        selectCard:Icard[]
        setSelectCard:Dispatch<SetStateAction<Icard[]>>
   handleSelectCard:Icard[]
}


const AvailableCard = ({card,handleSelectCard ,selectCard ,setSelectCard}:IAvaialablecard) => {
    console.log(card, "from available")
    return (

        <div className='grid grid-cols-12 gap-2'>
            <div className='h-200 col-span-9'>
             <div className='grid grid-cols-3 gap-4'>
                 {card.map((cart:Icard,ind:number)=>{
                    // const Icon=cart.icon
                return(
                   <NewCard key={ind} cart={cart} handleSelectCard={handleSelectCard}/>
                    
//                     <div><div className="card card-dash bg-base-100">
//   <div className="card-body border border-gray-100 rounded h-60">
//   <div className='flex justify-between w-full items-center'>
//       <p className='text-2xl'>{Icon}</p>
//       <p className=' bnt border-none rounded bg-green-100 text-green-500 text-center justify-center'>{cart.type}</p>
//   </div>
//     <h2 className="card-title">{cart.title}</h2>
//     <p>{cart.paragraph}</p>
//     <div className='flex justify-between'>
//         <p className='text-gray-500'>{cart.type}</p>
//         <p  className='text-gray-500'>{cart.userExperience}</p>
//    <p className='flex items-center gap-1'><FaStar className='text-yellow-400' />{cart.rating}</p>
//     </div>

//     <div className="card-actions">
//       <button className="btn bg-black w-full text-white">Buy Now</button>
//     </div>
//   </div>
// </div></div>
                )
              })}
             </div>
            </div>
            <div className='col-span-3 border border-gray-100'>
<div>
    <h1 className='text-2xl font-bold'>Your Stack</h1>
   <p>Card:{selectCard.length}</p>
</div>
            </div>
        </div>
    );
};

export default AvailableCard;