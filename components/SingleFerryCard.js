import React from 'react'
// import Link from "next/link";
import OpenModal from './Modals/OpenModal';
import DetailsModal from './Modals/DetailsModal';
import { Button, Card } from 'antd';
import styles from "../styles/singleFerry.module.css"
// import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import store from '../store/store';
import SummaryModal from './Modals/SummaryModal';
import PaymentModal from './Modals/PaymentModal';


function SingleFerryCard({ ferry }) {

  // const router = useRouter();

  // const handleGoToHome = () => {
  //   router.push('/'); 
  // };

  

  function showModal() {
    
    store.setPassengerModal(true);
    store.addToCart(ferry);
   
  }

  return (
    <>
    <Card title="Ferries Today" >
      <div className={styles.productpage_start}>
        
        {ferry &&
          <div className={styles.product_page_con}>

            <div className={styles.product_image_con}>
              <div className={styles.image_holder}>
                <img src={ferry.image} alt="product_pic" className={styles.product_picture}></img>
              </div>
              <div className={styles.image_below_buttons}>

                <Button type="primary" onClick={showModal}>Book your Tickets</Button>
                <OpenModal ferry = {ferry}></OpenModal>

              </div>
            </div>

            <div className={styles.product_details_con}>
              <div className={styles.product_details_main}>
                <p className={styles.product_nav}>Home / Ferries / {ferry.id}</p>
                <p className={styles.product_title}>{ferry.title}</p>
                <p className={styles.product_cat}>Category : Luxuary Yatches</p> 
                <p className={styles.product_desc}>{ferry.description}</p>
                
                <p className={styles.product_price_para}><span className={styles.product_price}>Rupees : <span>{ferry.price}</span></span><span></span>/ <span className={styles.strike}>{ferry.price * 2}</span><span className={styles.off}>(50% off)</span></p>

                <p>Aminities provided</p>
                {
                  ferry.amentities && ferry.amentities.map((el,index)=>{
                    return <div key = {index}>
                      <li>{el}</li>
                    </div>
                  })
                }

                {
                  ferry.from ? 
                  <>
                  <p>From : {ferry.from} - To : {ferry.to}</p>
                  
                  </>
                  :

                  <p>Round : {ferry.round}</p>
                }               
              </div>
            </div>

          </div>}
      </div>
      
      <DetailsModal></DetailsModal>
      <SummaryModal></SummaryModal>
      <PaymentModal></PaymentModal>
    </Card>
    </>
  )
}

export default observer(SingleFerryCard);