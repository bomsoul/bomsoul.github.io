$(document).ready(function(){
    $('#transcript').click(function(){
        $('.ui.basic.modal').modal('show');
    })
    $('.tabular.menu .item').tab({history:false});
    $(window).scroll(function() {
        var hT = $('#skill-bar-wrapper').offset().top,
            hH = $('#skill-bar-wrapper').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-1.4*wH)){
            jQuery(document).ready(function(){
                jQuery('.skillbar-container').each(function(){
                    jQuery(this).find('.skills').animate({
                        width:jQuery(this).attr('data-percent')
                    }, 5000); // 5 seconds
                });
            });
        }
     });
     (function(i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function() {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
  
      ga("create", "UA-87734989-1", "auto");
      ga("send", "pageview");

    $('.ui.dropdown').dropdown({
        onChange: function(value,text,$selectedItem){
            console.log(typeof(value))
            console.log(value !== "0")
            if(value !== "0"){
                $.getJSON("work.json",function(data){
                    var set_data ="";
                    $.each(data,function(){
                        if(value == this.select){
                            if(this.status === "In progress..." || this.status === "-" || this.status ==='Completed'){
                                set_data += '<div class="item">'+
                                '<div class="ui small image">'+
                                    '<img src="'+this.path+'">'+
                                '</div>'+
                                '<div class="content">'+
                                    '<div class="header">'+this.name+'</div>'+
                                    '<div class="meta">'+
                                        '<span class="price">'+this.status+'</span>'+
                                        '<span class="stay">'+this.year+'</span>'+
                                    '</div>'+
                                    '<div class="description">'+
                                        this.description+
                                    '</div>'+
                                    '<div class="ui label">'+this.role+'</div>'+
                                '</div>'+
                            '</div>'
                            }
                            else{
                                set_data += '<div class="item">'+
                                '<div class="ui small image">'+
                                    '<img src="'+this.path+'">'+
                                '</div>'+
                                '<div class="content">'+
                                    '<div class="header">'+this.name+'</div>'+
                                    '<div class="meta">'+
                                        '<span class="price">'+'<a href="'+this.status+'">'+this.status+'</a></span>'+
                                        '<span class="stay">'+this.year+'</span>'+
                                    '</div>'+
                                    '<div class="description">'+
                                        this.description+
                                    '</div>'+
                                    '<div class="ui label">'+this.role+'</div>'+
                                '</div>'+
                            '</div>'
                            }
                        }
                    })
                    $('.ui.divided.items.ii').html(set_data);
                })
            }
            else{
                $.getJSON("work.json",function(data){
                    var set_data=""
                    $.each(data,function(){
                            if(this.status === "In progress..." || this.status === "-" || this.status ==='Completed'){
                                set_data += '<div class="item">'+
                                '<div class="ui small image">'+
                                    '<img src="'+this.path+'">'+
                                '</div>'+
                                '<div class="content">'+
                                    '<div class="header">'+this.name+'</div>'+
                                    '<div class="meta">'+
                                        '<span class="price">'+this.status+'</span>'+
                                        '<span class="stay">'+this.year+'</span>'+
                                    '</div>'+
                                    '<div class="description">'+
                                        this.description+
                                    '</div>'+
                                    '<div class="ui label">'+this.role+'</div>'+
                                '</div>'+
                            '</div>'
                            }
                            else{
                                set_data += '<div class="item">'+
                                '<div class="ui small image">'+
                                    '<img src="'+this.path+'">'+
                                '</div>'+
                                '<div class="content">'+
                                    '<div class="header">'+this.name+'</div>'+
                                    '<div class="meta">'+
                                        '<span class="price">'+'<a href="'+this.status+'">'+this.status+'</a></span>'+
                                        '<span class="stay">'+this.year+'</span>'+
                                    '</div>'+
                                    '<div class="description">'+
                                        this.description+
                                    '</div>'+
                                    '<div class="ui label">'+this.role+'</div>'+
                                '</div>'+
                            '</div>'
                            }
                        })
                    $('.ui.divided.items.ii').html(set_data);
                    })
                }
            }
        })

        $.getJSON('activity.json',function(data){
            var set_data = ""
            $.each(data,function(){
                set_data += '<div class="item">'+
                '<div class="ui small image">' +
                    '<img src="'+this.path+'">' +
                '</div>'+
                '<div class="content">'+
                    '<div class="header">'+ this.name+'</div>' +
                    '<div class="meta">'+
                        '<span class="stay">'+this.year+'</span>' +
                    '</div>'+
                    '<div class="description">'+
                        this.description+
                    '</div>'+
                '</div>'+
            '</div>'
            })
            $('.ui.divided.items.iii').html(set_data);
        })

        $.getJSON('certificate.json',function(data){
            var set_data= ""
            var id = [];
            $.each(data,function(){
                console.log(this.number);
                set_data += 
                 '<div class="item">' +
                    '<div class="image">' +
                        '<img src="'+ this.path+'">' +
                    '</div>'+
                    '<div class="content">' +
                        '<a class="header">'+this.name+'</a>' +
                        '<div class="meta">' +
                            '<span class="cinema">'+this.year+'</span>' +
                        '</div>' +
                        '<div class="description">' +
                            '<p>'+this.description+'</p>' +
                        '</div>' +
                        '<div class="extra">' +
                            '<div id = "'+this.number+'" class="ui right floated green button hid">' +
                                'See Certificate&nbsp;' +
                                '<i class="fas fa-certificate"></i>' +
                            '</div>' +
                        '</div>' +
                        '<div class="ui modal '+this.number+'">' +
                            '<div class="ui icon header">' +
                                '<i class="fas fa-certificate"></i>&nbsp' +
                                this.name +
                            '</div>' +
                            '<div class="content">' +
                                '<img class="ui fluid image" src="'+this.path+'">' +
                            '</div>' +
                            '<div class="actions">' +
                                '<div class="ui red ok inverted button">' +
                                    '<i class="fas fa-times"></i>' +
                                        '&nbsp;Close' +
                                '</div>' +
                            '</div>' +
                        '</div>' + 
                    '</div>' +
                '</div>';
                id.push(this.number);
                console.log(this.number);
            })
            $('.ui.divided.items.iv').html(set_data);
            id.forEach(element => {
                var item_id = "#" + element ;
                $(item_id.toString()).click(function(){
                    var cla = '.ui.modal.' + element 
                    $(cla.toString()).modal('show');
                })
            });
        })
        
});
