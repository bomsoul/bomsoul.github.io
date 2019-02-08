$(document).ready(function() {
    $('#advance-search').hide();
    $.ajax({
        url: "data.json",
        dataType: "json"
        }).done(function(response) {
            console.log(response);
            var x = "";
            response.forEach(element => {
            console.log(element.brand,element.Battery);
            x +="<tr>";
            x +="<td>"+element.brand+"</td>"+
                "<td>"+element.name+"</td>"+
                "<td>"+element.price+"</td>"+
                "<td>"+element.LensKit+"</td>"+
                "<td>"+element.Battery+"</td>"+
                "<td>"+element.type+"</td>"+
                "<td>"+element.sensor+"</td></tr>";
                $('#item-body').html(x);
        }
    )});
        /*set brand on advance search*/
    $.ajax({
        url: "data.json",
        dataType: "json"
        }).done(function(response) {
            var x = "";
            var brand =[];
            response.forEach(element => {
                if(jQuery.inArray(element.brand,brand) ==-1){
                    brand.push(element.brand);
                    x +="<option>"+element.brand+"</option>";
                }
            })
            $('#brand-selector').html(x);
        }
    );
    $.ajax({
        url: "data.json",
        dataType: "json"
        }).done(function(response) {
            var x = "";
            var type =[];
            response.forEach(element => {
                if(jQuery.inArray(element.type,type) ==-1){
                    type.push(element.type);
                    x +="<option>"+element.type+"</option>";
                }
            })
            $('#type-selector').html(x);
        }
    );
    $('#search-btn').click(function() {
        $.ajax({
            url: "data.json",
            dataType: "json"
            }).done(function(response){
            var show = $('#search-bar').val();
            var x ="";
            if(show == ""){
                response.forEach(element => {
                x +="<tr>";
                x +="<td>"+element.brand+"</td>"+
                    "<td>"+element.name+"</td>"+
                    "<td>"+element.price+"</td>"+
                    "<td>"+element.LensKit+"</td>"+
                    "<td>"+element.Battery+"</td>"+
                    "<td>"+element.type+"</td>"+
                    "<td>"+element.sensor+"</td></tr>";
                    $('#item-body').html(x);
                    $('p#warning').text("");
                })
            }
            else{
                var check = false;
                response.forEach(element => {
                    if(element.brand.toLowerCase().includes(show.toLowerCase())||element.name.toLowerCase().includes(show.toLowerCase())){
                        check = true;
                        x +="<tr>";
                        x +="<td>"+element.brand+"</td>"+
                            "<td>"+element.name+"</td>"+
                            "<td>"+element.price+"</td>"+
                            "<td>"+element.LensKit+"</td>"+
                            "<td>"+element.Battery+"</td>"+
                            "<td>"+element.type+"</td>"+
                            "<td>"+element.sensor+"</td></tr>";
                            $('#item-body').html(x);
                            $('p#warning').text("");
                        }
                    }
                )
                if(!check){
                    $('p#warning').text("No camera match.");
                    $('#item-body').html("");
                }
            }
                $('#search-bar').val("");
        })
    });
    
    $('#advance-btn').click(function(){
        $('#advance-search').toggle();
    })
    
    $('#advance-btn-search').click(function(){
        var brand =$('#brand-selector').val();
        var type =$('#type-selector').val();
        var cost =0;
        if($('#price-selector').val()==""){
            cost = 100000;
            $('p#warning').text("");
            $.ajax({
                url: "data.json",
                dataType: "json"
                }).done(function(response){
                    var x ="";
                    var check = false;
                    response.forEach(element =>{
                        console.log(element.cost);
                        if(element.brand.includes(brand) && element.type.includes(type) && element.cost <= cost){
                            check = true;
                            x +="<tr>";
                            x +="<td>"+element.brand+"</td>"+
                                "<td>"+element.name+"</td>"+
                                "<td>"+element.price+"</td>"+
                                "<td>"+element.LensKit+"</td>"+
                                "<td>"+element.Battery+"</td>"+
                                "<td>"+element.type+"</td>"+
                                "<td>"+element.sensor+"</td></tr>";
                            $('#item-body').html(x);
                        }
                    })
                    if(check == false){
                        $('p#warning').text("No camera match.");
                        $('#item-body').html("");
                    }
                })
        }
        else if($.isNumeric($('#price-selector').val())){
            cost = parseInt($('#price-selector').val());
            $('p#warning').text("");
            $.ajax({
                url: "data.json",
                dataType: "json"
                }).done(function(response){
                    var x ="";
                    check = false;
                    response.forEach(element =>{
                        if(element.brand.includes(brand) && element.type.includes(type) && element.cost <= cost){
                            x +="<tr>";
                            check = true;
                            x +="<td>"+element.brand+"</td>"+
                                "<td>"+element.name+"</td>"+
                                "<td>"+element.price+"</td>"+
                                "<td>"+element.LensKit+"</td>"+
                                "<td>"+element.Battery+"</td>"+
                                "<td>"+element.type+"</td>"+
                                "<td>"+element.sensor+"</td></tr>";
                            $('#item-body').html(x);
                            $('p#warning').text("");
                        }
                    })
                    if(check == false){
                        $('p#warning').text("No camera match.");
                        $('#item-body').html("");
                    }
                })
        }else{
            $('p#warning').text("Price must be integer.");
            $('#price-selector').val("");
        }
    
    })
    
});
