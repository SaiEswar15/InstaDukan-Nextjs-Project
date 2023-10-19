import React from 'react'
import { Button, Modal } from 'antd';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';

function OpenModal({ferry}) {

    function showModal() {
        store.setIsModalOpen(true);
        store.addToCart(ferry);
    }

    const handleOk = () => {
        //summary should open
        store.setIsModalOpen(false);
        store.setSummaryOpenModal(true);
        
    };

    const handleCancel = () => {
        store.setIsModalOpen(false);
    };

    function addPassenger() {
        store.setIsModalOpen(false);
        store.setpassengerDetailsModel(true);
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>Book your Tickets</Button>

            <Modal
                title="Passenger Details"
                className='modal'
                open={store.isModalOpen}
                onOk={handleOk}
                okText="Book Tickets"
                onCancel={handleCancel}>

                <div className='con1'>
                    <Button type="primary" className='con1-button' onClick={addPassenger}>Add Passenger</Button>
                </div>
            </Modal>
        </>
    )
}

export default observer(OpenModal)