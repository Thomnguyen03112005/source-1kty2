$(document).ready(function(){
    $.ajax({
      //url: "https://63e9d1f7811db3d7ef014610.mockapi.io/newss",
      url: "data.json",
      type: "GET",
      dataType: "json",
      success: function(data) {
        for (let i = 0; i < data.length; i++) {
              // Xử lý dữ liệu
          let img = data[0].img;
          let id = data[i].id;
          let title = data[0].title;
          let content = data[0].content;
          let nd = data[0].noidung;
            // Hiển thị dữ liệu
            $("#card-id-1").eq(i).text(id);
            //tieu de
          $(".card-title").html(data[0].title);
          $(".card-title1").html(data[1].title);
          $(".card-title2").html(data[2].title);
          $(".card-title3").html(data[3].title);
          $(".card-title4").html(data[4].title);
          $(".card-title5").html(data[5].title);
          $(".card-title6").html(data[6].title);
          $(".card-title7").html(data[7].title);
          $(".card-title8").html(data[8].title);
          $(".card-title9").html(data[9].title);
          $(".card-title10").html(data[10].title);
          $(".card-title11").html(data[11].title);
          $(".card-title12").html(data[12].title);
          $(".card-title13").html(data[13].title);
          $(".card-title14").html(data[14].title);
          $(".card-title15").html(data[15].title);
          $(".card-title16").html(data[16].title);
          $(".card-title17").html(data[17].title);
          $(".card-title18").html(data[18].title);
          $(".card-title19").html(data[19].title);
          $(".card-title20").html(data[20].title);
          $(".card-title21").html(data[21].title);
          $(".card-title22").html(data[22].title);
          $(".card-title23").html(data[23].title);
          $(".card-title24").html(data[24].title);
          $(".card-title25").html(data[25].title);

          //hinhanh
          //$(".card-img-top1").html(data[1].img);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          $(".card-text").htm(data[0].content);
          //hinhanh
          $("#img").src =(data[0].img);
          $('#img1').src = (data[1].img)
                    //content1
          $(".noidung").html(data[0].noidung)
          $(".noidung1").html(data[1].noidung)
          $(".noidung2").html(data[2].noidung)
          $(".noidung3").html(data[3].noidung)
          $(".noidung3").html(data[4].noidung)
          $(".noidung4").html(data[5].noidung)
         


        }
      }
      
    });
    $(document).ready(function() {
      $.getJSON('data.json', function(data) {
        $('#img').attr('src', data[0].img);
        $('#img1').attr('src', data[1].img);
        $('#img2').attr('src', data[2].img);
        $('#img3').attr('src', data[3].img);
        $('#img4').attr('src', data[4].img);
        $('#img5').attr('src', data[5].img);
        $('#img6').attr('src', data[6].img);
        $('#img7').attr('src', data[7].img);
        $('#img8').attr('src', data[8].img);
        $('#img9').attr('src', data[9].img);
        $('#img10').attr('src', data[10].img);
        $('#img11').attr('src', data[11].img);
        $('#img12').attr('src', data[12].img);
        $('#img13').attr('src', data[13].img);
        $('#img14').attr('src', data[14].img);
        $('#img15').attr('src', data[15].img);
        $('#img16').attr('src', data[16].img);
        $('#img17').attr('src', data[17].img);
        $('#img18').attr('src', data[18].img);
        $('#img19').attr('src', data[19].img);
        $('#img20').attr('src', data[20].img);
        $('#img21').attr('src', data[21].img);
        $('#img22').attr('src', data[22].img);
        $('#img23').attr('src', data[23].img);
        $('#img24').attr('src', data[24].img);
        $('#img25').attr('src', data[25].img);
        $('#img26').attr('src', data[26].img);
      });
    });
    
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
      });  
  });

	$(document).ready(function() {
		// Bắt sự kiện click nút tìm kiếm
		$('#search-btn').click(function(e) {
			e.preventDefault(); // Ngăn chặn form submit lại
			var searchTerm = $('#search-input').val(); // Lấy từ khóa tìm kiếm
			$.ajax({
				url: 'data.json', // Đường dẫn đến file data.json
				dataType: 'json',
				success: function(data) {
					// Xóa các kết quả tìm kiếm trước đó (nếu có)
					$('#search-results').empty();
					// Lặp qua từng object trong file data.json
					$.each(data, function(index, obj) {
						// Kiểm tra xem từ khóa tìm kiếm có xuất hiện trong trường "topic" hay không
						if (obj.topic.includes(searchTerm)) {
							// Nếu có, tạo một đối tượng HTML để hiển thị kết quả tìm kiếm
							var $result = $('<div class="search-result">' +
								'<a href="' + obj.link + '">' +
								'<img src="' + obj.img + '">' +
								'<h3>' + obj.title + '</h3>' +
								'</a>' +
								'</div>');
							// Thêm đối tượng HTML này vào phần tử #search-results trên file html
							$('#search-results').append($result);
						}
            window.location.href="a.html"
					});
				},
				error: function() {
					// Hiển thị thông báo lỗi nếu không thể tải file data.json
					alert('Không thể tải dữ liệu');
				}
			});
		});
	});