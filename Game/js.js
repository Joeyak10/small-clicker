var money = 0
var mpc = 1
var multi = 1
var upgrade1cost = 100
var upgrade2cost = 1000


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
        }; 
        fileReader.onerror = function() {
          alert(fileReader.error);
        }; 
mainClick()
      }
function mainClick()
{
	money += (mpc * multi);  
	document.getElementById("money").innerHTML = "$"+money;
}

function save()
{

	var a = document.createElement("a");
	a.href = window.URL.createObjectURL(new Blob([[money, mpc, multi, upgrade1cost, upgrade2cost]]), {type: "text/plain"});
	a.download = "save.txt";
	a.click();
}