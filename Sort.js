/**
 * Created by Алина on 07.03.2016.
 */
    //Разбиение на итерации, пошаговое выполнение через 1 сек
var mainDiv = document.getElementById('mainDiv');

function Sort(str) {
    var imputData = str.split(",");
    for (var i = 0; i < imputData.length; i++)
          imputData[i] = parseInt(imputData[i]);

    var div = [];
    for(i=0; i<imputData.length; i++) {
        div[i] = document.createElement('div');
        div[i].style = "font-size: 15px;" +
            "border: 1px solid #000;" +
            "width: 30px; " +
            "height:30px;" +
            "float:left;" +
            "padding-top:5px;" +
            "box-sizing: border-box;";

        div[i].innerHTML =  imputData[i];
        mainDiv.appendChild(div[i]);
    }

    i=1;
    j=imputData.length-1;
    setTimeout(
        (function My(j, i, iter){
            if(iter==3){
                if (i != 1){div[i - 2].style.backgroundColor = "#ffffff";}
                div[i - 1].style.backgroundColor = "#ffc100";
                div[i].style.backgroundColor = "#ffc100";

                changeDiv (i);
                setTimeout(My.bind(null, j, i, 2), 1000);
            }
            if(iter==2){
                if(imputData[i] < imputData[i-1]){
                    var temp = imputData[i];
                    imputData[i] = imputData[i-1];
                    imputData[i-1] = temp;

                    div[i-1].style.backgroundColor = "red" ;    div[i].style.backgroundColor = "red" ;
                    changeDiv (i);

                    setTimeout(My.bind(null, j, i, 1), 1000);
                }
                else My( j, i, 1);
            }
            if(iter==1){
                if(j>1){
                    i++;
                    if(i==j+1) {
                        div[j].style.backgroundColor  = "#c1c1c1";
                        div[j-1].style.backgroundColor  = "#fff";

                        changeDiv (j);

                        i = 1;
                        j--;
                    }
                    setTimeout(My.bind(null, j, i, 3), 1000);
                }
                else My( j, i, 0);

            }
            if(!iter)
            setTimeout(function(){div[1].style.backgroundColor  = "#c1c1c1"; div[0].style.backgroundColor  = "#c1c1c1";}, 1000);

        }).bind(null, j, 1, 3), 1000);

    function changeDiv (i){
        for(var k=i-2; k<=i; k++)
            if(k>=0){
                div[k].innerHTML = '' + imputData[k];
                mainDiv.removeChild(div[k]);
                mainDiv.insertBefore(div[k], mainDiv.children[k]);
            }
    }


}


