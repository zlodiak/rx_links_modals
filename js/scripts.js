$( document ).ready(function() {
	var source = Rx.Observable.fromEvent(document, 'click');

	var subscription = source
										.map(e => e.target)
										.filter(t => t.className === 'li')
										.subscribe(function (t) {
											console.log(t);
											$('#modalBody').html(t.innerHTML);
											$('#exampleModal').modal();		
										});
	
});

