let titleBackground;

function preload() {
	titleBackground = new Sprite();
	titleBackground.image = 'sprites/titleScreen.png';
}

function setup() {
	new Canvas(320, 180);
	displayMode('centered', 'pixelated');
}

function draw() {

	background(titleBackground);
}
