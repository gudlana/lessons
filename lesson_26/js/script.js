"use strict"

// const link = document.querySelector('.link')
// // link.addEventListener("click",() => {
// // 	//  code
// // })

// link.addEventListener("click",clickReaction)

// function clickReaction(){
// 	// code
// 	console.log("Click!");
// }


const links = document.querySelectorAll('.link')

links.forEach(link => {
	link.addEventListener("click", clickReaction)
	link.addEventListener("mouseenter", clickReaction)
	link.addEventListener("mouseleave", clickReaction)
	link.addEventListener("mousemove", clickReaction)
})

function clickReaction(e){
	console.log(e.type)
	if (e.type == "mouseenter"){
		// code
	}
	else if(e.type === "click"){
		console.log(e.target);
	}
}