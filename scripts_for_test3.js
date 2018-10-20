function plane() {
  var plane = '{"name": "Самолет №1", "time": "2", "capacity" : "12", "cost":"160"}';

   plane = JSON.parse(plane);
   $('#re1_tupe').text(plane.name);
   $('#re1_cost').text(plane.cost);
   $('#re1_capacity').text(plane.capacity);
   $('#re1_time').text(plane.time);

   var plane2 = '{"name": "Самолет №2", "time": "2", "capacity" : "8", "cost":"120"}';

    plane2 = JSON.parse(plane2);
    $('#re2_tupe').text(plane2.name);
    $('#re2_cost').text(plane2.cost);
    $('#re2_capacity').text(plane2.capacity);
    $('#re2_time').text(plane2.time);

    var plane3 = '{"name": "Самолет №3", "time": "3", "capacity" : "11", "cost":"130"}';

     plane3 = JSON.parse(plane3);
     $('#re3_tupe').text(plane3.name);
     $('#re3_cost').text(plane3.cost);
     $('#re3_capacity').text(plane3.capacity);
     $('#re3_time').text(plane3.time);

 }
 function ship() {
   var ship = '{"name": "Катер №1", "time": "7", "capacity" : "8", "cost":"125$"}';
    ship = JSON.parse(ship);
    $('#re1_tupe').text(ship.name);
    $('#re1_cost').text(ship.cost);
    $('#re1_capacity').text(ship.capacity);
    $('#re1_time').text(ship.time);

    var ship2 = '{"name": "Катер №2", "time": "7", "capacity" : "9", "cost":"145$"}';
     ship2 = JSON.parse(ship2);
     $('#re2_tupe').text(ship2.name);
     $('#re2_cost').text(ship2.cost);
     $('#re2_capacity').text(ship2.capacity);
     $('#re2_time').text(ship2.time);

     var ship3 = '{"name": "Катер №3", "time": "6", "capacity" : "8", "cost":"155"}';
        ship3 = JSON.parse(ship3);
        $('#re3_tupe').text(ship3.name);
        $('#re3_cost').text(ship3.cost);
        $('#re3_capacity').text(ship3.capacity);
        $('#re3_time').text(ship3.time);

  }
  function helicopter() {
    var helicopter = '{"name": "Вертолет №1", "time": "2", "capacity" : "6", "cost":"170"}';
     helicopter = JSON.parse(helicopter);
     $('#re1_tupe').text(helicopter.name);
     $('#re1_cost').text(helicopter.cost);
     $('#re1_capacity').text(helicopter.capacity);
     $('#re1_time').text(helicopter.time);

     var helicopter2 = '{"name": "Вертолет №2 ", "time": "2", "capacity" : "5", "cost":"150"}';
      helicopter = JSON.parse(helicopter2);
      $('#re2_tupe').text(helicopter2.name);
      $('#re2_cost').text(helicopter2.cost);
      $('#re2_capacity').text(helicopter2.capacity);
      $('#re2_time').text(helicopter2.time);
      var helicopter3 = '{"name": "Вертолет №3", "time": "3", "capacity" : "5", "cost":"200"}';
         helicopter3 = JSON.parse(helicopter3);
         $('#re3_tupe').text(helicopter3.name);
         $('#re3_cost').text(helicopter3.cost);
         $('#re3_capacity').text(helicopter3.capacity);
         $('#re3_time').text(helicopter3.time);
}
