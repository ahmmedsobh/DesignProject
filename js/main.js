// Start Slider 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// End Slider 

// Start Packages
    var btn = document.getElementsByClassName("view-details-btn");
    var i;
    
    for (i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function() {
        //this.classList.toggle("active");
        var content = this.nextElementSibling;
        content.style.display = "block";
        this.style.display = "none";
      });
    }

// End Packages


// Start Select Packages
let modalEle = document.getElementById("select-package-modal");
if(modalEle != undefined && modalEle != null)
{
  let modal = new bootstrap.Modal(modalEle); 

  
     modal.show();
}



// End Select Packages


// Start Reviews 

var swiper = new Swiper(".ReviewsSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// End Reviews 

// Start Add Appointment

$('#DatePicker').datetimepicker({
	inline:true,
  formatTime:'g:i',
	formatDate:'d.m.Y',
  allowTimes: function getArr() {
    var allowTimes = [
       '12:00', '12:30', '13:00', '13:30', '14:00', 
       '14:30', '15:00', '15:30', '19:00', '20:00'
    ];
return allowTimes;
}()
});

// Start Add Appointment


