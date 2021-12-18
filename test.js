const printer_helper = require('./printer')
// const moment = require('moment')
console.log(printer_helper)


let receipt = {
    "additionalchargearray": [
        {
            "Id": 6,
            "Amount": 0,
            "ChargeType": 2,
            "ChargeValue": 20,
            "Description": "Delivery Charge",
            "TaxGroupId": 8
        },
        {
            "Id": 2,
            "Amount": 0,
            "ChargeType": 2,
            "ChargeValue": 10,
            "Description": "Packaging Charge",
            "TaxGroupId": 8
        },
        {
            "Id": 0,
            "Amount": 0,
            "ChargeType": 0,
            "ChargeValue": 0,
            "TaxGroupId": 0
        }
    ],
    "istaxinclusive": false,
    "statusbtns": [

    ],
    "alltransactions": [

    ],
    "appversion": "1.0.35",
    "app": "exe",
    "datastatus": "edit_order",
    "DiscType": 1,
    "OrderTypeId": 3,
    "OrderName": "Pick Up",
    "BillAmount": 889,
    "BillStatusId": 1,
    "OrderStatusId": 5,
    "DiscAmount": null,
    "DiscPercent": 0,
    "OrderDiscount": 0,
    "OrderNo": 23,
    "PaidAmount": 889,
    "PreviousStatusId": 0,
    "RefundAmount": 0,
    "SourceId": 1,
    "Tax1": 0,
    "Tax2": 0,
    "Tax3": 0,
    "Items": [
        {
            "DiscType": 2,
            "isorderitem": true,
            "showname": "CHOCO TRUFFLE Blast/1+1 kg",
            "Id": 0,
            "CategoryId": 560,
            "ComplementryQty": 0,
            "MinimumQty": 0,
            "DiscAmount": 0,
            "DiscPercent": 20,
            "Extra": 0,
            "FreeQtyPercentage": 0,
            "ItemDiscount": 222.2,
            "KitchenUserId": null,
            "KOTGroupId": 12,
            "KOTId": 0,
            "Message": "",
            "Name": "CHOCO TRUFFLE Blast",
            "Product": "CHOCO TRUFFLE Blast",
            "Note": "",
            "OptionJson": "",
            "OptionGroup": [
                {
                    "Id": 79,
                    "Name": "Cake Charges ",
                    "OptionGroupType": 2,
                    "SortOrder": -1,
                    "Option": [
                        {
                            "Id": 319,
                            "DeliveryPrice": 300,
                            "Name": "Photo Cake ",
                            "Price": 300,
                            "selected": false,
                            "TakeawayPrice": 300,
                            "IsSingleQtyOption": true,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 320,
                            "DeliveryPrice": 100,
                            "Name": "Eggless ",
                            "Price": 100,
                            "selected": false,
                            "TakeawayPrice": 100,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 321,
                            "DeliveryPrice": 150,
                            "Name": "Shape ",
                            "Price": 150,
                            "selected": false,
                            "TakeawayPrice": 150,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 322,
                            "DeliveryPrice": 150,
                            "Name": "Drawing ",
                            "Price": 150,
                            "selected": false,
                            "TakeawayPrice": 150,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 323,
                            "DeliveryPrice": 150,
                            "Name": "Fruit Dec ",
                            "Price": 150,
                            "selected": false,
                            "TakeawayPrice": 150,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 324,
                            "DeliveryPrice": 150,
                            "Name": "Choco Dec ",
                            "Price": 150,
                            "selected": false,
                            "TakeawayPrice": 150,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        }
                    ]
                },
                {
                    "Id": 70,
                    "Name": "Cake-1111",
                    "OptionGroupType": 1,
                    "SortOrder": -1,
                    "selected": true,
                    "Option": [
                        {
                            "Id": 273,
                            "DeliveryPrice": 555,
                            "Name": "0.5 Kg",
                            "Price": 555,
                            "selected": false,
                            "TakeawayPrice": 555,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 274,
                            "DeliveryPrice": 1111,
                            "Name": "1+1 kg",
                            "Price": 1111,
                            "selected": true,
                            "TakeawayPrice": 1111,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 296,
                            "DeliveryPrice": 1111,
                            "Name": "Kg",
                            "Price": 1111,
                            "selected": false,
                            "TakeawayPrice": 1111,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        }
                    ]
                },
                {
                    "Id": 84,
                    "Name": "Eggless ",
                    "OptionGroupType": 2,
                    "SortOrder": -1,
                    "Option": [
                        {
                            "Id": 381,
                            "DeliveryPrice": 50,
                            "Name": "Rs:50",
                            "Price": 50,
                            "selected": false,
                            "TakeawayPrice": 50,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        },
                        {
                            "Id": 411,
                            "DeliveryPrice": 100,
                            "Name": "Rs:100",
                            "Price": 100,
                            "selected": false,
                            "TakeawayPrice": 100,
                            "IsSingleQtyOption": false,
                            "orderitemrefid": "420211214/23:27:3384_274"
                        }
                    ]
                }
            ],
            "OrderDiscount": 0,
            "OrderId": 0,
            "ProductId": 3384,
            "ProductKey": "3384_274",
            "Price": 0,
            "Quantity": 1,
            "StatusId": 0,
            "Tax1": 0,
            "Tax2": 0,
            "Tax3": 0,
            "TaxGroupId": 6,
            "TaxItemDiscount": 0,
            "TaxOrderDiscount": 0,
            "TotalAmount": 888.8,
            "IsTaxInclusive": false,
            "TaxAmount1": 0,
            "TaxAmount2": 0,
            "TaxAmount3": 0,
            "TaxAmount": 0,
            "baseprice": 1111,
            "kotquantity": 1
        }
    ],
    "KOTS": [
        {
            "KOTStatusId": 0,
            "Instruction": "",
            "KOTNo": 27,
            "OrderId": null,
            "Items": [
                {
                    "DiscType": 2,
                    "isorderitem": true,
                    "showname": "CHOCO TRUFFLE Blast/1+1 kg",
                    "Id": 0,
                    "CategoryId": 560,
                    "ComplementryQty": 0,
                    "MinimumQty": 0,
                    "DiscAmount": 0,
                    "DiscPercent": 20,
                    "Extra": 0,
                    "FreeQtyPercentage": 0,
                    "ItemDiscount": 222.2,
                    "KitchenUserId": null,
                    "KOTGroupId": 12,
                    "KOTId": 0,
                    "Message": "",
                    "Name": "CHOCO TRUFFLE Blast",
                    "Product": "CHOCO TRUFFLE Blast",
                    "Note": "",
                    "OptionJson": "",
                    "OptionGroup": [
                        {
                            "Id": 79,
                            "Name": "Cake Charges ",
                            "OptionGroupType": 2,
                            "SortOrder": -1,
                            "Option": [
                                {
                                    "Id": 319,
                                    "DeliveryPrice": 300,
                                    "Name": "Photo Cake ",
                                    "Price": 300,
                                    "selected": false,
                                    "TakeawayPrice": 300,
                                    "IsSingleQtyOption": true,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 320,
                                    "DeliveryPrice": 100,
                                    "Name": "Eggless ",
                                    "Price": 100,
                                    "selected": false,
                                    "TakeawayPrice": 100,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 321,
                                    "DeliveryPrice": 150,
                                    "Name": "Shape ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 322,
                                    "DeliveryPrice": 150,
                                    "Name": "Drawing ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 323,
                                    "DeliveryPrice": 150,
                                    "Name": "Fruit Dec ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 324,
                                    "DeliveryPrice": 150,
                                    "Name": "Choco Dec ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                }
                            ]
                        },
                        {
                            "Id": 70,
                            "Name": "Cake-1111",
                            "OptionGroupType": 1,
                            "SortOrder": -1,
                            "selected": true,
                            "Option": [
                                {
                                    "Id": 273,
                                    "DeliveryPrice": 555,
                                    "Name": "0.5 Kg",
                                    "Price": 555,
                                    "selected": false,
                                    "TakeawayPrice": 555,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 274,
                                    "DeliveryPrice": 1111,
                                    "Name": "1+1 kg",
                                    "Price": 1111,
                                    "selected": true,
                                    "TakeawayPrice": 1111,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 296,
                                    "DeliveryPrice": 1111,
                                    "Name": "Kg",
                                    "Price": 1111,
                                    "selected": false,
                                    "TakeawayPrice": 1111,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                }
                            ]
                        },
                        {
                            "Id": 84,
                            "Name": "Eggless ",
                            "OptionGroupType": 2,
                            "SortOrder": -1,
                            "Option": [
                                {
                                    "Id": 381,
                                    "DeliveryPrice": 50,
                                    "Name": "Rs:50",
                                    "Price": 50,
                                    "selected": false,
                                    "TakeawayPrice": 50,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 411,
                                    "DeliveryPrice": 100,
                                    "Name": "Rs:100",
                                    "Price": 100,
                                    "selected": false,
                                    "TakeawayPrice": 100,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                }
                            ]
                        }
                    ],
                    "OrderDiscount": 0,
                    "OrderId": 0,
                    "ProductId": 3384,
                    "ProductKey": "3384_274",
                    "Price": 0,
                    "Quantity": 1,
                    "StatusId": 0,
                    "Tax1": 0,
                    "Tax2": 0,
                    "Tax3": 0,
                    "TaxGroupId": 6,
                    "TaxItemDiscount": 0,
                    "TaxOrderDiscount": 0,
                    "TotalAmount": 888.8,
                    "IsTaxInclusive": false,
                    "TaxAmount1": 0,
                    "TaxAmount2": 0,
                    "TaxAmount3": 0,
                    "TaxAmount": 0,
                    "baseprice": 1111,
                    "kotquantity": 0,
                    "kotrefid": "420211214/23:27",
                    "refid": "420211214/23:27:3384_274"
                }
            ],
            "CompanyId": 3,
            "StoreId": 4,
            "KOTGroupId": 12,
            "added": [
                {
                    "DiscType": 2,
                    "isorderitem": true,
                    "showname": "CHOCO TRUFFLE Blast/1+1 kg",
                    "Id": 0,
                    "CategoryId": 560,
                    "ComplementryQty": 0,
                    "MinimumQty": 0,
                    "DiscAmount": 0,
                    "DiscPercent": 20,
                    "Extra": 0,
                    "FreeQtyPercentage": 0,
                    "ItemDiscount": 222.2,
                    "KitchenUserId": null,
                    "KOTGroupId": 12,
                    "KOTId": 0,
                    "Message": "",
                    "Name": "CHOCO TRUFFLE Blast",
                    "Product": "CHOCO TRUFFLE Blast",
                    "Note": "",
                    "OptionJson": "",
                    "OptionGroup": [
                        {
                            "Id": 79,
                            "Name": "Cake Charges ",
                            "OptionGroupType": 2,
                            "SortOrder": -1,
                            "Option": [
                                {
                                    "Id": 319,
                                    "DeliveryPrice": 300,
                                    "Name": "Photo Cake ",
                                    "Price": 300,
                                    "selected": false,
                                    "TakeawayPrice": 300,
                                    "IsSingleQtyOption": true,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 320,
                                    "DeliveryPrice": 100,
                                    "Name": "Eggless ",
                                    "Price": 100,
                                    "selected": false,
                                    "TakeawayPrice": 100,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 321,
                                    "DeliveryPrice": 150,
                                    "Name": "Shape ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 322,
                                    "DeliveryPrice": 150,
                                    "Name": "Drawing ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 323,
                                    "DeliveryPrice": 150,
                                    "Name": "Fruit Dec ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 324,
                                    "DeliveryPrice": 150,
                                    "Name": "Choco Dec ",
                                    "Price": 150,
                                    "selected": false,
                                    "TakeawayPrice": 150,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                }
                            ]
                        },
                        {
                            "Id": 70,
                            "Name": "Cake-1111",
                            "OptionGroupType": 1,
                            "SortOrder": -1,
                            "selected": true,
                            "Option": [
                                {
                                    "Id": 273,
                                    "DeliveryPrice": 555,
                                    "Name": "0.5 Kg",
                                    "Price": 555,
                                    "selected": false,
                                    "TakeawayPrice": 555,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 274,
                                    "DeliveryPrice": 1111,
                                    "Name": "1+1 kg",
                                    "Price": 1111,
                                    "selected": true,
                                    "TakeawayPrice": 1111,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 296,
                                    "DeliveryPrice": 1111,
                                    "Name": "Kg",
                                    "Price": 1111,
                                    "selected": false,
                                    "TakeawayPrice": 1111,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                }
                            ]
                        },
                        {
                            "Id": 84,
                            "Name": "Eggless ",
                            "OptionGroupType": 2,
                            "SortOrder": -1,
                            "Option": [
                                {
                                    "Id": 381,
                                    "DeliveryPrice": 50,
                                    "Name": "Rs:50",
                                    "Price": 50,
                                    "selected": false,
                                    "TakeawayPrice": 50,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                },
                                {
                                    "Id": 411,
                                    "DeliveryPrice": 100,
                                    "Name": "Rs:100",
                                    "Price": 100,
                                    "selected": false,
                                    "TakeawayPrice": 100,
                                    "IsSingleQtyOption": false,
                                    "orderitemrefid": "420211214/23:27:3384_274"
                                }
                            ]
                        }
                    ],
                    "OrderDiscount": 0,
                    "OrderId": 0,
                    "ProductId": 3384,
                    "ProductKey": "3384_274",
                    "Price": 0,
                    "Quantity": 1,
                    "StatusId": 0,
                    "Tax1": 0,
                    "Tax2": 0,
                    "Tax3": 0,
                    "TaxGroupId": 6,
                    "TaxItemDiscount": 0,
                    "TaxOrderDiscount": 0,
                    "TotalAmount": 888.8,
                    "IsTaxInclusive": false,
                    "TaxAmount1": 0,
                    "TaxAmount2": 0,
                    "TaxAmount3": 0,
                    "TaxAmount": 0,
                    "baseprice": 1111,
                    "kotquantity": 0,
                    "kotrefid": "420211214/23:27",
                    "refid": "420211214/23:27:3384_274"
                }
            ],
            "removed": [

            ],
            "CreatedDate": "2021-12-14 01:03 PM",
            "ModifiedDate": "2021-12-14 01:03 PM",
            "invoiceno": "420211214/23",
            "ordertypeid": 3,
            "isprinted": true,
            "orderrefid": "420211214/23",
            "refid": "420211214/23:27"
        }
    ],
    "AllItemDisc": 222.2,
    "AllItemTaxDisc": 0,
    "AllItemTotalDisc": 222.2,
    "OrderTaxDisc": 0,
    "OrderTotDisc": 0,
    "subtotal": 888.8,
    "PaymentTypeId": 6,
    "StorePaymentTypeId": 0,
    "events": [
        {
            "name": "order_placed",
            "time": 1639467195130
        },
        {
            "name": "food_ready",
            "time": 1639468007248
        },
        {
            "name": "dispatched",
            "time": 1639468009200
        },
        {
            "name": "delivered",
            "time": 1639468011192
        }
    ],
    "CustomerDetails": {
        "Id": 45644,
        "Name": "fazuledeen",
        "Email": "",
        "PhoneNo": "7708015454",
        "Address": "tecci park",
        "City": "",
        "PostalCode": null,
        "CompanyId": 3,
        "StoreId": 4
    },
    "IsAdvanceOrder": true,
    "status": "P",
    "OrderId": 1725423,
    "Transactions": [

    ],
    "changeditems": [
        "orderstatus"
    ],
    "diningtablekey": "",
    "isordersaved": true,
    "deliverytimestamp": 1639467720000,
    "createdtimestamp": 1639467162934,
    "StoreId": 4,
    "Charges": 0,
    "TaxAmount": 0,
    "extra": 0,
    "InvoiceNo": "420211214/23",
    "BillDateTime": "2021-12-14 13:03:15",
    "BillDate": "2021-12-14",
    "OrderedDateTime": "2021-12-14 13:03:15",
    "OrderedDate": "2021-12-14",
    "UserId": 22,
    "CompanyId": 3,
    "DeliveryDateTime": "2021-12-14 13:12",
    "_id": "hvCKI3oVZHwBN0db",
    "status_name": "Dispatched"
}
receipt.CustomerDetails.PhoneNo

function getReceiptPOSCommands(receipt, printMode, numberOfCharacters, printOptions, receiptPrinter, isSplitBill, splitIndex) {
    // let printBillDate = this.datepipe.transform(receipt.details.createdAt, 'MMM dd, y') + ' at ' + this.datepipe.transform(receipt.details.createdAt, 'hh:mm a');
    let printBillDate = receipt.OrderedDateTime // moment(receipt.OrderedDateTime).format('LLL') //this.datepipe.transform(receipt.details.createdAt, 'MMM dd, y') + ' at ' + this.datepipe.transform(receipt.details.createdAt, 'hh:mm a');
    let highestItemPrice = getHighestItemPrice(receipt.Items);
    let total = (receipt.BillAmount).toFixed(2);
    let itemsSecondColumn = numberOfCharacters / (receiptPrinter.size === '58mm' ? 2.25 : 2);
    let itemsThirdColumn = numberOfCharacters / (receiptPrinter.size === '58mm' ? 3.75 : 3.5);
    let paymentSectionColumn = numberOfCharacters / (receiptPrinter.size === '58mm' ? 1.40 : 1.30);
    // const isBookingCreation = (receipt.details.saleType === 'booking' && receipt.details.localBookingNumber && !receipt.details.localReceiptNumber);
    // let isTablePresent = (receipt.details.draftName && (receipt.details.draftName.startsWith('Take-Away') || receipt.details.draftName.startsWith('Delivery') || receipt.details.draftName.startsWith('Table'))) ? true : false;
    let cutIndex = receiptPrinter.size === '58mm' ? 10 : 20;
    let lineBreak = '--------------------------------------------------------------';
    let command = '\u001B' + '@' + '\u001B' + 'E' + '\u0001'; //Initialize
    // let isCashPayment = (receipt.details.payments && (receipt.details.payments).length > 0) ? receipt.details.payments.find(i => i.type === 'cash') : undefined;
    // if (isCashPayment && (printMode !== 1) && (printMode !== 2))
    //     command += '\u001B' + '\u0070' + '\u0000' + '\u0019' + '\u00D1' + '\u000A'; //Cash Drawer Open
    // if (receipt.details.draftName && isTablePresent)
    //     command += '\u001B' + 'a' + '\u0002' + receipt.details.draftName + '\n' + '\u000A';
    // if (receipt.details.orderTickets && (receipt.details.orderTickets.length > 0) && printOptions.printPreferences && printOptions.printPreferences.isOrderTicketNumberPrintedOnReceipt && !isTablePresent) {
    //     if (receipt.details.orderTickets.length === 1)
    //         command += '\u001B' + 'a' + '\u0002' + 'Order ' + '\u001D' + '\u0021' + '\u0040' + ('#' + getReceiptOrderTicketNumbers(receipt.details.orderTickets).toString()) + '\u001D' + '\u0021' + '\u0000' + '\n' + '\u000A';
    //     else
    //         command += '\u001B' + 'a' + '\u0002' + 'Order #' + getReceiptOrderTicketNumbers(receipt.details.orderTickets).toString() + '\n' + '\u000A';
    // }
    // if (printMode === 1 && !receipt.details.cancellation)
    //     command += '\u001B' + 'a' + '\u0001' + 'DUPLICATE' + '\n' + '\u000A';
    // if (printMode === 2 && !receipt.details.cancellation)
    //     command += '\u001B' + 'a' + '\u0001' + 'TEST' + '\n' + '\u000A';
    // if (receipt.details.cancellation)
    //     command += '\u001B' + 'a' + '\u0001' + 'CANCELLED' + '\n' + '\u000A';
    command += '\u001B' + 'a' + '\u0001' + 'FB Cakes n Sweets' + '\n' + '\u000A';
    // command += '\u001B' + 'a' + '\u0001' + ((receipt.order && receipt.order.channel && receipt.order.channel.brandName) ? receipt.order.channel.brandName : receipt.seller.businessName) + '\n' + '\u000A'; //Center Justification
    // if (receipt.details.receiptHeader && !isBookingCreation)
    // command += '\u001B' + 'a' + '\u0001' + receipt.details.receiptHeader + '\u000A'; //Bill Header
    command += '\u001B' + 'a' + '\u0001' + 'Karapakkam, OMR Road, Chennai, \n9600888834\nGSTIN:Q4A5D8W6AS' + '\u000A'; //Bill Header
    // if (!isBookingCreation)
    command += '\u001B' + 'a' + '\u0001' + 'Receipt: ' + receipt.InvoiceNo + '\u000A';
    command += '\u001B' + 'a' + '\u0001' + printBillDate + '\u000A'; // BillDate
    // if (receipt.order && receipt.order.channel)
    //     command += '\u001B' + 'a' + '\u0001' + capitalizeFirstpipe(receipt.order.channel.name, undefined) + ': ' + receipt.order.channel.externalOrderId + '\u000A';
    if (receipt.CustomerDetails) {
        if (receipt.CustomerDetails.Name)
            command += '\u001B' + 'a' + '\u0001' + 'Customer: ' + receipt.CustomerDetails.Name + '\u000A';
        if (receipt.CustomerDetails.PhoneNo)
            command += '\u001B' + 'a' + '\u0001' + 'Customer Mobile: ' + receipt.CustomerDetails.PhoneNo + '\u000A';
        //DO NOT DELETE
        // if (receipt.CustomerDetails.shippingAddress && Object.keys(receipt.CustomerDetails.shippingAddress).length > 0) {
        //     command += '\u001B' + 'a' + '\u0001' + 'Address:';
        //     if (receipt.CustomerDetails.shippingAddress.streetAddress)
        //         command += ` ` + receipt.CustomerDetails.shippingAddress.streetAddress;
        //     if (receipt.CustomerDetails.shippingAddress.city)
        //         command += ` ` + receipt.CustomerDetails.shippingAddress.city;
        //     if (receipt.CustomerDetails.shippingAddress.zipcode)
        //         command += ` ` + receipt.CustomerDetails.shippingAddress.zipcode;
        //     command += `\u000A`;
        // }
        // if (receipt.customer.additionalDetails && (receipt.customer.additionalDetails).length > 0) {
        //     for (let field of receipt.customer.additionalDetails) {
        //         let customerCustomField = printOptions.customerAdditionalDetails ? printOptions.customerAdditionalDetails.find(f => f.name === field.name) : undefined;
        //         if (customerCustomField && customerCustomField.isPrintableOnReceipt)
        //             command += '\u001B' + 'a' + '\u0001' + field.name + ': ' + field.value + '\u000A';
        //     }
        // }
    }
    // if (receipt.details.additionalDetails) {
    //     for (let field of receipt.details.additionalDetails) {
    //         let receiptCustomField = printOptions.receiptAdditionalDetails ? printOptions.receiptAdditionalDetails.find(f => f.name === field.name) : undefined;
    //         if (receiptCustomField && receiptCustomField.isPrintableOnReceipt)
    //             command += '\u001B' + 'a' + '\u0001' + field.name + ': ' + field.value + '\u000A';
    //     }
    // }
    // if (receipt.details.tags || (receipt.customer && receipt.customer.tags)) {
    //     let printableTags = getPrintableTags(printOptions.receiptTagConfigs, printOptions.customerTagConfigs, receipt.details.tags, receipt.customer ? receipt.customer.tags : undefined);
    //     if (printableTags.length > 0)
    //         command += '\u001B' + 'a' + '\u0001' + printableTags.toString() + '\u000A';
    // }
    // if (receipt.details.draftName && !isTablePresent)
    //     command += '\u001B' + 'a' + '\u0001' + receipt.details.draftName + '\u000A';
    // if (receipt.details.orderTickets && (receipt.details.orderTickets.length > 0) && printOptions.printPreferences && printOptions.printPreferences.isOrderTicketNumberPrintedOnReceipt && isTablePresent)
    //     command += '\u001B' + 'a' + '\u0001' + 'Order #' + getReceiptOrderTicketNumbers(receipt.details.orderTickets).toString() + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A'; //Break Line
    console.log(command)
    // if (isBookingCreation)
    //     command += '\u001B' + 'a' + '\u0001' + 'ESTIMATE' + '\u000A'; // ESTIMATE for local booking
    command += '\u001B' + 'a' + '\u0000' + paddingLeft('ITEM', 2) + paddingLeft('QTY', itemsSecondColumn - 4) + paddingLeft('PRICE', itemsThirdColumn - 3) + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A'; //Break Line

    // If isSplitBill take itemsSold & priceSummary from splitindex
    // let itemsSold = (isSplitBill && receipt.details.splitBillsByCustomer.type === 'by-items') ? receipt.details.splitBillsByCustomer.splits[splitIndex].itemsSold : receipt.details.itemsSold;
    // let priceSummary = (isSplitBill && receipt.details.splitBillsByCustomer.type === 'by-items') ? receipt.details.splitBillsByCustomer.splits[splitIndex].priceSummary : receipt.details.priceSummary;

    for (let item of receipt.Items) {
        let name = item.showname // ? item.displayName : item.name;
        if ((name).length > cutIndex)  //Larger item size
            command += getLargeItemCommand(item, itemsSecondColumn, itemsThirdColumn, highestItemPrice, cutIndex, 0);
        else
            command += '\u001B' + 'a' + '\u0000' + paddingLeft(name, 2) + paddingLeft((item.quantity).toString(), itemsSecondColumn - ((name).length)) +
                paddingLeft(item.totalPriceExcludingDiscountAndTax.toFixed(2), (itemsThirdColumn - ((item.quantity).toString()).length) + ((highestItemPrice.toFixed(2)).length) -
                    ((item.totalPriceExcludingDiscountAndTax.toFixed(2)).length)) + '\u000A';
        if (item.addons && item.addons.length > 0) {
            for (let addon of item.addons) {
                command += getItemNotesCommand('+ ' + addon.name, cutIndex, 0, 3);
            }
        }
        if (item.comboItems && item.comboItems.length > 0) {
            for (let comboItem of item.comboItems) {
                if (comboItem.comboGroupType === 'addonGroup')
                    command += getItemNotesCommand('+ ' + comboItem.name, cutIndex, 0, 5);
                else
                    command += getItemNotesCommand('- ' + comboItem.name, cutIndex, 0, 3);
            }
        }
        if (item.notes && printOptions.printPreferences && printOptions.printPreferences.isProductNotesPrintedOnReceipt)
            command += getItemNotesCommand(item.notes, cutIndex, 0, 3);
    }
    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A'; //Break Line
    command += '\u001B' + 'a' + '\u0000' + paddingLeft('Subtotal', 2) + paddingLeft((receipt.subtotal).toFixed(2), (paymentSectionColumn - 8) +
        (total.length - ((receipt.subtotal).toFixed(2)).length)) + '\u000A';

    command += '\u001B' + 'a' + '\u0000' + paddingLeft('Bulk Discount', 2) + paddingLeft('-' + (receipt.OrderTotDisc + receipt.AllItemTotalDisc).toFixed(2), (paymentSectionColumn - 14) +
        (total.length - ((receipt.OrderTotDisc + receipt.AllItemTotalDisc).toFixed(2)).length)) + '\u000A';

    // if (priceSummary.discount > 0) {
    //     if (getTotalItemDiscount(itemsSold) > 0) command += '\u001B' + 'a' + '\u0000' + paddingLeft('Item Discounts', 2) + paddingLeft('-' + (getTotalItemDiscount(receipt.details.itemsSold)).toFixed(2), (paymentSectionColumn - 15) +
    //         (total.length - ((getTotalItemDiscount(itemsSold)).toFixed(2)).length)) + '\u000A';
    //     if (priceSummary.bulkDiscount && priceSummary.bulkDiscount.total > 0) command += '\u001B' + 'a' + '\u0000' + paddingLeft('Bulk Discount', 2) + paddingLeft('-' + (priceSummary.bulkDiscount.total).toFixed(2), (paymentSectionColumn - 14) +
    //         (total.length - ((priceSummary.bulkDiscount.total).toFixed(2)).length)) + '\u000A';
    // }
    // if (priceSummary.additionalCharges && (priceSummary.additionalCharges.length > 0)) {
    //     for (let additionalCharge of priceSummary.additionalCharges) {
    //         command += '\u001B' + 'a' + '\u0000' + paddingLeft(additionalCharge.name, 2) + paddingLeft(additionalCharge.totalExcludingTax.toFixed(2),
    //             (paymentSectionColumn - (additionalCharge.name).length) +
    //             (total.length - ((additionalCharge.totalExcludingTax).toFixed(2)).length)) + '\u000A';
    //     }
    // }
    // if (priceSummary.taxes) { //Price Taxes
    //     for (let tax of priceSummary.taxes) {
    //         if (tax.name.length > (cutIndex + 5))
    //             command += getLargeTaxCommand(tax, paymentSectionColumn, total, cutIndex, 0);
    //         else
    //             command += '\u001B' + 'a' + '\u0000' + paddingLeft(tax.name, 2) + paddingLeft((tax.total).toFixed(2),
    //                 (paymentSectionColumn - (tax.name).length) + (total.length - ((tax.total).toFixed(2)).length)) + '\u000A';
    //     }
    // }
    // if (priceSummary.roundoff !== 0)
    //     command += '\u001B' + 'a' + '\u0000' + paddingLeft('Roundoff', 2) + paddingLeft((priceSummary.roundoff).toFixed(2), (paymentSectionColumn - 8) +
    //         (total.length - ((priceSummary.roundoff).toFixed(2)).length)) + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + paddingLeft('Total', 2) + paddingLeft((receipt.BillAmount).toFixed(2), (paymentSectionColumn - 5)) + '\u000A';


    // if (receipt.details.priceSummary.bookingAmount)
    //     command += '\u001B' + 'a' + '\u0000' + paddingLeft('Advance', 2) + paddingLeft((receipt.details.priceSummary.bookingAmount).toFixed(2), (paymentSectionColumn - 7)) + '\u000A';

    // if (receipt.details.payments && (receipt.details.payments.length > 0)) {
    //     command += '\u001B' + 'a' + '\u0000' + paddingLeft('Paid', 2) + paddingLeft(isSplitBill ? priceSummary.total.toFixed(2) : (getTotalPaid(receipt.details.payments)).toFixed(2), (paymentSectionColumn - 4)) + '\u000A';
    //     for (let payment of receipt.details.payments) {
    //         if (payment.amount < 0)
    //             command += '\u001B' + 'a' + '\u0000' + paddingLeft('Refund (' + payment.type + ')', 2) + paddingLeft((payment.amount).toFixed(2), (paymentSectionColumn - (payment.type.length + 9))) + '\u000A';
    //     }
    // }

    // Split info section
    // if (isSplitBill) {
    //     let split = receipt.details.splitBillsByCustomer.splits[splitIndex];
    //     command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A'; //Break Line
    //     if (receipt.details.splitBillsByCustomer.type === 'equally') {
    //         command += '\u001B' + 'a' + '\u0000' + paddingLeft(`For ${(split.customerName ? split.customerName.substring(0, 15) : 'Customer ' + (splitIndex + 1))}`, 2) + paddingLeft((split.paymentAmount).toFixed(2),
    //             (paymentSectionColumn - (`For ${(split.customerName ? split.customerName.substring(0, 15) : 'Customer ' + (splitIndex + 1))}`).length) + (total.length - ((split.paymentAmount).toFixed(2)).length)) + '\u000A';
    //     } else if (receipt.details.splitBillsByCustomer.type === 'by-items') {
    //         command += '\u001B' + 'a' + '\u0001' + `For ${(split.customerName ? split.customerName : 'Customer ' + (splitIndex + 1))}` + '\u000A';
    //     }
    // }

    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A';

    // if (receipt.details.booking) {
    //     command += '\u001B' + 'a' + '\u0001' + 'BOOKING' + '\u000A';
    //     if (isBookingCreation)
    //         command += '\u001B' + 'a' + '\u0001' + receipt.details.localBookingNumber + '\u000A';
    //     if (receipt.details.booking.notes)
    //         command += '\u001B' + 'a' + '\u0001' + 'Notes: ' + receipt.details.booking.notes + '\u000A';

    //     if (receipt.details.booking.deliveryAt)
    //         command += '\u001B' + 'a' + '\u0001' + moment(receipt.details.booking.deliveryAt).format('LLL') // this.datepipe.transform(receipt.details.booking.deliveryAt, 'MMM dd, y') + ' at ' + this.datepipe.transform(receipt.details.booking.deliveryAt, 'hh:mm a') + '\u000A';
    //     command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A';
    // }
    // if (receipt.details.receiptFooter && !isBookingCreation)
    command += '\u001B' + 'a' + '\u0001' + "Thank You. Visit Again." + '\u000A' + '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A';
    // if (!printOptions.printPreferences || (printOptions.printPreferences && !printOptions.printPreferences.isSlickPOSFooterNotPrinted))
    command += '\u001B' + 'a' + '\u0001' + 'Receipts by Biz1Book.com' + '\n' + '\u000A';
    command += '\u001D' + 'V' + '\u0042' + '\u0000'; //Cut 
    return command;
}

function paddingLeft(padStr, padLength) {
    return (String("                                                " + padStr).slice(-(padStr.length + padLength)));
}

function getItemNotesCommand(notes, cutIndex, currentIndex, leftPaddingSpace) {
    let command;
    if (currentIndex === 0)
        command = '\u001B' + 'a' + '\u0000' + paddingLeft(notes.slice(0, cutIndex + 5), leftPaddingSpace) + '\u000A';
    else
        command = '\u001B' + 'a' + '\u0000' + paddingLeft(notes.slice(currentIndex, currentIndex + cutIndex + 5), leftPaddingSpace) + '\u000A';
    currentIndex += (cutIndex + 5);
    if ((notes.length - currentIndex) > 0)
        return command + getItemNotesCommand(notes, cutIndex, currentIndex, leftPaddingSpace);
    else
        return command;
}

function getLargeItemCommand(item, itemsSecondColumn, itemsThirdColumn, highestItemPrice, cutIndex, currentIndex) {
    let command;
    let name = item.showname //displayName ? item.displayName : item.name;
    if (currentIndex === 0)
        command = '\u001B' + 'a' + '\u0000' + paddingLeft((name).slice(0, cutIndex), 2) +
            paddingLeft((item.Quantity).toString(), itemsSecondColumn - cutIndex) +
            paddingLeft(item.TotalAmount.toFixed(2), itemsThirdColumn - (((item.Quantity).toString()).length) + ((highestItemPrice.toFixed(2)).length) -
                ((item.TotalAmount.toFixed(2)).length)) + '\u000A';
    else
        command = '\u001B' + 'a' + '\u0000' + paddingLeft((name).slice(currentIndex, currentIndex + cutIndex), 2) + '\u000A';
    currentIndex += cutIndex;
    if (((name.length) - currentIndex) > 0)
        return command + getLargeItemCommand(item, itemsSecondColumn, itemsThirdColumn, highestItemPrice, cutIndex, currentIndex);
    else
        return command;
}

function getHighestItemPrice(items) {
    let highestPrice = 0;
    for (let item of items) {
        if (item.TotalAmount > highestPrice) highestPrice = item.TotalAmount;
        else continue;
    }
    return highestPrice;
}

function getLargeTaxCommand(tax, paymentSectionColumn, total, cutIndex, currentIndex) {
    let command;
    if (currentIndex === 0)
        command = '\u001B' + 'a' + '\u0000' + paddingLeft((tax.name).slice(0, (cutIndex + 5)), 2) + paddingLeft((tax.total).toFixed(2),
            (paymentSectionColumn - (cutIndex + 5)) + (total.length - ((tax.total).toFixed(2)).length)) + '\u000A';
    else
        command = '\u001B' + 'a' + '\u0000' + paddingLeft((tax.name).slice(currentIndex, currentIndex + (cutIndex + 5)), 2) + '\u000A';
    currentIndex += (cutIndex + 5);
    if (((tax.name.length) - currentIndex) > 0)
        return command + getLargeTaxCommand(tax, paymentSectionColumn, total, cutIndex, currentIndex);
    else
        return command;
}

function getNetworkLargeOrderTicketItemCommand(name, quantity, largestName, sectionColumn, cutIndex, currentIndex) {
    let command;
    if (currentIndex === 0)
        command = '\u001B' + 'a' + '\u0000' + paddingLeft((name).slice(0, cutIndex), 2) + paddingLeft(quantity, (sectionColumn - cutIndex) + (largestName.length - (quantity.toString().length))) + '\u000A';
    else
        command = '\u001B' + 'a' + '\u0000' + paddingLeft((name).slice(currentIndex, currentIndex + cutIndex), 2) + '\u000A';
    currentIndex += cutIndex;
    if (((name.length) - currentIndex) > 0)
        return command + getNetworkLargeOrderTicketItemCommand(name, quantity, largestName, sectionColumn, cutIndex, currentIndex);
    else
        return command;
}

function getReceiptOrderTicketNumbers(orderTickets) {
    let orderTicketNumbers = [];
    for (let orderTicket of orderTickets) {
        orderTicketNumbers.push(orderTicket.number);
    }
    return orderTicketNumbers;
}

function getPrintableTags(receiptTagConfigs, customerTagConfigs, receiptTags, customerTags) {
    let printableTags = [];
    if (customerTags && customerTagConfigs && (customerTags.length > 0) && (customerTagConfigs.length > 0)) {
        for (let customerTag of customerTags) {
            let customerTagConfig = customerTagConfigs.find(i => i.name === customerTag);
            if (customerTagConfig && customerTagConfig.isPrintableOnReceipt)
                printableTags.push(customerTag);
        }
    }
    if (receiptTags && receiptTagConfigs && (receiptTags.length > 0) && (receiptTagConfigs.length > 0)) {
        for (let receiptTag of receiptTags) {
            let receiptTagConfig = receiptTagConfigs.find(i => i.name === receiptTag);
            if (receiptTagConfig && receiptTagConfig.isPrintableOnReceipt)
                printableTags.push(receiptTag);
        }
    }
    return printableTags;
}

function getTotalItemDiscount(itemsSold) {
    let totalItemDiscount = 0;
    for (let item of itemsSold) {
        if (item.discount && item.discount.total) totalItemDiscount += item.discount.total;
    }
    return totalItemDiscount;
}

function getTotalPaid(payments) {
    let totalPaid = 0;
    for (let payment of payments) {
        if (payment.amount > 0) totalPaid += Number(payment.amount);
    }
    return totalPaid;
}

function capitalizeFirstpipe(input, trimAfterLength) {
    let output = '';
    if (input)
        output = input.charAt(0).toUpperCase() + input.slice(1);
    if (trimAfterLength && output.length > trimAfterLength) {
        output = output.substring(0, trimAfterLength) + '...';
    }
    return output;
}

function getDummyReceipt(activeUser) {
    let dummyItems = [{
        name: 'Chocolate Truffle - 1Kg + 1/2 Kg Free',
        quantity: 100,
        taxGroup: {
            netPercent: 5
        },
        totalPriceExcludingDiscountAndTax: 100000
    },
    {
        name: 'Coffee',
        quantity: 3,
        totalPriceExcludingDiscountAndTax: 80
    }];
    let dummyTaxes = [{
        name: 'CGST-9',
        total: 70
    },
    {
        name: 'SGST-9',
        total: 50
    }];
    return {
        seller: {
            businessName: setup.account.businessName,
        },
        details: {
            receiptHeader: (setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'] && setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'].options) ? setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'].options.receiptHeader : undefined,
            receiptFooter: (setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'] && setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'].options) ? setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'].options.receiptFooter : undefined,
            localReceiptNumber: 'TEST-10A-1000-0',
            createdAt: new Date().getTime(),
            itemsSold: dummyItems,
            priceSummary: {
                total: 100200,
                discount: 0,
                subtotal: 100080,
                taxes: dummyTaxes,
                roundoff: 0
            },
        },
        customer: {
            mobile: '9937465934',
            name: 'John Milton'
        }
    }
}
let printMode = 2
let numberOfCharacters = 47

let setupCache = {
    "lastModified": "Tue, 14 Dec 2021 05:12:12 GMT",
    "setup": {
        "account": {
            "id": "b36ee85f-dad5-4fee-b1cb-2f7e7ff8b738",
            "email": "mohamedanastsi@gmail.com",
            "mobileNumber": "654654654",
            "userName": "fghghfgh",
            "userId": "google-oauth2|110674517674965146468",
            "businessName": "ffghjfj",
            "businessType": "fast-food",
            "businessAddress": {
                "city": "Jacksonville, FL, USA"
            },
            "inceptionDate": 1575691898702,
            "options": {
                "roundoffTotal": true,
                "ownerPin": "1234"
            },
            "facebookLink": "",
            "instagramLink": "",
            "websiteLink": ""
        },
        "registers": {
            "e2040781-72c4-415c-8ef3-3254b5cfa1fe": {
                "id": "e2040781-72c4-415c-8ef3-3254b5cfa1fe",
                "name": "Main Register",
                "options": {
                    "printReceipt": true,
                    "receiptPrintSize": "80mm",
                    "printLogoOnReceipt": false,
                    "receiptNumberPrefix": "FF",
                    "receiptFooter": "Thank You. Visit Again.",
                    "isOrderTicketItemStatusEnabled": true,
                    "tableNumbers": "G1,G2,G3,G4,G5,G6",
                    "isAcceptStatusEnabled": true,
                    "receiptHeader": "Karapakkam, OMR Road, Chennai, \n9600888834\nGSTIN:Q4A5D8W6AS", // "Jacksonville, FL, USA",
                    "isServedStatusEnabled": true
                },
                "lastLocalReceiptNumber": "FF-ARZ-2110-4",
                "notificationTokens": [

                ]
            }
        },
        "productCategories": {
            "6620b2e2-96cf-46be-b2c0-6232938a17bf": {
                "id": "6620b2e2-96cf-46be-b2c0-6232938a17bf",
                "name": "General",
                "order": null,
                "orderTicketGroupId": null
            }
        },
        "taxGroups": {
            "1d3c6cfc-0aa7-4f20-8522-87779268c97c": {
                "name": "Zero Tax Group",
                "isTaxInclusive": true,
                "id": "1d3c6cfc-0aa7-4f20-8522-87779268c97c",
                "taxIds": [
                    "1e78a4c0-8c52-4f24-926c-5346991efa06"
                ]
            }
        },
        "taxes": {
            "1e78a4c0-8c52-4f24-926c-5346991efa06": {
                "id": "1e78a4c0-8c52-4f24-926c-5346991efa06",
                "name": "Zero Tax",
                "percent": 0
            }
        },
        "cashiers": {
            "dc97a437-c552-4294-a7a5-13c9578cd8b2": {
                "id": "dc97a437-c552-4294-a7a5-13c9578cd8b2",
                "name": "qqq",
                "pin": "4321",
                "role": "manager",
                "registerId": "e2040781-72c4-415c-8ef3-3254b5cfa1fe"
            }
        },
        "options": {
            "currencyCode": "USD"
        },
        "customReceiptFields": [

        ],
        "plan": {
            "logging": false,
            "isWaiterAllowed": true
        },
        "printers": {
            "ddfcabca-acbc-4617-8c55-0b1646d03d57": {
                "id": "ddfcabca-acbc-4617-8c55-0b1646d03d57",
                "name": "EPSON TM-T82 ReceiptSA4",
                "type": "silentPrint",
                "size": "80mm",
                "config": {
                    "bluetoothPrint": {

                    },
                    "networkPrint": {
                        "port": 9100,
                        "noOfCharactersInLine": 47,
                        "ip": "192.168.1.253"
                    },
                    "silentPrint": {
                        "connectedPrinterName": "EPSON TM-T82 ReceiptSA4"
                    },
                    "airPrint": {

                    }
                }
            }
        },
        "variants": {

        },
        "variantGroups": {

        },
        "addons": {

        },
        "addonGroups": {

        },
        "itemGroups": {

        },
        "customPayments": [

        ],
        "customPettyCashCategories": [

        ],
        "discountRules": {

        },
        "waiters": {
            "2108f858-bfcd-4062-8ddb-b46a22d2ad9e": {
                "id": "2108f858-bfcd-4062-8ddb-b46a22d2ad9e",
                "name": "oneplus",
                "registerId": "e2040781-72c4-415c-8ef3-3254b5cfa1fe",
                "pin": "7894"
            }
        },
        "productPriceBooks": [

        ]
    }
}
const setup = setupCache.setup

let printOptions = {
    size: setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'].options.receiptPrintSize,
    logourl: (setup.account.options && setup.account.options.logoUrl !== 'null') ? setup.account.options.logoUrl : undefined,
    isLogoPrintable: setup.registers['e2040781-72c4-415c-8ef3-3254b5cfa1fe'].options.printLogoOnReceipt ? true : false,
    customerTagConfigs: setup.customerTags,
    receiptTagConfigs: setup.receiptTags,
    printPreferences: setup.printingPreferences,
    customerAdditionalDetails: setup.customCustomerFields,
    receiptAdditionalDetails: setup.customReceiptFields
};
let silent_printer = {
    "id": "ddfcabca-acbc-4617-8c55-0b1646d03d57",
    "name": "EPSON TM-T82 ReceiptSA4",
    "type": "silentPrint",
    "size": "80mm",
    "config": {
        "bluetoothPrint": {},
        "networkPrint": {
            "port": 9100,
            "noOfCharactersInLine": 47,
            "ip": "192.168.1.253"
        },
        "silentPrint": {
            "connectedPrinterName": "EPSON TM-T82 ReceiptSA4"
        },
        "airPrint": {}
    }
}

function getReceiptCommands(receipt, numberOfCharacters, receiptPrinter) {
    console.log("numberOfCharacters: ", numberOfCharacters)
    let printBillDate = receipt.OrderedDateTime // moment(receipt.OrderedDateTime).format('LLL') //this.datepipe.transform(receipt.details.createdAt, 'MMM dd, y') + ' at ' + this.datepipe.transform(receipt.details.createdAt, 'hh:mm a');
    let highestItemPrice = getHighestItemPrice(receipt.Items);
    let total = (receipt.BillAmount).toFixed(2);
    let itemsSecondColumn = numberOfCharacters / (receiptPrinter.size === '58mm' ? 2.25 : 2);
    let itemsThirdColumn = numberOfCharacters / (receiptPrinter.size === '58mm' ? 3.75 : 3.5);
    let paymentSectionColumn = numberOfCharacters / (receiptPrinter.size === '58mm' ? 1.40 : 1.30);
    let cutIndex = receiptPrinter.size === '58mm' ? 10 : 20;
    let lineBreak = '--------------------------------------------------------------';
    let command = '\u001B' + '@' + '\u001B' + 'E' + '\u0001'; //Initialize
    command += '\u001B' + 'a' + '\u0001' + 'FB Cakes n Sweets' + '\n' + '\u000A'; //Company Name
    command += '\u001B' + 'a' + '\u0001' + 'Karapakkam, OMR Road, Chennai, \n9600888834\nGSTIN:Q4A5D8W6AS' + '\u000A'; // Store Address //Bill Header
    command += '\u001B' + 'a' + '\u0001' + 'Receipt: ' + receipt.InvoiceNo + '\u000A'; //InvoiceNo
    command += '\u001B' + 'a' + '\u0001' + printBillDate + '\u000A'; // OrderedDate // BillDate
    if (receipt.CustomerDetails) {
        if (receipt.CustomerDetails.Name)
            command += '\u001B' + 'a' + '\u0001' + 'Customer: ' + receipt.CustomerDetails.Name + '\u000A'; // Customer Name
        if (receipt.CustomerDetails.PhoneNo)
            command += '\u001B' + 'a' + '\u0001' + 'Customer Mobile: ' + receipt.CustomerDetails.PhoneNo + '\u000A'; // CUstomer Phone
    }
    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A'; //Break Line

    command += '\u001B' + 'a' + '\u0000' + paddingLeft('ITEM', 2) + paddingLeft('QTY', itemsSecondColumn - 4) + paddingLeft('PRICE', itemsThirdColumn - 3) + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A'; //Break Line
    for (let item of receipt.Items) {
        let name = item.showname // ? item.displayName : item.name;
        if ((name).length > cutIndex)  //Larger item size
            command += getLargeItemCommand(item, itemsSecondColumn, itemsThirdColumn, highestItemPrice, cutIndex, 0);
        else
            command += '\u001B' + 'a' + '\u0000' + paddingLeft(name, 2) + paddingLeft((item.Quantity).toString(), itemsSecondColumn - ((name).length)) +
                paddingLeft(item.TotalAmount.toFixed(2), (itemsThirdColumn - ((item.Quantity).toString()).length) + ((highestItemPrice.toFixed(2)).length) -
                    ((item.TotalAmount.toFixed(2)).length)) + '\u000A';
    }
    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A'; //Break Line
    command += '\u001B' + 'a' + '\u0000' + paddingLeft('Subtotal', 2) + paddingLeft((receipt.subtotal).toFixed(2), (paymentSectionColumn - 8) +
        (total.length - ((receipt.subtotal).toFixed(2)).length)) + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + paddingLeft('Bulk Discount', 2) + paddingLeft('-' + (receipt.OrderTotDisc + receipt.AllItemTotalDisc).toFixed(2), (paymentSectionColumn - 14) +
        (total.length - ((receipt.OrderTotDisc + receipt.AllItemTotalDisc).toFixed(2)).length)) + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + paddingLeft('Total', 2) + paddingLeft((receipt.BillAmount).toFixed(2), (paymentSectionColumn - 5)) + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + paddingLeft('Paid', 2) + paddingLeft((receipt.PaidAmount).toFixed(2), (paymentSectionColumn - 4)) + '\u000A';
    command += '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A';
    command += '\u001B' + 'a' + '\u0001' + "Thank You. Visit Again." + '\u000A' + '\u001B' + 'a' + '\u0000' + lineBreak.slice(0, numberOfCharacters) + '\u000A';
    command += '\u001B' + 'a' + '\u0001' + 'Receipts by Biz1Book.com' + '\n' + '\u000A';
    command += '\u001D' + 'V' + '\u0042' + '\u0000'; //Cut 
    return command;
}

let receiptCommands = getReceiptCommands(receipt, numberOfCharacters, printer_helper)
let posCommands = getReceiptPOSCommands(receipt, printMode, numberOfCharacters, printOptions, printer_helper, false, undefined)
// console.log(receiptCommands[202], posCommands[202])
// let rc = receiptCommands.split('')
// let pc = posCommands.split('')
// let isclean = true
// rc.forEach((str, ind) => {
//     if ((str != pc[ind]) && isclean) {
//         console.log("difference @ position ", ind, `rc[${ind}]: ${str} -- pc[${ind}]: ${pc[ind]}`)
//         isclean = false
//     }
// })
let connectedPrinter = {
    data: receiptCommands,
    printer: 'EPSON TM-T82 ReceiptSA4', //silent_printer.config.silentPrint.connectedPrinterName, // uniquePrinter.config.silentPrint.connectedPrinterName, // printer name, if missing then will print to default printer
    type: 'RAW', // type: RAW, TEXT, PDF, JPEG, .. depends on platform,
    success: function (jobID) {
        console.log("sent to printer with ID: " + jobID);
        // resolve('Successfully printed the receipt details');
    },
    error: function (err) { console.log(err); }
};

printer_helper.printDirect(connectedPrinter)

console.log(printer_helper.getPrinters())

// function printDirect(parameters) {
//     var data = parameters
//         , printer
//         , docname
//         , type
//         , options
//         , success
//         , error;

//     if (arguments.length == 1) {
//         //TODO: check parameters type
//         //if (typeof parameters )
//         data = parameters.data;
//         printer = parameters.printer;
//         docname = parameters.docname;
//         type = parameters.type;
//         options = parameters.options || {};
//         success = parameters.success;
//         error = parameters.error;
//     } else {
//         printer = arguments[1];
//         type = arguments[2];
//         docname = arguments[3];
//         options = arguments[4];
//         success = arguments[5];
//         error = arguments[6];
//     }

//     if (!type) {
//         type = "RAW";
//     }

//     // Set default printer name
//     if (!printer) {
//         printer = getDefaultPrinterName();
//     }

//     type = type.toUpperCase();

//     if (!docname) {
//         docname = "node print job";
//     }

//     if (!options) {
//         options = {};
//     }

//     //TODO: check parameters type
//     if (printer_helper.printDirect) {// call C++ binding
//         try {
//             var res = printer_helper.printDirect(data, printer, docname, type, options);
//             if (res) {
//                 success(res);
//             } else {
//                 error(Error("Something wrong in printDirect"));
//             }
//         } catch (e) {
//             error(e);
//         }
//     } else {
//         error("Not supported");
//     }
// }