var total = 0;
var plus = 0;
var minus = 0;
var diff;
var z = 0;
var array = [];
var y = '';
var x = '';
var check = 0;

function main() {
    diff = document.querySelector('#plus-minus').value;
    var content = document.querySelector('#val').value;
    var text = document.querySelector('#txt').value;
    if (diff == '+' && !isNaN(parseInt(content))) {
        document.querySelector('#content-0').innerHTML += '<tr><td>' + text + ':&nbsp₹' + content + '<button class="btn btn-default cross-0" style="border-radius:50%;margin-left:300px;">x</button></td></tr>';
        plus += parseInt(content);
        total = total + parseInt(content);

    } else if (diff == '-' && !isNaN(parseInt(content))) {
        if (total > 0) {
            document.querySelector('#content-1').innerHTML += '<tr><td>' + text + ':&nbsp₹' + content + '<button class="btn btn-default cross-1" style="border-radius:50%;margin-left:300px;">x</button></td></tr>';
            minus += parseInt(content);
            total = total - parseInt(content);
        }
    }
    add();
}
document.querySelector('.button').addEventListener('click', main);

function add() {
    document.querySelector('#tot').innerHTML = total;
    document.querySelector('#pl').innerHTML = plus;
    document.querySelector('#mi').innerHTML = minus;
}
$(document).ready(function() {
    $(document).on("click", ".cross-0", function() {
        $(this).parent().remove();
        var z = $(this).parent().text();
        var k = 0;
        var j = 0;
        for (var i = 0; i < z.length; i++) {
            if (z[i] == "₹") {
                j = i;
                while (j != z.length - 2) {
                    array[k] = z[j + 1];
                    k++;
                    j++;
                }
            }
        }
        for (var i = 0; i < array.length; i++)
            y += array[i];
        total -= parseInt(y);
        plus -= parseInt(y);
        y = '';
        add();
    });
});
$(document).ready(function() {
    $(document).on("click", ".cross-1", function() {
        $(this).parent().remove();
        var z = $(this).parent().text();
        var k = 0;
        var j = 0;
        for (var i = 0; i < z.length; i++) {
            if (z[i] == "₹") {
                j = i;
                while (j != z.length - 2) {
                    array[k] = z[j + 1];
                    k++;
                    j++;
                }
            }
        }
        for (var i = 0; i < array.length; i++)
            y += array[i];
        total += parseInt(y);
        minus -= parseInt(y);
        y = '';
        add();
    });
});