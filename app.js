$(()=>{
   
let $Result = 0;

const add = () => {
   $Result += parseInt($('.input').val())  ;
    $('#result').empty();
    $('#result').append($Result);
   if(parseInt($Result) < 0){
       $('#result').css('color', 'red');
   }else{
       $('#result').css('color', 'black');
   }
};

const sub = () => {
      $Result -= parseInt($('.input').val())  ;
    $('#result').empty();
    $('#result').append($Result);
    if(parseInt($Result) < 0){
        $('#result').css('color', 'red');
    }else{
        $('#result').css('color', 'black');
    }
};

$('#add').on('click',add);
$('#subtract').on('click', sub);

})


