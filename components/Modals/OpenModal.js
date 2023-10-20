import React, { useEffect } from 'react'
import { Button, Modal, Table } from 'antd';
import store from '../../store/store';
import { observer } from 'mobx-react-lite';

function OpenModal() {

    
    const userData = store.userData;
    

    const handleOk = () => {
        //summary should open
        store.setPassengerModal(false);
        store.setSummaryOpenModal(true);
        
    };

    useEffect(() => {
        if (store.passengerModal) {
            // The modal is open, you can perform any desired actions here.
        }
    }, [store.passengerModal]);

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          
        },
        {
          title: 'Age',
          dataIndex: 'age',
          
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          
        }
    ];

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
                // onOk={handleOk}
                // okText="Book Tickets"
                onCancel={handleCancel}
                footer = {null}>


                <Table columns={columns} dataSource={userData } />

                <div className='con1'>
                    <Button type="primary" className='con1-button' onClick={addPassenger}>Add Passenger</Button>
                </div>

                <div className='con2'>
                    <Button type="primary" className='con2-button' onClick={handleOk} disabled = {userData.length > 0 ? false : true}>Book Tickets</Button>
                </div>

            </Modal>
        </>
    )
}

export default observer(OpenModal)