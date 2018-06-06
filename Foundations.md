### Foundations of Programming in JavaScript

#### Materials and References

- Video Tutorial I followed: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

#### 1.2 p5.js Workflow

- Project Files:

	- index.html

	- sketch.js

	- /lib

- Server

#### Install Packages

- install node.js on Windows 10 ubuntu

	- install node.js sudo apt install nodejs-legacy

	- update the node.js package

	Reference: https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version

	```
	$ sudo npm cache clean -f
	$ sudo npm install -g n 
	$ sudo n stable 
	$ sudo n latest
	```

#### Start a new project

##### Project Files

- create project files

	```shell
	$ p5 generate -b tutorial
	```

- opening the html file with file system can cause problems

##### Server

1. Why do we need server?

	- simply opening the html file from file system can cause problems

2. Options for Server

	- Python Server

	go to the working directory and type in the following:

	```shell
	$ python -m SimpleHTTPServer
	```

	then open up chrome and go to http://localhost:8000/

	- Node.js Server

	Use the following command to install

	```shell
	$ sudo npm install -g http-server
	```

	To run the server (from the working directory):

	```shell
	http-server
	```

	- Some text editors have plugins to preview the website as run by a server

		- atom: live-preview plugin (saving the changes --> instantly seeing the changes)

3. View the canvas: Chrome

	- developer tools: ctrl + shift + I

4. SFTP(Secure File Transfer Protocl) to upload the code to some webservers

#### Drawing Basics

##### Functions

- Basic two functions:

	```javascript
	// things to do once program starts (createCanvas)
	function setup(){} 
	// drawing stuff to the canvas
	function draw(){}
	```

*@Note*: Think about Arduino code, ```setup()``` and ```loop()``` 

##### Shapes

- (0,0) is the top left corner, x increases horizontally, y increases vertically

- argument needed: x, y, width, height

- Reference: https://p5js.org/reference/

##### Colors

1. three basic functions

	- stroke(): color of the boundary/outline

	- fill(): color inside the shape

	- background(): color of the background (excluding the shapes)

2. representation of colors: RGB/Grayscale/RGBA

	- (255, 0, 0) --> red

3. *order* of operation matters: drawing occurs layer by layer

#### p5.js variables

##### Mouse Location

- (mouseX, mouseY)： location of the mouse, changed by user

- smaple code to drag a rectangle with mouse:

```javascript
function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(26, 88, 188);
	rect(mouseX, mouseY, 75, 75);
	console.log(mouseX);
}
```

*@Note*: I found sometimes the updates won't show up in the local server

Solution: get the inspecting console out, then right click on the Refresh button, choose "empty cache and hard reload"

Reference: https://stackoverflow.com/questions/29105729/local-server-not-reflecting-updated-files

##### Declaring Variables

- for now, keep the declarations on top

##### Objects

- organizing variables

```javascript
var circle = {
	x: 100,
	y: 100,
	diameter: 50
};
```

##### map() Function

- Scenario: want to use mouse movement to change the background color *gradually*

- More specifically: 

	mouseX is within the range [0, 600]

	and the color of background goes from [0, 255]

- map(value,start1,stop1,start2,stop2,[withinBounds])

	- withinBounds is a Boolean constraining the value to the newly mapped range

- Doc: https://p5js.org/reference/#/p5/map

- Example:

```javascript
var circle = {
	x: 300,
	y: 300,
	diameter: 50
};

var grayscale = 0;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	// background(26, 88, 188);
	grayscale = map(mouseX, 0, 600, 0, 255);
	background(grayscale);
	fill(26, 88, 188);
	noStroke();
	ellipse(mouseX, circle.y, circle.diameter, circle.diameter);
	console.log(mouseX);
}
```


