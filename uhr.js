  
fetch("http://worldtimeapi.org/api/timezone/Europe/Berlin)
.then(
        function(u){ return u.json();}
      ).then(
        function(json){
          jsondata = json;
        }
      )