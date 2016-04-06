var size = 8;
	   for(var j = 1;j<=size;j++){
            if (j%2==1) {
               var string = '#';
		       for(var i=1;i<size;i++){
		       	if(i%2!==0){
		       		string +=' ';
		       	}
		       	else{
		       		string +='#';
		       	}
		       }
			   console.log(string);
			} 
			
			else{
				var string = ' ';
				for(var a=1;a<size;a++){
		       	if(a%2 ==0){
		       		string +=' ';
		       	}
		       	else{
		       		string +='#';
		       	}
		       }
			   console.log(string);
			}   
	    }  
