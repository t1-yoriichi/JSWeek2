function functionOk()
{
    var hk1 = parseInt(document.getElementById('s1').value);
    var hk2 = parseInt(document.getElementById('s2').value);
    var yy = document.getElementById('year');
    var value = yy[yy.selectedIndex].value;

    var result;
    if ( value == 1 ) result = ((hk1 + (hk2*3))/3);
    else if ( value == 2 ) result = ((hk1 + (hk2*3))/4);
    else if ( value == 3 ) result = ((hk1 + (hk2*3))/5);
    document.getElementById("sum").value = result;
}
function functionCancel()
{
    document.getElementById("s1").value = " ";
    document.getElementById("s2").value = " ";
    document.getElementById("sum").value = " ";
}