(function(){
	var apiKey = "e821459548fc4e718e647223ee29f274";
	var itemNum;
	(function(){ //Get ItemNum from database, Output ItemNum to variable
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.bungie.net/platform/Destiny/TigerXbox/Account/4611686018433800293/", false);
		xhr.setRequestHeader("X-API-Key", apiKey);
		
		xhr.onreadystatechange = function(){
		 if(this.readyState === 4 && this.status === 200){
		  var json = JSON.parse(this.responseText);
		  itemNum = (json.Response.data.characters[1].characterBase.peerView.equipment[0].itemHash); 
		 }
		}
		xhr.send();
	})();
	(function(){ //
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/"+ itemNum +"/", true);
		xhr.setRequestHeader("X-API-Key", apiKey);
		 
		xhr.onreadystatechange = function(){
		 if(this.readyState === 4 && this.status === 200){
		  var json = JSON.parse(this.responseText);
		  document.getElementById("Subclass").src = "https://www.bungie.net" + (json.Response.data.inventoryItem.icon); //Responds with ItemName
		 }
		}
		xhr.send();
	})();
})();