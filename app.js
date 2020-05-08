$(()=>{
   
let $Result = 0;

const add = () => {
   $Result += parseInt($('.input').val())  ;
    $('#result').empty();
    $('#result').append($Result);
   
};

const sub = () => {
      $Result -= parseInt($('.input').val())  ;
    $('#result').empty();
    $('#result').append($Result);
};

$('#add').on('click',add);
$('#subtract').on('click', sub);

})