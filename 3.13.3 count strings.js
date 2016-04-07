function countChar(a,b){
  var j=0;
  for (var i=0;i<a.length;i++){    
    if (a.charAt(i)==b)
        j++;        
       
    
  }
  return j;

}
function countBs(string) {
  return countChar(string,'B');
}
        
        console.log(countBs('bafasdjkhfBBB'));
