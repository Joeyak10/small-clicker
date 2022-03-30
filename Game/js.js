var money = 0
var mpc = 1
var multi = 1
var upgrade1cost = 100
var upgrade2cost = 1000
var up1_cost_multi = 2
var up2_cost_multi = 5


function readFile(input) {
let file = input.files[0]; 
let fileReader = new FileReader(); 
fileReader.readAsText(file); 
fileReader.onload = function() {
		var a = fileReader.result.split(",")
		money = parseInt(a[0])
    		mcp = parseInt(a[1])
		multi = parseInt(a[2])
		upgrade1cost = parseInt(a[3])
		upgrade2cost = parseInt(a[4])
		up1_cost_multi = parseInt(a[5])
		up2_cost_multi = parseInt(a[6])
		update()
        }; 
        fileReader.onerror = function() {
          alert(fileReader.error);
        }; 
      }
function mainClick()
{
	money += (mpc * multi);  
	update()
}

function save()
{

	var a = document.createElement("a");
	a.href = window.URL.createObjectURL(new Blob([[money, mpc, multi, upgrade1cost, upgrade2cost, up1_cost_multi, up2_cost_multi]]), {type: "text/plain"});
	a.download = "save.txt";
	a.click();
	alert("Saved!")
}


function buyUpgrade1() {
	if(money >= upgrade1cost) {
		money -= upgrade1cost
		upgrade1cost *= up1_cost_multi
		mpc +=1
		document.getElementById("up1cost").innerHTML = "$"+upgrade1cost
		update()
}
	else {
	alert("Not Enough Money!")
}
}

function buyUpgrade2() {
	if(money >= upgrade2cost) {
		money -= upgrade2cost
		upgrade2cost *= up2_cost_multi
		multi *= 2
		document.getElementById("up2cost").innerHTML = "$"+upgrade2cost
		update()
}
	else {
	alert("Not Enough Money!")
}
}

function update() {


	document.getElementById("money").innerHTML = "$"+money;
	document.getElementById("up1cost").innerHTML = "$"+upgrade1cost
}


