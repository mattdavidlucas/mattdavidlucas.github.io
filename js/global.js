var site = {

	init: function() {
		this.hideSingle();
		this.removeWork();
	},

	hideSingle: function() {
		var portfolioClass = $("#portfolio_single").attr('class');

		$('#portfolio article').each(function() {
			var portfolioId = $(this).attr('id');

			if ( portfolioId === portfolioClass ) {
				var removeThis = '#' + portfolioId;
				$(removeThis).remove();
			}
		});
	},

	removeWork: function() {
		var portfolioItems = $('.portfolio_card').length;

		if ( portfolioItems === 0 ) {
			$('#portfolio').hide();
		}
	}
	// End methods
}

$(function() {
	site.init();
});