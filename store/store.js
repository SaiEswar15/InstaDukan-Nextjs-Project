import { observable, action } from 'mobx';

const store = observable({

    cartData: [],
    userData: [],
    passengerModal: false,
    passengerDetailsModal: false,
    summaryModal: false,
    paymentModal: false,
    



    setPassengerModal: action(function (el) {

        store.passengerModal = el;
    }),
    setpassengerDetailsModal: action(function (el) {
        store.passengerDetailsModal = el;
    }),
    setSummaryOpenModal: action(function (el) {
        console.log("enterd", el, "element")

        store.summaryModal = el;
    }),
    setPaymentModal: action(function (el) {
        store.paymentModal = el;
    }),



    addToCart: action(function (el) {
        // console.log(el, "object enetered")
        this.cartData = el;
    }),
    addToUserData: action(function (el) {
        // console.log(el, "object enetered")
        this.userData.push(el);
    }),
    emptyCart: action(function () {
        // console.log(el, "object enetered")
        this.cartData = "";
    }),
    emptyUserData: action(function () {
        // console.log(el, "object enetered")
        this.userData = [];
    }),
    



});



export default store;