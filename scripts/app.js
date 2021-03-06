addEventListener('WebComponentsReady', function() {
  // imports are loaded and elements have been registered
  app.$.main.sharedElements = {
    'ripple': app.$.circle,
    'reverse-ripple': app.$.circle
  };
});

var app = document.querySelector('#app');

app.data = {};

app.selected = 0;

app.next = function() {
  this.selected = (this.selected + 1) % 2;
};

app.fabClicked = function() {
	this.$.modal.open();
};

addEventListener('iron-overlay-closed', function() {
	if(app.$.modal.closingReason.confirmed) {
    // your code

		app.next();
	}
});