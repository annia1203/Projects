let caso=0;
let postbtn=document.getElementById('PostB');

postbtn.addEventListener('click', function(){
    let review=document.getElementById('Restaurantreview').value; //review
    let restname=document.getElementById('RestaurantName').value; //nombre
    let genre=document.getElementById('MovieGnr').value//genero
    let movieimg=document.getElementById('MovieImg').value;//imagen
    console.log(caso);

  if(caso==1){
    //var review1=document.getElementById('rreview1'); //tomado del cuadrito de myReviews
    $("#rreview1").html(review)
    //review1.innerHTML= review; //asigna al cuadrito lo que escribiste
    var blank=document.getElementById('Restaurantreview');
    blank.value=null;//limpia el campo del review

    //var restname1=document.getElementById('rname1');
    $("#rname1").html(restname)
    //restname1.innerHTML= restname;
    var blank1=document.getElementById('RestaurantName');
    blank1.value=null;

    //var moviegnr1=document.getElementById('genre1');
    $("#genre1").html(genre)
    //moviegnr1.innerHTML= genre;
    var blank3=document.getElementById('MovieGnr');
    blank3.value=null;

    $("#imgpath1").html(movieimg)
    $("#my-img1").attr("src", `${movieimg}`);
    $("#my-img1").removeClass("d-none");
    var blank2=document.getElementById('MovieImg');
    blank2.value=null;

    $("#my_image").attr("src", `images/postertemplate.jpg`);
    $("#my_image").removeClass("d-none");
    $("#titleedit").html("");

    if(restname1 || review1 === null){

    }

  }else if(caso==2){
    //var review1=document.getElementById('rreview1'); //tomado del cuadrito de myReviews
    $("#rreview2").html(review)
    //review1.innerHTML= review; //asigna al cuadrito lo que escribiste
    var blank=document.getElementById('Restaurantreview');
    blank.value=null;//limpia el campo del review

    //var restname1=document.getElementById('rname1');
    $("#rname2").html(restname)
    //restname1.innerHTML= restname;
    var blank1=document.getElementById('RestaurantName');
    blank1.value=null;

    //var moviegnr1=document.getElementById('genre1');
    $("#genre2").html(genre)
    //moviegnr1.innerHTML= genre;
    var blank3=document.getElementById('MovieGnr');
    blank3.value=null;

    $("#imgpath2").html(movieimg)
    $("#my-img2").attr("src", `${movieimg}`);
    $("#my-img2").removeClass("d-none");
    var blank2=document.getElementById('MovieImg');
    blank2.value=null;

    $("#my_image").attr("src", `images/postertemplate.jpg`);
    $("#my_image").removeClass("d-none");
    $("#titleedit").html("");

    if(restname1 || review1 === null){

    }

  }else if(caso==3){
    //var review1=document.getElementById('rreview1'); //tomado del cuadrito de myReviews
    $("#rreview3").html(review)
    //review1.innerHTML= review; //asigna al cuadrito lo que escribiste
    var blank=document.getElementById('Restaurantreview');
    blank.value=null;//limpia el campo del review

    //var restname1=document.getElementById('rname1');
    $("#rname3").html(restname)
    //restname1.innerHTML= restname;
    var blank1=document.getElementById('RestaurantName');
    blank1.value=null;

    //var moviegnr1=document.getElementById('genre1');
    $("#genre3").html(genre)
    //moviegnr1.innerHTML= genre;
    var blank3=document.getElementById('MovieGnr');
    blank3.value=null;

    $("#imgpath3").html(movieimg)
    $("#my-img3").attr("src", `${movieimg}`);
    $("#my-img3").removeClass("d-none");
    var blank2=document.getElementById('MovieImg');
    blank2.value=null;

    $("#my_image").attr("src", `images/postertemplate.jpg`);
    $("#my_image").removeClass("d-none");
    $("#titleedit").html("");
    if(restname1 || review1 === null){

    }
  }
  
})


let editbtn1=document.getElementById('EditB1');


editbtn1.addEventListener('click', function(){
    caso=1;
    let imagen=document.getElementById('imgpath1').innerHTML;
    document.getElementById('Restaurantreview').value=document.getElementById('rreview1').innerHTML;
    document.getElementById('RestaurantName').value=document.getElementById('rname1').innerHTML;
    document.getElementById('MovieGnr').value=document.getElementById('genre1').innerHTML;
    document.getElementById('MovieImg').value=document.getElementById('imgpath1').innerHTML;
    $("#my_image").attr("src", `${imagen}`);
    $("#my_image").removeClass("d-none");
    $("#titleedit").html("Edit review 1");

    var blank=document.getElementById('rreview1').value;
    blank.value=null;
    console.log(caso);

})

let editbtn2=document.getElementById('EditB2');


editbtn2.addEventListener('click', function(){
    caso=2;
    let imagen=document.getElementById('imgpath2').innerHTML;
    document.getElementById('Restaurantreview').value=document.getElementById('rreview2').innerHTML;
    document.getElementById('RestaurantName').value=document.getElementById('rname2').innerHTML;
    document.getElementById('MovieGnr').value=document.getElementById('genre2').innerHTML;
    document.getElementById('MovieImg').value=document.getElementById('imgpath2').innerHTML;
    $("#my_image").attr("src", `${imagen}`);
    $("#my_image").removeClass("d-none");
    $("#titleedit").html("Edit review 2");

    var blank=document.getElementById('rreview2').value;
    blank.value=null;
    console.log(caso);

})

let editbtn3=document.getElementById('EditB3');


editbtn3.addEventListener('click', function(){
    caso=3;
    let imagen=document.getElementById('imgpath3').innerHTML;
    document.getElementById('Restaurantreview').value=document.getElementById('rreview3').innerHTML;
    document.getElementById('RestaurantName').value=document.getElementById('rname3').innerHTML;
    document.getElementById('MovieGnr').value=document.getElementById('genre3').innerHTML;
    document.getElementById('MovieImg').value=document.getElementById('imgpath3').innerHTML;
    $("#my_image").attr("src", `${imagen}`);
    $("#my_image").removeClass("d-none");
    $("#titleedit").html("Edit review 3");

    var blank=document.getElementById('rreview3').value;
    blank.value=null;
    console.log(caso);

})