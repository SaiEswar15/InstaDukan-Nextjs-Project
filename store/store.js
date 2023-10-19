import { observable, action } from 'mobx';

const store = observable({

    cartData : [],
    count : 0,
    isModalOpen : false,
    passengerDetailsModel : false,
    summaryData : [],
    summaryModalOpen : false,
    


    increment : action(function()
    {
        store.count++;
    }),

    setIsModalOpen : action(function (el) {
        store.isModalOpen = el;
    }),

    setpassengerDetailsModel : action(function (el) {
        store.passengerDetailsModel = el;
    }),
    
    addToCart: action(function (el) {
        console.log(el, "object enetered")
        this.cartData.push(el);
    }),

    addToSummary :action(function (el) {
        console.log(el, "object enetered")
        this.summaryData.push(el);
    }),
    setSummaryOpenModal : action(function (el) {
        store.summaryModalOpen = el;
    })

});

export default store;