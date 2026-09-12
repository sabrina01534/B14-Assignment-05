
import type { Icard } from '../../Type/CardType';
import { FaStar } from 'react-icons/fa';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { toast } from 'react-toastify';


// const handleButton=(type:"selected"){
//     setButton(type)
// }

interface InewCardProps{
    cart:Icard;
    handleSelectCard:(card:Icard)=>void
}

const NewCard = ({cart,handleSelectCard}:InewCardProps) => {

    // const[isSelected,setIsSelected]=useState(false)

    const handleClickCard=()=>{
    toast.success("Techonology purchase!!")
handleSelectCard(cart)
    }
    return (
                        <div><div className="card card-dash bg-base-100">
         <div className="card-body border border-gray-100 rounded h-60">
         <div className='flex justify-between w-full items-center'>
          <div className='h-10 w-10'>
            <img src={cart.icon} alt="" />
          </div>
             {/* <p className='text-2xl'>{cart.icon}</p> */}
             <div>
              <p className='p-1 border-none rounded bg-green-100 text-green-500 text-center justify-center'>{cart.type}</p>
             </div>
         </div>
           <h2 className="card-title">{cart.title}</h2>
           <p>{cart.paragraph}</p>
           <div className='flex justify-between'>
               <p className='text-gray-500'>{cart.type}</p>
               <p  className='text-gray-500'>{cart.userExperience}</p>
          <p className='flex items-center gap-1'><FaStar className='text-yellow-400' />{cart.rating}</p>
           </div>
       
           <div className="card-actions">
             <button onClick={()=>handleClickCard(cart)} className="btn bg-gradient-to-r from-[#F97316] to-[#EC4899] w-full text-white">Buy Now</button>
           </div>
         </div>
       </div></div>
    );
};

export default NewCard;