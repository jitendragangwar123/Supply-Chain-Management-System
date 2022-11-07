var abi = [

	
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_pname",
					"type": "string"
				},
				{
					"internalType": "int256",
					"name": "_price",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "_quantity",
					"type": "int256"
				}
			],
			"name": "addNewProductsInList",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "int256",
					"name": "_oid",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "_status",
					"type": "string"
				}
			],
			"name": "giveOrderItsStatus",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "int256",
					"name": "_pid",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "_newPrice",
					"type": "int256"
				}
			],
			"name": "newPrice",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "int256",
					"name": "_pid",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "_quantity",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "_cname",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "_daddress",
					"type": "string"
				}
			],
			"name": "placeAnOrder",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_name",
					"type": "string"
				}
			],
			"name": "registerNewProducer",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_addr",
					"type": "address"
				}
			],
			"name": "getMyTotalOrder",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_addr",
					"type": "address"
				},
				{
					"internalType": "int256",
					"name": "_oid",
					"type": "int256"
				}
			],
			"name": "getOrderByIdConsumer",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_addr",
					"type": "address"
				},
				{
					"internalType": "int256",
					"name": "_oid",
					"type": "int256"
				}
			],
			"name": "getOrderByIdProducer",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_addr",
					"type": "address"
				},
				{
					"internalType": "int256",
					"name": "_pid",
					"type": "int256"
				}
			],
			"name": "getProductbyId",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				},
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "int256",
					"name": "_pid",
					"type": "int256"
				}
			],
			"name": "getProductById",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_addr",
					"type": "address"
				}
			],
			"name": "getTotalOrder",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getTotalOrder",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_addr",
					"type": "address"
				}
			],
			"name": "getTotalProduct",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getTotalProduct",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_addr",
					"type": "address"
				}
			],
			"name": "isProducerRegistered",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"name": "orders",
			"outputs": [
				{
					"internalType": "int256",
					"name": "id",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "product_id",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "quantity",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "customer_name",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "status",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "delivery_address",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "customer_address",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "producers",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"name": "products",
			"outputs": [
				{
					"internalType": "int256",
					"name": "id",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "price",
					"type": "int256"
				},
				{
					"internalType": "int256",
					"name": "quantity",
					"type": "int256"
				},
				{
					"internalType": "string",
					"name": "product_name",
					"type": "string"
				},
				{
					"internalType": "address",
					"name": "producer_address",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalOrder",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalProduct",
			"outputs": [
				{
					"internalType": "int256",
					"name": "",
					"type": "int256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		}
	
	
];

var address = "0x4EB8fA580b0b9DA121676a2Ad84BC913a0116739";

web3 = new Web3(web3.currentProvider);
var contract = new web3.eth.Contract(abi, address);
console.log("blockchain connected")

$(document).ready(function () {

contract.methods.getTotalProduct().call().then(function (totalProduct) {
    console.log("totalProduct : " + totalProduct);
    $("#_products_table").html(totalProduct);

    for (var i = 1; i <= totalProduct; i++) {
        contract.methods.getProductById(i).call().then(function (productDetails) {
            console.log(productDetails);
            var row = "<tr><th>" + productDetails[0] + "</th><td>" + productDetails[3] + "</td><td>" + productDetails[1] + "</td><td>" + productDetails[2] + "</td><td><button type=\"button\" class=\"btn btn-secondary btn-sm\" onclick=\"productOrderClick(" + productDetails[0] + ")\">Order</button></td></tr>";
            $("#_product_table").find('tbody').append(row);
        });
    }
});


web3.eth.getAccounts().then(function (accounts) {
    var account = accounts[0];


    contract.methods.getTotalOrder(account).call().then(function (totalOrder) {
        console.log("totalOrder : " + totalOrder);
        $("#_track").html(totalOrder);
    });

    contract.methods.getTotalOrder().call().then(function (totalOrder) {
        console.log("totalOrder (global) : " + totalOrder);

        for (var index = 1; index <= totalOrder; index++) {
            contract.methods.getOrderByIdConsumer(account, index).call().then(function (orderDetails) {
                console.log(orderDetails);
                if (orderDetails[3]) {
                    var row = "<tr><th scope=\"row\">" + orderDetails[0] + "</th><td>" + orderDetails[2] + "</td><td>" + orderDetails[1] + "</td></tr>";
                    $("#_order_table").find('tbody').append(row);
                }
            });
        }
    });



});


$("#_orderbtn").click(function () {
    web3.eth.getAccounts().then(function (accounts) {
        var account = accounts[0];
        var pid = $("#_pid").val();
        var quantity = $("#_quantity").val();
        var cname = $("#_cname").val();
        var caddress = $("#_caddress").val();
        console.log("place order : " + pid + quantity + cname + caddress);

        return contract.methods.placeAnOrder(pid,quantity,cname, caddress).send({ from: account });
    }).then(function (trx) {
        console.log(trx);
        if (trx.status) {
            alert("Order is placed!");
            $("#_pid").val("");
            $("#_quantity").val("");
            $("#_cname").val("");
            $("#_caddress").val("");
            location.reload();
        }

    });
});


});

function productOrderClick(productId) {
console.log("order click : " + productId);
$("#_pid").val(productId);
}
