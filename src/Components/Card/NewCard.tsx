
import console from 'console';
import type { Icard } from '../../Type/CardType';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

// const handleButton=(type:"selected"){
//     setButton(type)
// }


const NewCard = ({cart}:{cart:Icard}) => {

    const[isSelected,setIsSelected]=useState(false)

    const handleSelectCard=()=>{
setIsSelected(true)
    }
    return (
                        <div><div className="card card-dash bg-base-100">
         <div className="card-body border border-gray-100 rounded h-60">
         <div className='flex justify-between w-full items-center'>
             <p className='text-2xl'>{cart.icon}</p>
             <p className=' bnt border-none rounded bg-green-100 text-green-500 text-center justify-center'>{cart.type}</p>
         </div>
           <h2 className="card-title">{cart.title}</h2>
           <p>{cart.paragraph}</p>
           <div className='flex justify-between'>
               <p className='text-gray-500'>{cart.type}</p>
               <p  className='text-gray-500'>{cart.userExperience}</p>
          <p className='flex items-center gap-1'><FaStar className='text-yellow-400' />{cart.rating}</p>
           </div>
       
           <div className="card-actions">
             <button onClick={()=>handleSelectCard()} className="btn bg-black w-full text-white">{isSelected===true?"Selected":"Choose Card"}</button>
           </div>
         </div>
       </div></div>
    );
};

export default NewCard;