import React from 'react'
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import { Modal } from 'antd';

function PaymentModal() {


    

    const handleCancel = () => {
        
        store.setPaymentModal(false);
    };
    return (
        <>
            <Modal
                title="Summary Details"
                className='modal'
                open={store.paymentModal}
                // onOk={handleOk}
                // okText="Confirm Booking"
                footer={null}
                onCancel={handleCancel}>

                
            </Modal>
        </>
    )
}

export default observer(PaymentModal);