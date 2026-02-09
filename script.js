$(document).ready(function () {
  // список красок
  $('.paint-toggle').on('click', function () {
    $(this).next('.paint-list').slideToggle(300);
  });
});

$(document).ready(function () {
  let isRub = true;
  const rate = 70; // курс из макета

  function formatRub(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
  }

  $('#currency-toggle').on('click', function () {
    $('.old-price, .current-price').each(function () {
      const rub = $(this).data('rub');

      if (isRub) {
        const usd = Math.round(rub / rate);
        $(this).text(usd + ' $');
      } else {
        $(this).text(formatRub(rub));
      }
    });

    isRub = !isRub;
  });
});
