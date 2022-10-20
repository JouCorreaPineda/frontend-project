//use $.get to acquire data
$.get('https://tle.ivanstanojevic.me/api/tle', function(data){

    var $satellitesContainer = $("#satellitesContainer");
    //the array of satellites, each satellite is an object
    var SatellitesDataArray = data.member;

 //for every satellite in data, I will create a square that displays the satellites name, if clicked information on that satellite will drop down.
    for(var i=0;i<SatellitesDataArray.length;i++){
        var currentSatelliteData = SatellitesDataArray[i];
        console.log(data.member)

        //create box to hold all info for a satellite
        var singleSatelliteContainer = document.createElement("div");
        singleSatelliteContainer.classList.add("individualbox");
        satellitesContainer.appendChild(singleSatelliteContainer);

            //Name Data
            var satelliteName = currentSatelliteData.name;//string
            var satelliteNameElement = document.createElement("h2")
            satelliteNameElement.innerHTML=satelliteName;
            singleSatelliteContainer.appendChild(satelliteNameElement);

            //satellite info box
            var content = document.createElement("div");
            content.classList.add("hide");
            singleSatelliteContainer.appendChild(content)

                //number Data
                var satelliteNumber = currentSatelliteData.satelliteId;//number
                var satelliteNumberElement = document.createElement("div");
                satelliteNumberElement.innerHTML="Satellite Number: "+satelliteNumber;
                content.appendChild(satelliteNumberElement);

                //year Data
                var satelliteLine1 = currentSatelliteData.line1;//string
                var yearData = +satelliteLine1.slice(9,11);//number
                function Millenium(year){ 
                    if(yearData>=00&&yearData<23){
                        sum= 2000+yearData
                    }else if(yearData>=23&&yearData<100){
                        sum= 1900+yearData
                    }
                    return sum;
                }
                var satelliteYearElement = document.createElement("div");
                satelliteYearElement.innerHTML = "Year Launched: "+Millenium(yearData);
                content.appendChild(satelliteYearElement);

                //Epoch Data
                var satelliteLine1 = currentSatelliteData.line1;//string
                var epochData = satelliteLine1.slice(16,30);//number
                var satelliteEpochElement = document.createElement("div");
                satelliteEpochElement.innerHTML = "Epoch: "+epochData;
                content.appendChild(satelliteEpochElement);

                //First time derivative of mean motion Data
                var satelliteLine1 = currentSatelliteData.line1;//string
                var meanMotionData = satelliteLine1.slice(32,43);//number
                var satelliteMeanMotionElement = document.createElement("div");
                satelliteEpochElement.innerHTML = "First Time Derivative of Mean Motion: "+meanMotionData;
                content.appendChild(satelliteMeanMotionElement);        
    }

    $(".individualbox").on("click", function(){
      $individualbox = $(this);
      //getting the next element
      $listcontainer = $individualbox.children(".hide");
      //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
      $listcontainer.slideToggle();
  });
});