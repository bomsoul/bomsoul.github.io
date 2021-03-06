$(document).ready(function() {
    $('#advance-search').hide();

    $('#advance-btn').click(function(){
        $('#advance-search').toggle();
    });

   $.getJSON("data.json", function(data) {
        var tbl_body = "";
        $.each(data, function() {
            var tbl_row = "";
            $.each(this, function(k , v) {
                if(k != "cost")
                    tbl_row += "<td>"+v+"</td>";
            })
            tbl_body += "<tr>"+tbl_row+"</tr>";         
        })
        $("#item-body").html(tbl_body);
    });


    //Set Brand Selector choice Box
    $.getJSON("data.json",function(response) {
            var data = response;
            var x = "";
            var brand =[];
            for(var i = 0;i < data.length;i++){
                if(jQuery.inArray(data[i].brand,brand) ==-1){
                    brand.push(data[i].brand);
                    x +="<option>"+data[i].brand+"</option>";
                }
            }
            $('#brand-selector').html(x);
        }
    );
    //Set Type Selector choice Box
    $.getJSON("data.json",function(response) {
            var data = response;
            var x = "";
            var type =[];
            for(var i = 0;i < data.length;i++){
                if(jQuery.inArray(data[i].type,type) ==-1){
                    type.push(data[i].type);
                    x +="<option>"+data[i].type+"</option>";
                }
            }
            $('#type-selector').html(x);
        }
    );

    $('#search-bar').keydown(function() {
        $.getJSON("data.json",function(response){
                var data= response;
                var show = $('#search-bar').val();
                var x ="";
                if(show == ""){
                    for(var i = 0;i < data.length;i++) {
                    x +="<tr>";
                    x +="<td>"+data[i].brand+"</td>"+
                        "<td>"+data[i].name+"</td>"+
                        "<td>"+data[i].price+"</td>"+
                        "<td>"+data[i].LensKit+"</td>"+
                        "<td>"+data[i].Battery+"</td>"+
                        "<td>"+data[i].type+"</td>"+
                        "<td>"+data[i].sensor+"</td></tr>";
                    }
                    $('#item-body').html(x);
                    $('p#warning').text("");
                }
                else{
                    var check = false;
                    for(var i = 0;i <data.length;i++){
                        if(data[i].brand.toLowerCase().includes(show.toLowerCase())||data[i].name.toLowerCase().includes(show.toLowerCase())||
                        data[i].price.toLowerCase().includes(show.toLowerCase())||data[i].LensKit.toLowerCase().includes(show.toLowerCase())||
                        data[i].Battery.toLowerCase().includes(show.toLowerCase())||data[i].type.toLowerCase().includes(show.toLowerCase())||
                        data[i].sensor.toLowerCase().includes(show.toLowerCase())){
                            check = true;
                            x +="<tr>";
                            x +="<td>"+data[i].brand+"</td>"+
                                "<td>"+data[i].name+"</td>"+
                                "<td>"+data[i].price+"</td>"+
                                "<td>"+data[i].LensKit+"</td>"+
                                "<td>"+data[i].Battery+"</td>"+
                                "<td>"+data[i].type+"</td>"+
                                "<td>"+data[i].sensor+"</td></tr>";
                                $('#item-body').html(x);
                                $('p#warning').text("");
                        }
                    }
                    if(!check){
                        $('p#warning').text("No camera match.");
                        $('#item-body').html("");
                    }
                }
            }
        )}
    );


    //advance search
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
                    var data = response;
                    var x ="";
                    var check = false;
                    for(var i = 0;i < data.length;i++){
                        if(data[i].brand.includes(brand) && data[i].type.includes(type) && data[i].cost <= cost){
                            check = true;
                            x +="<tr>";
                            x +="<td>"+data[i].brand+"</td>"+
                                "<td>"+data[i].name+"</td>"+
                                "<td>"+data[i].price+"</td>"+
                                "<td>"+data[i].LensKit+"</td>"+
                                "<td>"+data[i].Battery+"</td>"+
                                "<td>"+data[i].type+"</td>"+
                                "<td>"+data[i].sensor+"</td></tr>";
                            $('#item-body').html(x);
                        }
                    }
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
                    var data = response;
                    var x ="";
                    check = false;
                    for(var i = 0;i < data.length;i++){
                        if(data[i].brand.includes(brand) && data[i].type.includes(type) && data[i].cost <= cost){
                            x +="<tr>";
                            check = true;
                            x +="<td>"+data[i].brand+"</td>"+
                                "<td>"+data[i].name+"</td>"+
                                "<td>"+data[i].price+"</td>"+
                                "<td>"+data[i].LensKit+"</td>"+
                                "<td>"+data[i].Battery+"</td>"+
                                "<td>"+data[i].type+"</td>"+
                                "<td>"+data[i].sensor+"</td></tr>";
                            $('#item-body').html(x);
                            $('p#warning').text("");
                        }
                    }
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

    
