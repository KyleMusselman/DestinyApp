(function(){
	var apiKey = "e821459548fc4e718e647223ee29f274";
	var itemNum;
	(function(){ //Get ItemNum from database, Output ItemNum to variable
		
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://www.bungie.net/platform/Destiny/TigerXbox/Account/4611686018433800293/", true);
		xhr.setRequestHeader("X-API-Key", apiKey);
		
		xhr.onreadystatechange = function(){
		 if(this.readyState === 4 && this.status === 200){
		  var json = JSON.parse(this.responseText);
		  console.log(json.Response.data.characters[1].characterBase.peerView.equipment[1].itemHash);
		  console.log(json.Response.data); //Responds with ItemName
		  itemNum = (json.Response.data.characters[1].characterBase.peerView.equipment[1].itemHash); 
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
		  console.log(json.Response.data.inventoryItem.itemName); //Responds with ItemName
		 }
		}
		xhr.send();
	})();
})();