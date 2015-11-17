(function(){
	var apiKey = "e821459548fc4e718e647223ee29f274";
	var itemNum;
	for (i = 0; i < 16; i++){ 
		getItemNum(i);
		getImage(i, itemNum);
	};
	function getItemNum(i){ //Get ItemNum from database, Output ItemNum to variable
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.bungie.net/platform/Destiny/TigerXbox/Account/4611686018433800293/", false);
		xhr.setRequestHeader("X-API-Key", apiKey);
		
		xhr.onreadystatechange = function(){
		 if(this.readyState === 4 && this.status === 200){
		  var json = JSON.parse(this.responseText);
		  itemNum = (json.Response.data.characters[2].characterBase.peerView.equipment[i].itemHash); 
		 }
		}
		xhr.send();
	}
	function getImage(count, num){ //
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/"+ num +"/", true);
		xhr.setRequestHeader("X-API-Key", apiKey);
		 
		xhr.onreadystatechange = function(){
		 if(this.readyState === 4 && this.status === 200){
		  var json = JSON.parse(this.responseText);
		  switch(count){
			  case 0:
				document.getElementById("Subclass").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 1:
				document.getElementById("Helmet").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 2:
				document.getElementById("Gauntlets").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 3:
				document.getElementById("Chest").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 4:
				document.getElementById("Leg").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 5:
				document.getElementById("Class_Item").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 6:
				document.getElementById("Primary_Weapon").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 7:
				document.getElementById("Special_Weapon").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 8:
				document.getElementById("Heavy_Weapon").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 9: 
				document.getElementById("Ship").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 10: 
				document.getElementById("Sparrow").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 11:
				document.getElementById("Ghost").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 12: 
				document.getElementById("Emblem").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 13: 
				document.getElementById("Shader").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 14: 
				document.getElementById("Emote").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
			  case 15: 
				document.getElementById("Artifact").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon);
				break;
		  }
		 }
		}
		xhr.send();
	}
})();