import React from 'react'
import { Button, Modal } from 'antd';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';

function OpenModal() {

    const handleOk = () => {
        //summary should open
        store.setPassengerModal(false);
        store.setSummaryOpenModal(true);
        
    };

    const handleCancel = () => {
        store.setPassengerModal(false);
    };

    function addPassenger() {
        store.setPassengerModal(false);
        store.setpassengerDetailsModal(true);
    }
    return (
        <>
            <Modal
                title="Passenger Details"
                className='modal'
                open={store.passengerModal}
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