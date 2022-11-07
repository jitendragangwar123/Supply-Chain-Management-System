// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.8.0;

contract MyContract{                       //create a contract
    int public totalProduct = 0;          //initialize the totalProduct as 0
    int public totalOrder = 0;            //initialize the totalOrder as 0
    mapping(address => string) public producers;      //it stores the name and address of the wallet of producer
    mapping(int=>product) public products;            //it stores the count of orders form the product structure
    
    struct product{                       //create a structure for the product
        int id;                           //stores the id,price,quantity,product name,and producer address
        int price;
        int quantity;
        string product_name;
        address producer_address;
    }
   
    mapping(int => order) public orders;        //it stores the count of orders from the order structure
    struct order{                               //create a structure for order
        int id;                                 //stores the order id ,product id,quantity,name of the customer,ststus,customer wallet address
        int product_id;
        int quantity;
        string customer_name;
        string status;
        string delivery_address;
        address customer_address;
    }
   
    modifier registerNewProducerAuth() {                          // Checks the authentication for newly registration 
        require(bytes(producers[msg.sender]).length == 0);        //if already registered then duplicate registration not valid  
        _;
    }
    
    modifier addNewProductAuth() {                                // checks the authentication for adding the new product 
                                                                  
        require(bytes(producers[msg.sender]).length > 0);       //only registered producer can add the products 
        _;
    }
    
    function getTotalProduct() view public returns (int) {           //This function returns total product for consumer and Producer
        return totalProduct;
    }
    
    function getTotalOrder() view public returns (int) {               //This function returns total order for consumer and Producer
        return totalOrder;
    }
    
    function isProducerRegistered(address _addr) view public returns (bool) {     // function checks if any producer is registered or not 
        if(bytes(producers[_addr]).length == 0){                                  
            return (false);                                                 //if string length 0 means no one registered  and return false and shown on the main page for the registration     
        }else{
            return (true);                                                  //if already registered then it return true and not  shown on the main page 
        }
    }
    
    function registerNewProducer(string memory _name) public registerNewProducerAuth {     //function checks wallet address of registered producers and store the name of the producers
        producers[msg.sender] = _name;                                                     //check the authentication first 
    }
    
    function addNewProductsInList(string memory _pname, int _price, int _quantity) public addNewProductAuth {   //Function used for add new products by producer after authentication
        totalProduct += 1;
        products[totalProduct] = product(totalProduct, _price, _quantity, _pname, msg.sender);  //take the totalproduct as a key and return the total product ,price,quantity and product name
    }
    
    function getTotalProduct(address _addr) view public returns (int) {    // function counts the number of products and returns the counter
        int counter = 0;
        for(int i=1; i<=totalProduct;i++){
            if(products[i].producer_address == _addr){        //check the condition if producer address matched than increment he counter and return the counter
                counter++;
            }
        }
        return (counter);
    }
    
    function getProductbyId(address _addr, int _pid) view public returns (int, int, int, string memory, bool) {  //function gets product Id and wallet address of producer as parameter and returns order details
        
        require(_pid <= totalProduct);                    //check the pid compared with totalProduct
        
        if(products[_pid].producer_address == _addr){    //match the given pid and producer_address with the given address,if it is matched then it returns the product id ,price,quantity and product name 
                                                         
            return (products[_pid].id, products[_pid].price, products[_pid].quantity, products[_pid].product_name, true);
        }
        return (0,0, 0, "", false);                     //if it is not matched then it returns false
    }
    
    function newPrice(int _pid, int _newPrice) public {            //function used for changed the price of given product it takes pid and  new price as a parameter
        require(products[_pid].producer_address == msg.sender);    //check if pid and producer address matched than 
        products[_pid].price = _newPrice;                         //it update  the value of products  
    }
    
    function getMyTotalOrder(address _addr) view public returns (int) {  // Function counts number of total orders and returns the counter
        int counter = 0;
        for(int i=1; i<=totalOrder; i++){
            if(products[orders[i].product_id].producer_address == _addr){    //match the product id and producer address with given address 
                                                                             //if it is matched then increments in the counter
                counter++;
            }
        }
        return (counter);                                       //teurn the counter means total product on my Side
    }
    
    function getOrderByIdProducer(address _addr,int _oid) view public returns(int,int,int,string memory,string memory,string memory, bool) {    //function returns order details for displaying the orders for Producer's page 
                                                                                                                                                //Details on producer's page are more than Consumer's Page 
                                                                                                                                                //it returns Order ID,Product ID,Quantity,Consumer's Name,Delivery Address,Status
         require(_oid <= totalOrder);
         if(products[orders[_oid].product_id].producer_address==_addr){     //match the product id and producer address with the given address 
                                                                            //if it is matched then it returns order id ,product id,quantity,customer name,order status and delivery address
             return (orders[_oid].id, orders[_oid].product_id, orders[_oid].quantity, orders[_oid].customer_name, orders[_oid].status, orders[_oid].delivery_address, true);
         }
         return (0,0,0,"","","",false); //otherwise it returns false
    }
    
    function giveOrderItsStatus(int _oid, string memory _status) public {     //function takes status given from producer's page and assign that status to that order as Accepted or Rejected
        require(products[orders[_oid].product_id].producer_address == msg.sender);
        orders[_oid].status = _status;
    }
    
    function getProductById(int _pid) view public returns (int, int, int, string memory) {   // Consumer Side
        require(_pid <= totalProduct);
        return (products[_pid].id, products[_pid].price, products[_pid].quantity, products[_pid].product_name);
    }
    
    function placeAnOrder(int _pid, int _quantity,string memory _cname, string memory _daddress) public {    //function takes product Id, delivery address, quantity as parameter and adds new order and increments totalorder counter by 1
        require(products[_pid].quantity >= _quantity);
        
        totalOrder += 1;
        orders[totalOrder] = order(totalOrder, _pid, _quantity, _cname, "Placed", _daddress, msg.sender);
        products[_pid].quantity -= _quantity;
    }
    
    function getTotalOrder(address _addr) view public returns (int) {    //This function counts the number of total orders of a consumer and returns the counter
        int counter = 0;
        for(int i=1; i <= totalOrder; i++){
            if(_addr == orders[i].customer_address){
                counter++;
            }
        }
        return (counter);
    }
    
    
    //This function returns order details for displaying the orders for Consumer's page 
    //Details on consumer's page are less than producer's Page 
    //it returns Order ID,Delivery Address,Status
    
    function getOrderByIdConsumer(address _addr, int _oid) view public returns (int,string memory, string memory, bool){
        require(_oid <= totalOrder);
            if(_addr==orders[_oid].customer_address){
                return (orders[_oid].id, orders[_oid].status, orders[_oid].delivery_address, true);
            }
        return (0, "", "", false);
    }

}
