var  medic=0;
var mahani=0;
var ycheni=0;
var ingener=0;
function a1_medic()  {
  medic++;
  $('#medik').text(medic);
}
function a2_medic()  {
  if (medic>=1) {
  medic--;
  $('#medik').text(medic);
}
}
function a1_mahanik() {
  mahani++;
  $('#mahanik').text(mahani);
}
function a2_mahanik() {
  if(mahani>=1) {
    mahani--;
    $('#mahanik').text(mahani);
}
}
function a1_ycheni() {
  ycheni++;
  $('#ycheni').text(ycheni);
}
function a2_ycheni() {
  if(ycheni>=1) {
  ycheni--;
  $('#ycheni').text(ycheni);
}
}
function a1_ingener() {
  ingener++;
  $('#ingener').text(ingener);
}
function a2_ingener() {
  if(ingener>=1) {
    ingener--;
    $('#ingener').text(ingener);
  }
}
function comant() {
    var comand=medic+mahani+ycheni+ingener;
    //alert(comand)
    $('#comand').text(comand);
}
