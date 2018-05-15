$(function() {

//------------------------------гамбургер-----------------------------
	$('.hamburger--collapse').click(function() {
    $(this).toggleClass('is-active');
    $('.header__nav').toggleClass('header__nav-active');
  });

// //-------------------------скорость якоря---------------------------------------
//   $(".header__list").on("click","a", function (event) {
//       event.preventDefault();
//       var id  = $(this).attr('href'),
//           top = $(id).offset().top;
//       $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
//   });

//-------------------------------попандер---------------------------------------
  $('.modal').popup({transition: 'all 0.3s'});
//------------------------------------form-------------------------------------------
	$('input[type="tel"]').mask('+0 (000) 000-00-00');

	jQuery.validator.addMethod("phoneno", function(phone_number, element) {
	   return this.optional(element) || phone_number.match(/\+[0-9]{1}\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}/);
	}, "Введите Ваш телефон");

  $(".participation-form").validate({
    messages: {
      email: "Введите ваше mail",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        name: jQuery(".participation-form").find("input[name=email]").val(),
        phone: jQuery(".participation-form").find("input[name=phone]").val(),
        subject: jQuery(".participation-form").find("input[name=subject]").val()
      };
      ajaxSend('.participation-form', t);
    }
  });

  $(".bid-form").validate({
    messages: {
      email: "Введите ваше mail",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        email: jQuery(".bid-form").find("input[name=email]").val(),
        phone: jQuery(".bid-form").find("input[name=phone]").val(),
        subject: jQuery(".bid-form").find("input[name=subject]").val()
      };
      ajaxSend('.bid-form', t);
    }
  });

  $(".more-form").validate({
    messages: {
      email: "Введите ваше mail",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        email: jQuery(".more-form").find("input[name=email]").val(),
        phone: jQuery(".more-form").find("input[name=phone]").val(),
        subject: jQuery(".more-form").find("input[name=subject]").val()
      };
      ajaxSend('.bid-form', t);
    }
  });
  

  $(".access-form").validate({
    messages: {
      email: "Введите ваше mail",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        email: jQuery(".access-form").find("input[name=email]").val(),
        phone: jQuery(".access-form").find("input[name=phone]").val(),
        subject: jQuery(".access-form").find("input[name=subject]").val()
      };
      ajaxSend('.bid-form', t);
    }
  });



  $(".rate-form").validate({
    messages: {
      email: "Введите ваше mail",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        email: jQuery(".rate-form").find("input[name=email]").val(),
        phone: jQuery(".rate-form").find("input[name=phone]").val(),
        subject: jQuery(".rate-form").find("input[name=subject]").val()
      };
      ajaxSend('.bid-form', t);
    }
  });

  $(".rate2-form").validate({
    messages: {
      email: "Введите ваше mail",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        email: jQuery(".rate2-form").find("input[name=email]").val(),
        phone: jQuery(".rate2-form").find("input[name=phone]").val(),
        subject: jQuery(".rate2-form").find("input[name=subject]").val()
      };
      ajaxSend('.bid-form', t);
    }
  });

  $(".rate3-form").validate({
    messages: {
      email: "Введите ваше mail",
      phone: "Введите ваш телефон",
    },
    rules: {
      "phone": {
        required: true,
        phoneno: true
      }
    },
    submitHandler: function(form) {
      var t = {
        email: jQuery(".rate3-form").find("input[name=email]").val(),
        phone: jQuery(".rate3-form").find("input[name=phone]").val(),
        subject: jQuery(".rate3-form").find("input[name=subject]").val()
      };
      ajaxSend('.bid-form', t);
    }
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

//----------------------калькулятор-------------------------------------------------


  //-------------код валыдації цифр----------------------- видає тільки цифри---------------
  $("#cal").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }

      var max_chars = 6;

      $(this).keydown( function(e){
          if ($(this).val().length >= max_chars) { 
              $(this).val($(this).val().substr(0, max_chars));
          }
      });

      $(this).keyup( function(e){
          if ($(this).val().length >= max_chars) { 
              $(this).val($(this).val().substr(0, max_chars));
          }
      });
    });
 //------------------------------------ ---------------

  $('#cal').keyup(function(){
    var Value = $('#cal').val();

    var day = Math.round(Value * .1);
    $('#day').text(day);


    var month = Math.round(Value * 30);
    $('#month').text(month);

    var year = Math.round(Value * 365);
    $('#year').text(year);

    var all = Math.round(Value * 726);
    $('#all').text(all);
    
  });

//----------------------акардион-------------------------------------------------
    


    $(".block__header").on("click", function(){

      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $("p").slideUp("slow");
      }
      else {
        $(".active p").slideUp("slow");
        $(".active").removeClass('active');

        $(this).parent().addClass('active');
        $(".active p").slideDown("slow");
      }
    });

    
});

//----------------------------------------fixed----------------------------------
$(window).scroll(function(){
    if($(this).scrollTop()>5){
        $('.header__top').addClass('header__top-active');
    }
    else if ($(this).scrollTop()<5){
        $('.header__top').removeClass('header__top-active');
    }
});

//----------------------------------------preloader----------------------------------

$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut('slow');
});

//-------------------------------------------паралакс-----------------------------------------

$(window).scroll(function() {

  var parallax = $(this).scrollTop();

  $('.circle--base').css({
    'transform' : 'translate(0%, ' + parallax/20 + '%)'
  });

  $('.circle--opacity').css({
    'transform' : 'translate(-50%, -' + parallax/40 + '%)'
  });

  $('.circle--min').css({
    'transform' : 'translate(-50%, ' + parallax/30 + '%)'
  });

  $('.circle--right').css({
    'transform' : 'translate(-10%, -' + parallax/50 + '%)'
  });

  $('.circle--left').css({
    'transform' : 'translate(-5%, ' + parallax/20 + 'px)'
  });

  $('.circle--price').css({
    'transform' : 'translate(10%, -' + parallax/20 + 'px)'
  });

  $('.circle--last').css({
    'transform' : 'translate(15%, -' + parallax/20 + 'px)'
  });

  $('.circle--about-left').css({
    'transform' : 'translate(15%, -' + parallax/10 + 'px)'
  });

});

