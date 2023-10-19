import React from 'react'
import { observer } from 'mobx-react-lite';

function SummaryModal() {

    const handleOk = () => {
        //summary should open
        // store.setSummaryOpenModal(true);
        // store.setIsModalOpen(false);
    };

    const handleCancel = () => {
        // store.setIsModalOpen(false);
    };
    return (
        <>
            {/* <Button type="primary" onClick={showModal}>Book your Tickets</Button> */}

            <Modal
                title="Summary Details"
                className='modal'
                open={store.summaryModalOpen}
                onOk={handleOk}
                okText="Proceed To Pay"
                onCancel={handleCancel}>

                
            </Modal>
        </>
    )
}

export default observer(SummaryModal)