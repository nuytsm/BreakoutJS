/**
 * 
 */

class Steen {
	
	constructor(img, posx, posy){
		this.img = img
		this.posx = posx
		this.posy = posy
		
	}
	
	updateimg(){
		this.img.style.width = 6 + "%";
		this.img.style.height = 3 + "%";
		this.img.style.left = this.posx + "px"
		this.img.style.top = this.posy + "px"
	}
	
}

function addsteen(posx, posy){
	var img = document.createElement('img');
	img.style.position = "fixed"
	img.src = "https://idtxs3.imgix.net/si/40000/6F/BE.jpg?w=800"
	var steen1 = new Steen(img, posx, posy)
	steen1.updateimg()
	document.getElementById('body').appendChild(steen1.img);
}

function begin(){
	console.log("begin")
	addsteen(20,30);
	addsteen(300,30);
	addsteen(600,30);
}