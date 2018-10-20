function plane() {
  var plane = '{"name": "plane", "time": "5", "capacity" : "7", "cost":"500"}';

   plane = JSON.parse(plane);
   $('#re1_tupe').text(plane.name);
   $('#re1_cost').text(plane.cost);
   $('#re1_capacity').text(plane.capacity);
   $('#re1_time').text(plane.time);
 }
 function ship() {
   var ship = '{"name": "pla", "time": "5", "capacity" : "7", "cost":"500"}';
    ship = JSON.parse(ship);
    $('#re1_tupe').text(ship.name);
    $('#re1_cost').text(ship.cost);
    $('#re1_capacity').text(ship.capacity);
    $('#re1_time').text(ship.time);

  }
  function helicopter() {
    var helicopter = '{"name": "p", "time": "5", "capacity" : "7", "cost":"500"}';
     helicopter = JSON.parse(helicopter);
     $('#re1_tupe').text(helicopter.name);
     $('#re1_cost').text(helicopter.cost);
     $('#re1_capacity').text(helicopter.capacity);
     $('#re1_time').text(helicopter.time);
   }
