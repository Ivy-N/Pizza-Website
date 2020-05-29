
    //business logic
    function Delivery(name, delivery, address) {
      this.name = name;
      this.delivery = delivery;
      this.address = address;
      this.pizzas = [];
    }

    function Pizza(size, crust, toppings) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
    }

    Delivery.prototype.deliveryDetails = function() {
      return this.name +"'s order'";
    }

    Pizza.prototype.fullOrder = function() {
      return "Size: "+ this.size + ". Crust: " + this.crust + ". Toppings: " + this.toppings;
    }

    function resetFields() {
        $("input#new-name").val("");
        $("input#new-delivery").val("");
        $("input#new-address").val("");
        $("input.new-size").val("");
        $("input.new-crust").val("");
        $("input.new-toppings").val("");
    }

    // user interface logic
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
        var inputtedDelivery = $("input#new-delivery").val();
        var inputtedAddress = $("input#new-address").val();
        var newDelivery = new Delivery(inputtedName, inputtedDelivery, inputtedAddress);

        $(".new-pizza").each(function() {
          var inputtedSize = $(this).find("input.new-size").val();
          var inputtedCrust = $(this).find("input.new-crust").val();
          var inputtedToppings = $(this).find("input.new-toppings").val();
          var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedToppings)
          newDelivery.pizzas.push(newPizza)
        });

        $("ul#deliveries").append("<li><span class='delivery'>" + newDelivery.deliveryDetails() + "</span></li>");

        $(".delivery").last().click(function() {
          $("#show-delivery").show();
          $("#show-delivery h2").text(newDelivery.deliveryDetails());
          $(".nameResponse").text(newDelivery.name);
          $(".deliveryResponse").text(newDelivery.delivery);
          $(".addressResponse").text(newDelivery.address);
          $("ul#pizzas").text("");
          newDelivery.pizzas.forEach(function(pizza) {
            $("ul#pizzas").append("<li>" + pizza.fullOrder() + "</li>");
          });
        });

        resetFields();

      });
    });
