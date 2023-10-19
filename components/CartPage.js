import React from 'react'
import store from '../store/store'

function CartPage() {

    let data = store.cartData;
    const router = useRouter();

    const handleGoToHome = () => {
        router.push('/'); 
      };
    
  return (
    <div>
        <h1>Welcome to Cart Page</h1>
        
        <div>
            {data && data.map((el)=>{
                return <h1>{el.id}</h1>
            })}
        </div>
    </div>
  )
}

export default CartPage