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
          satelliteNameElement.classList.add("name")
          satelliteNameElement.innerHTML=satelliteName;
          singleSatelliteContainer.appendChild(satelliteNameElement);

          //satellite icon
          var satelliteShape = document.createElement("span");
          satelliteShape.classList.add("material-symbols-outlined")
          satelliteShape.innerHTML="satellite_alt";
          singleSatelliteContainer.appendChild(satelliteShape);

          //satellite info box
          var infoBox = document.createElement("div");
          infoBox.classList.add("infoBox");
          singleSatelliteContainer.appendChild(infoBox)

            //key value pair of info
            var pair1 = document.createElement("div");
            pair1.classList.add("pair1");
            infoBox.appendChild(pair1)

                //number key
                var satelliteNumberKeyElement = document.createElement("div");
                satelliteNumberKeyElement.classList.add("key")
                satelliteNumberKeyElement.innerHTML="Satellite Number: ";
                pair1.appendChild(satelliteNumberKeyElement);

                //number value
                var satelliteNumber = currentSatelliteData.satelliteId;//number
                var satelliteNumberValueElement = document.createElement("div");
                satelliteNumberValueElement.classList.add("value")
                satelliteNumberValueElement.innerHTML=satelliteNumber;
                pair1.appendChild(satelliteNumberValueElement);

            //key value pair of info
            var pair2 = document.createElement("div");
            pair2.classList.add("pair2");
            infoBox.appendChild(pair2)

                //year key Data
                var satelliteYearKeyElement = document.createElement("div");
                satelliteYearKeyElement.classList.add("key")
                satelliteYearKeyElement.innerHTML = "Year Launched: "
                pair2.appendChild(satelliteYearKeyElement);

                //year Value Data
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
                var satelliteYearValueElement = document.createElement("div");
                satelliteYearValueElement.innerHTML = Millenium(yearData);
                pair2.appendChild(satelliteYearValueElement);

            //key value pair of info
            var pair3 = document.createElement("div");
            pair3.classList.add("pair3");
            infoBox.appendChild(pair3)    

                //Epoch key Data
                var satelliteEpochKeyElement = document.createElement("div");
                satelliteEpochKeyElement.classList.add("key")
                satelliteEpochKeyElement.innerHTML = "Epoch: "
                pair3.appendChild(satelliteEpochKeyElement);

                //Epoch Value Data
                var satelliteLine1 = currentSatelliteData.line1;//string
                var epochData = satelliteLine1.slice(16,30);//number
                var satelliteEpochValueElement = document.createElement("div");
                satelliteEpochValueElement.innerHTML = epochData;
                pair3.appendChild(satelliteEpochValueElement);

            //key value pair of info
            var pair4 = document.createElement("div");
            pair4.classList.add("pair4");
            infoBox.appendChild(pair4)   

                //First time derivative of mean motion Key Data
                var satelliteMeanMotionKeyElement = document.createElement("div");
                satelliteMeanMotionKeyElement.classList.add("key")
                satelliteMeanMotionKeyElement.innerHTML = "First Time Derivative of Mean Motion: ";
                pair4.appendChild(satelliteMeanMotionKeyElement);

                //First time derivative of mean motion Value Data
                var satelliteLine1 = currentSatelliteData.line1;//string
                var meanMotionData = satelliteLine1.slice(32,43);//number
                var satelliteMeanMotionValueElement = document.createElement("div");
                satelliteMeanMotionValueElement.classList.add("meanMotion")
                satelliteMeanMotionValueElement.innerHTML = meanMotionData;
                pair4.appendChild(satelliteMeanMotionValueElement);   
  }

  $(".individualbox").on("click", function(){
    $individualbox = $(this);
    $listcontainer = $individualbox.children(".infoBox");
    $listcontainer.slideToggle();
  });
});