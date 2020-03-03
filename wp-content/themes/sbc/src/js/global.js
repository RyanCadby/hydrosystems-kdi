jQuery(function($) {

    function read_more(){
        var maxLength = 300;
        $(".service-desc").each(function(){
            var myStr = $(this).text();
            if($.trim(myStr).length > maxLength){
                var newStr = myStr.substring(0, maxLength);
                var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
                $(this).empty().html(newStr);
                $(this).append('<span class="more-text">' + removedStr + '</span>');
                $(this).append(' <a href="javascript:void(0)" class="read-more">read more <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></a>');

            }
        });


        $(".read-more").click(function(){
            if( $(this).hasClass('read-less') == 1){
                $(this).siblings(".more-text").removeClass('d-inline');
                $(this).addClass('read-more');
                $(this).removeClass('read-less');
                $(this).html('read more <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>');
            } else{
                $(this).siblings(".more-text").addClass('d-inline');
                $(this).addClass('read-less');
                $(this).removeClass('read-more');
                $(this).html('read less <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>');
            }
        });

    };
    read_more();




});