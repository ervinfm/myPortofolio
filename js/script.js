// event pada saat link di klik

$(".page-scroll").on("click", function(e) {
  // Ambil isi href
  var tujuan = $(this).attr("href");

  //   Tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  //   pindakan scroll
  $("body").animate({
    scrollTop: elemenTujuan.offset().top
  });
});
