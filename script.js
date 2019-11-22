$(document).ready(function() {

	$(window).scroll(function () {
		if(($(window).scrollTop()+$(window).height()) >= ($('footer').offset().top - $('#footer_links').height())) {
			let through_footer = ($(window).scrollTop()+$(window).height()) - ($('footer').offset().top - $('#footer_links').height());
			$('#config').css('top', -through_footer);
		} else {
			$('#config').css('top', 0);
		}
	});

	$('.tab').on('click', function() {
		if($(this).attr('id') == 'included_products_link') {
			$('.tab').removeClass('active');
			$(this).addClass('active');
			$('.section').removeClass('active');
			$('#included_products_section').addClass('active');
		} else if($(this).attr('id') == 'reviews_link') {
			$('.tab').removeClass('active');
			$(this).addClass('active');
			$('.section').removeClass('active');
			$('#reviews_section').addClass('active');
		} else if($(this).attr('id') == 'faq_link') {
			$('.tab').removeClass('active');
			$(this).addClass('active');
			$('.section').removeClass('active');
			$('#faq_section').addClass('active');
		} else if($(this).attr('id') == 'benefits_link') {
			$('.tab').removeClass('active');
			$(this).addClass('active');
			$('.section').removeClass('active');
			$('#benefits_section').addClass('active');
		}
	});

	$('#faq_section h3').on('click', function() {
		if($(this).next().is(':hidden')) {
			$(this).children().text('–');
			$(this).next().show();
		} else {
			$(this).children().text('+');
			$(this).next().hide();
		}
	});

	let stars = $('.stars');
	for(let i = 0; i < stars.length; i++) {
		stars.eq(i).rateYo({
			rating: parseFloat(stars.eq(i).text()),
			normalFill: '#b6b6b6',
			ratedFill: '#181818',
			starWidth: '12px',
			spacing: '4px',
			readOnly: true
		});
		if(stars.eq(i).parent().attr('id') == 'average') {
			stars.eq(i).rateYo('option', 'starWidth', '16px');
		}
	}

	let bars = $('.bar');
	for(let i = 0; i < bars.length; i++) {
		let width = String(Number(bars.eq(i).text()) * 2.5)
		bars.eq(i).css('width', width + 'px');
		bars.eq(i).text('');
	}
});