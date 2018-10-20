function plane() {
  var b = '{"name": "plane", "time": "5", "cop" : "7", "coins":"500"}';
   b = JSON.parse(b);
   $('#re1_tupe').text(b.name);
   $('#re1_stoi').text(b.coins);
 }
