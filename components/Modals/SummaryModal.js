import React from 'react'
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import { Modal } from 'antd';

function SummaryModal() {

    const ferry = store.cartData;
    const userData = store.userData;

    const handleOk = () => {
        
        store.setSummaryOpenModal(false);
        store.setPaymentModal(true);
    };

    const handleCancel = () => {
        
        store.setSummaryOpenModal(false);
    };
    return (
        <Modal
            title="Summary Details"
            className='summary-modal'
            open={store.summaryModal}
            onOk={handleOk}
            okText="Confirm Booking"
            onCancel={handleCancel}>

            <div>
                <img src = {ferry.image}/>
                <p>{ferry.title}</p>
                <p>Ticket Price : {ferry.price}</p>
                <p>No of Passengers : {userData.length}</p>
                <p>Grand Total : {ferry.price * userData.length}</p>

                <p>Passenger List</p>
                {userData.map((el,index)=>{
                    return <div key = {index}>
                        <p>{el.name}</p>
                        <p>{el.age}</p>
                        <p>{el.gender}</p>
                    </div>
                })}

            </div>
        </Modal>
        
    )
}

export default observer(SummaryModal)