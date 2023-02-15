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
          //$(".card-img-top").html(data[0].img);
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
