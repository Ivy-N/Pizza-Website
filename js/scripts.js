
    //business logic
    function Delivery(name, address) {
      this.name = name;
      this.address = address;
      this.pizzas = [];
    }

    function Pizza(size, crust, toppings) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
    }

    Delivery.prototype.deliveryDetails = function() {
      return this.name +"'s order";
    }

    Pizza.prototype.fullOrder = function() {
      return "Size: "+ this.size + ". Crust: " + this.crust + ". Toppings: " + this.toppings;
    }

    var cost=function(size, crust, toppings){
      return costOfSize+costOfCrust+costOfToppings
    }


    function resetFields() {
        $("input#new-name").val("");
        $("input#new-address").val("");
        $("input.new-size").val("");
        $("input.new-crust").val("");
        $("input.new-toppings").val("");
    }

    // user interface logic

    //for viewing menu
    jQuery(document).ready(function(){
  $(".clickable").click(function(){
    $("#menushowing").slideToggle(4000);
    $("#menuhidden").slideToggle();
  });
});

//alert button
jQuery(document).ready(function(){
$("button#yes").click(function() {
    alert ("The delivery charge will be 200shillings");
    prompt ("Please enter your address:");
    alert("Your order will be delivered to your location");
    });
  });

//for displaying choices selected
    $(document).ready(function() {

      $("#add-pizza").click(function() {
        $("#new-pizzas").append('<div class="new-pizza">' +
                                    '<div class="form-group">'+
                                     '<label for="new-size">Size (small, medium, large)</label>'+
                                     '<input type="text" class="form-control" id="new-size">'+
                                   '</div>'+
                                   '<div class="form-group">'+
                                     '<label for="new-crust">Crust(Crispy, Stuffed, Gluten-free)</label>'+
                                     '<input type="text" class="form-control" id="new-crust">'+
                                   '</div>'+
                                   '<div class="form-group">'+
                                     '<label for="new-toppings">Toppings (mushrooms, bacon, tomatoes)</label>'+
                                     '<input type="text" class="form-control new-toppings">'+
                                   '</div>'+
                                 '</div>');
      });

      $("form#new-pikaPizza").submit(function(event) {
        event.preventDefault();

        var inputtedName = $("input#new-name").val();
        var inputtedAddress = $("input#new-address").val();
        var newDelivery = new Delivery(inputtedName, inputtedAddress);

        $(".new-pizza").each(function() {
          var inputtedSize = $(this).find("input.new-size").val();
          var inputtedCrust = $(this).find("input.new-crust").val();
          var inputtedToppings = $(this).find("input.new-toppings").val();
          var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings)
          newDelivery.pizzas.push(newPizza)
        });

        $("ol#deliveries").append("<li><span class='delivery'>" + newDelivery.deliveryDetails() + "</span></li>");

        $(".delivery").last().click(function() {
          $("#show-delivery").show();
          $("#show-delivery h2").text(newDelivery.deliveryDetails());
          $(".nameResponse").text(newDelivery.name);
          $(".addressResponse").text(newDelivery.address);
          $("ol#pizzas").text("");
          newDelivery.pizzas.forEach(function(pizza) {
            $("ol#pizzas").append("<li>" + pizza.fullOrder() + "</li>");
          });
        });

        resetFields();

      });
    });
