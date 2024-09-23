const { MouseActions } = require('../15-JS-Modules/mouse-actions.js');

// STATIC METHOD
MouseActions.click();

// NON STATIC METHODS
const ma = new MouseActions();
ma.clickAndHold();