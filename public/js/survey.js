//I DON'T KNOW WHY WE HAVE THE HTML AT THE BOTTOM HERE
//WHAT DEPENDENCIES DO WE NEED ON THIS PAGE?
/* <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"> */

// init the state from the input
console.log("this works")

$(".image-checkbox").each(function () {
    if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
      $(this).addClass('image-checkbox-checked');
    }
    else {
      $(this).removeClass('image-checkbox-checked');
    }
  });
  
  // sync the state to the input
  $(".image-checkbox").on("click", function (e) {
    $(this).toggleClass('image-checkbox-checked');
    var $checkbox = $(this).find('input[type="checkbox"]');
    $checkbox.prop("checked",!$checkbox.prop("checked"));
  
    e.preventDefault();
  });

  /* <!-- 
Image Checkbox Bootstrap template for multiple image selection
https://www.prepbootstrap.com/bootstrap-template/image-checkbox
-->
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
<div class="container">
  <h3>Bootstrap image checkbox(multiple)</h3>
  <div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">
    <label class="image-checkbox">
      <img class="img-responsive" src="https://dummyimage.com/600x400/000/fff" />
      <input type="checkbox" name="image[]" value="" />
      <i class="fa fa-check hidden"></i>
    </label>
  </div>
  <div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">
    <label class="image-checkbox">
      <img class="img-responsive" src="https://dummyimage.com/600x400/000/fff" />
      <input type="checkbox" name="image[]" value="" />
      <i class="fa fa-check hidden"></i>
    </label>
  </div>
  <div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">
    <label class="image-checkbox">
      <img class="img-responsive" src="https://dummyimage.com/600x400/000/fff" />
      <input type="checkbox" name="image[]" value="" />
      <i class="fa fa-check hidden"></i>
    </label>
  </div>
  <div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">
    <label class="image-checkbox">
      <img class="img-responsive" src="https://dummyimage.com/600x400/000/fff" />
      <input type="checkbox" name="image[]" value="" />
      <i class="fa fa-check hidden"></i>
    </label>
  </div>
  <div class="col-xs-4 col-sm-3 col-md-2 nopad text-center">
    <label class="image-checkbox">
      <img class="img-responsive" src="https://dummyimage.com/600x400/000/fff" />
      <input type="checkbox" name="image[]" value="" />
      <i class="fa fa-check hidden"></i>
    </label>
  </div>

</div> */