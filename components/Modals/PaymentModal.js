import React from 'react'
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import { Modal, Result } from 'antd';
import { useRouter } from 'next/router';

function PaymentModal() {

    const router = useRouter();

    const handleGoToHome = () => {
        store.setPaymentModal(false);
        store.emptyUserData();
        store.emptyCart();
        router.push('/');

    };


    const handleCancel = () => {
        store.setPaymentModal(false);
    };
    return (
        <>
            <Modal
                title="Booking Status"
                className='modal'
                open={store.paymentModal}
                onOk={handleGoToHome}
                okText="Go to Home"
                // footer={null}
                onCancel={handleCancel}>

                <Result
                    status="success"
                    title="Tickets booked Successfully"
                    subTitle="Booking number: 2017182818828182881 you tickets will be generated in 2-3 days"
                    
                />

            </Modal>
        </>
    )
}

export default observer(PaymentModal);