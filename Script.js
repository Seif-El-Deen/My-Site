console.log(window.location.pathname);
if(window.location.pathname == "/Certificates.html"){
    // Certificates items  Start
    //Displaying Certificate Start
    const img1=document.getElementById("item1");
    const img2=document.getElementById("item2");
    const img3=document.getElementById("item3");
    const img4=document.getElementById("item4");
    const img5=document.getElementById("item5");
    const img6=document.getElementById("item6");
    const img7=document.getElementById("item7");
    const img8=document.getElementById("item8");
    const img9=document.getElementById("item9");
    const img10=document.getElementById("item10");
    const img11=document.getElementById("item11");

    img1.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-1").style.display="block";
    });
    img2.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-2").style.display="block";
    });
    img3.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-3").style.display="block";
    });
    img4.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-4").style.display="block";
    });
    img5.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-5").style.display="block";
    });
    img6.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-6").style.display="block";
    });
    img7.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-7").style.display="block";
    });
    img8.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-8").style.display="block";
    });
    img9.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-9").style.display="block";
    });
    img10.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-10").style.display="block";
    });
    img11.addEventListener("click",function(){
        document.getElementById("img-modal-parent").style.display="block";
        document.getElementById("img-modal-11").style.display="block";
    });
    //Displaying Certificate End

    //Removing Certificates Start
    const closeModalParent=document.getElementById("img-modal-parent");
    const closeModal1=document.getElementById("close-modal-1");
    const closeModal2=document.getElementById("close-modal-2");
    const closeModal3=document.getElementById("close-modal-3");
    const closeModal4=document.getElementById("close-modal-4");
    const closeModal5=document.getElementById("close-modal-5");
    const closeModal6=document.getElementById("close-modal-6");
    const closeModal7=document.getElementById("close-modal-7");
    const closeModal8=document.getElementById("close-modal-8");
    const closeModal9=document.getElementById("close-modal-9");
    const closeModal10=document.getElementById("close-modal-10");
    const closeModal11=document.getElementById("close-modal-11");
    closeModalParent.addEventListener("click",function(e){
        if(e.target.className=="img-modal-parent"){
            document.getElementById("img-modal-parent").style.display="none";
        }
    })

    closeModal1.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    });
    closeModal2.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal3.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal4.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal5.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal6.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal7.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal8.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal9.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal10.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
    closeModal11.addEventListener('click',function(){
        document.getElementById("img-modal-parent").style.display="none";
    })
}

/* To remove the form in the form page when the navbar button is pressed*/
function Form(){
    if(document.getElementById('wrapper').style.display=='none'){
        document.getElementById('wrapper').style.display='block';
    }
    else{
        document.getElementById('wrapper').style.display='none';
    }
}
/* To remove the footer in the home page when the navbar button is pressed*/

// function footer(){
//     if(document.getElementById('footer').style.display=='none'){
//         document.getElementById('footer').style.display='block';
//     }
//     else{
//         document.getElementById('footer').style.display='none';
//     }
// }
function slideShowDisplay(){
    if(document.getElementById('slideshow-container').style.display=='none'){
        document.getElementById('slideshow-container').style.display='block';
    }
    else{
        document.getElementById('slideshow-container').style.display='none';

    }
}
function displayLoginForm(){
    document.getElementById('LoginId').style.display='block';
    document.getElementById('loginIdBtn').classList.add("active");
}
function closeLoginForm(){
    document.getElementById('LoginId').style.display='none';
    document.getElementById('loginIdBtn').classList.remove("active");

}

// Attention Message
function attentionRemove(){
    document.getElementById('popUpMessage').style.display='none';
}
function attentionDisplay(){
    document.getElementById('popUpMessage').style.display='block';
}




// Slideshow function 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}


 

