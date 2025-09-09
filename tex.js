const cartHistory=()=>{
  let totalPrice=0;
// delation cart and remove carthistory
document.addEventListener("click", (e) => {
//  click target add to cart btn
   if(e.target.classList.contains('cartBtn')){
           
          const card= e.target.closest('.card');//target card dom traversing
        const cardTitle=card.querySelector('h2').innerText;
        const price=card.querySelector('.pricecart').innerText;
       console.log(price)
   
  const cartHistory=   document.getElementById('cart-history')

   const div=document.createElement('div');
   div.innerHTML=`<div class="cartItem w-12/12 px-3 py-2 my-3 bg-[#F0FDF4] flex justify-between items-center rounded-lg">
          <div>
            <h6 class="text-sm">${cardTitle}</h6>
           <p class="text-xs">৳${price}</p>
          </div>
           <button class="removeBtn text-xs text-gray-400"><i class="fa-solid fa-x"></i></button>
         </div>
         
         
         
         `
          cartHistory.appendChild(div);

           totalPrice=Number(totalPrice) + Number(price);
           console.log(totalPrice);
       
        
        let totalBox = document.getElementById("total-box");
          if(!totalBox){
          totalBox = document.createElement("p");
               totalBox.id = "total-box";
               
          }
       totalBox.classList.add('flex' ,'justify-between')
        totalBox.innerHTML=`Total <span>৳${totalPrice}</span>`
        
         cartHistory.appendChild(totalBox);
   }


     if(e.target.classList.contains('removeBtn')|| e.target.classList.contains('fa-x'))
     {
           const cartItem=e.target.closest('.cartItem');
          
             const itemPrice = Number(cartItem.querySelector("p.text-xs").innerText.replace('৳', ''))
             totalPrice=totalPrice-itemPrice;
             cartItem.remove();

             const totalBox=document.getElementById('total-box');

             if(totalBox){

                     totalBox.innerHTML=`Total <span>৳${totalPrice}</span>`
             }    
      }

});
}

cartHistory();
Sawon
