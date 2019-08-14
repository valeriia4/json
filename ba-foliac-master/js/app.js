;(function($) {
    "use strict";
    
	$('.ba-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
        infinity: true,
        // autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out',
        speed: 1500
    });

    $('.ba-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(currentSlide);
      });

      $('#btn-play').on('click', function(){
        $('.ba-slider').slick('slickPlay');
      })
      $('#btn-pause').on('click', function(){
        $('.ba-slider').slick('slickPause');
      })

      $('#btn-next').on('click', function(){
        $('.ba-slider').slick('slickNext');
      })

      $('#btn-prev').on('click', function(){
        $('.ba-slider').slick('slickPrev');
      })


      $('#btn-CurrentSlide').on('click', function(){
        alert($('.ba-slider').slick('slickCurrentSlide'));
      });

      $('#goToSlide').on('change', function(){
          var numberOfSlide = $(this).val();
          $('.ba-slider').slick('slickGoTo', numberOfSlide);
	  })
	  
	//   add masonry
	  $('.portfolio-examp').masonry({
		itemSelector: '.portfolio-item',
	
	});

	// add isotope
	$('.portfolio-examp').isotope({
	});

	var filters = [];
	$('.portfolio-navi').on('click', 'a', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		var isChecked = $(this).hasClass('active');
		var filter = $(this).attr('data-filter');
		if (isChecked) {
			addFilter(filter);
		} else {
			removeFilter(filter);
		}

		console.log(filters);
		$('.portfolio-examp').isotope({
			filter: filters.join(',')
		});
	});
	function addFilter( filter ) {
	  if ( filters.indexOf( filter ) == -1 ) {
		filters.push( filter );
		filters.join(',')
	  }
	}
	function removeFilter( filter ) {
	  var index = filters.indexOf( filter);
	  if ( index != -1 ) {
		filters.splice( index, 1 );
		console.log(filters.join(','));
	  }
	}


	// new slider
	$('.ba-slider-new').masonry({
		itemSelector: '.portfolio-item',
	});

	function initSlider(){
		$('.ba-slider-new').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.ba-slider-new-nav'
		});
	}

	$('.ba-slider-new-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.ba-slider-new',
		dots: false,
		focusOnSelect: true
	});

	$('.items-navi button').on('click', function(){
		initSlider();
		$('.items-navi button').addClass('nav-btn');
	})

})(jQuery); 

var map;
var baOffices;
      function initMap() {

		var markerBA = {lat: 50.006693, lng: 36.237199};

        map = new google.maps.Map(document.getElementById('map'), {
          center: markerBA,
		  zoom: 19,
		  styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3338'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#33333'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#333333'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#111111'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
		});

		baOffices = [
			{
				city: 'Kharkiv',
				position: new google.maps.LatLng(50.006693, 36.237199),
				img: '../img/favicon.png'
			},
			{
				city: 'Poltava',
				position: new google.maps.LatLng(49.588983, 34.5554741),
				img: '../img/favicon.png'
			},
			{
				city: 'Kramatorsk',
				position: new google.maps.LatLng(48.9009301, 36.5196854),
				img: '../img/favicon.png'
			},
			{
				city: 'Kyiv',
				position: new google.maps.LatLng(50.4637267, 30.4977141),
				img: '../img/favicon.png'
			}
		];
		

		  for (var i = 0; i < baOffices.length; i++) {
			var marker = new google.maps.Marker({
			  position: baOffices[i].position,
			  title: baOffices[i].city,
			  icon: baOffices[i].img,
			  map: map
			});
		  };

		function addCityToSelect(){
			for (let j=0; j<baOffices.length; j++){
				let opt = document.createElement('option');
				opt.value = baOffices[j].position;
				opt.innerHTML = baOffices[j].city;
				ourSelect.appendChild(opt);
			}
		}
		addCityToSelect();

	  }
	  function newLocation(newLat,newLng)
		{
			map.setCenter({
				lat : newLat,
				lng : newLng
			});
		}

		var ourSelect = document.querySelector('#mapSelect');
		ourSelect.onchange = function(){
			let coordinate = this.value.slice(1, -1).split(',');
			console.log(coordinate);
			newLocation(parseFloat(coordinate[0]), parseFloat(coordinate[1]));
		}

	  
	const googleMapsScript = document.createElement('script');
	googleMapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBaSe6jdgxnsPBSc7pRB0_MlIoZSRm7aw8&callback=initMap';
	document.head.appendChild(googleMapsScript);
	















	  

    
    
   



 








