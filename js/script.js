//wpisywanie liczb

function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

//funkcja dla "C" - kasuje całe wprowadzone wyrażenie

function cancel(){

    document.form.textview.value = "";
}

//funcja "CE" - pozwala na wprowadzenie cyfry od nowa(-1 cyfra dla calego stringa)

function backspace(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length-1);

}

//funkcja equal(=) oraz operacje na liczbach z przecinkami
//dla takich operacji mozna skorzystac z funkcji eval()

function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
  }
}
