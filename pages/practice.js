import React from 'react'
import { observer } from 'mobx-react-lite';
import store from '../store/store';


import { Card, Flex, Table, Modal} from 'antd';



function SummaryModal() {


    const imgStyle = {
        display: 'block',
        width: '40%',
        objectFit: 'contain'
    };

    const heading = {
        fontWeight : 'bold',
        color : 'blue',
        
    }

    const ferry = store.cartDataPractice;

    const userData = store.userDataPractice;

    const handleOk = () => {

        // store.setSummaryOpenModal(false);
        // store.setPaymentModal(true);
    };

    const handleCancel = () => {

        // store.setSummaryOpenModal(false);
    };

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
          
        },
        {
            title: 'Travel Date',
            dataIndex: 'travelDate',
            
        }
    ];

    return (
        <Modal
            title="Summary Details"
            className='summary-modal'
            open={store.practiceModal}
            onOk={handleOk}
            okText="Confirm Booking"
            onCancel={handleCancel}>

            {ferry && userData ?
                <div>
                    <Card hoverable  bodyStyle={{ padding: 0, overflow: 'hidden' }}>
                        <Flex justify="space-between">
                            <img
                                alt="avatar"
                                src={ferry.image}
                                style={imgStyle}
                            />
                            <Flex vertical align="flex-start" justify="space-between" style={{ padding: 32 }}>
                                <h3>
                                    {ferry.title}
                                </h3>
                                <p><span style = {heading}>Ticket Price : </span> <span>{ferry.price}</span></p>
                                <p><span style = {heading}>No of Passengers : </span> <span> {userData.length}</span></p>
                                <p><span style = {heading}>Grand Total : </span> <span>{ferry.price * userData.length}</span></p>
                                <p><span style = {heading}>From - To : </span> <span>{ferry.from} - {ferry.to}</span></p>
                                
                            </Flex>
                        </Flex>
                    </Card>
                    

                    <h3>Passenger List</h3>
                    

                    <Table columns={columns} dataSource={userData} />

                </div> : null}
        </Modal>

    )
}

export default observer(SummaryModal)