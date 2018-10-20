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

   function plane2() {
     var plane2 = '{"name": "plane", "time": "5", "capacity" : "7", "cost":"500"}';

      plane2 = JSON.parse(plane2);
      $('#re2_tupe').text(plane2.name);
      $('#re2_cost').text(plane2.cost);
      $('#re2_capacity').text(plane2.capacity);
      $('#re2_time').text(plane2.time);
    }
    function ship2() {
      var ship2 = '{"name": "pla", "time": "5", "capacity" : "7", "cost":"500"}';
       ship2 = JSON.parse(ship2);
       $('#re2_tupe').text(ship2.name);
       $('#re2_cost').text(ship2.cost);
       $('#re2_capacity').text(ship2.capacity);
       $('#re2_time').text(ship2.time);

     }
     function helicopter2() {
       var helicopter2 = '{"name": "p", "time": "5", "capacity" : "7", "cost":"500"}';
        helicopter = JSON.parse(helicopter2);
        $('#re2_tupe').text(helicopter2.name);
        $('#re2_cost').text(helicopter2.cost);
        $('#re2_capacity').text(helicopter2.capacity);
        $('#re2_time').text(helicopter2.time);
      }
