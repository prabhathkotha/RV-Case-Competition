<template>
  <div class="info">
    <router-link to="/">
        <img src= "@/assets/ColdCoders.jpg" width="400">
    </router-link>
    <h1>Choose a Card!</h1>
    <table id="cards" border="1">
        <tr>
            <th>Card</th>
            <th>Name</th>
            <th>Regular APR</th>
            <th>Features</th>
            <!-- <th>Rates and Fees</th> -->
        </tr>
    </table>
  </div>
</template>

<script>

function setCookie(cvalue) {                                   //will be used to pre-populate card ID field in apply screen
    document.cookie = "cardID=" + cvalue + "; path=/apply";
    console.log()
}

let obj;
fetch('http://localhost:3000/api/v1/cards')
  .then(response => response.json())
  .then(data => {
    for (var i = 0; i < data.length; i++) {
        var apply = document.createElement("a");
            apply.setAttribute("href", "/apply");

        var row = document.createElement("tr");
        var linebreak = document.createElement("br");

        var imgT = document.createElement("td");
            var img = document.createElement("img")
                img.setAttribute('src', data[i].image);
                img.setAttribute('onclick','setCookie(' + data[i].id + ')');
                img.setAttribute('width', '200');
        var nameT = document.createElement("td");
            var name = document.createTextNode(data[i].merchant + '---' + data[i].name);
        var regAprT = document.createElement("td");
            var months = document.createTextNode("Months: " + data[i].regular_apr.months);
            var rate = document.createTextNode("Rate: " + data[i].regular_apr.rate);
        var featuresT = document.createElement("td");
            for(var j = 0; j < data[i].features.length; j++) {
                let feature = document.createTextNode(data[i].features[j]);
                featuresT.appendChild(feature);
                featuresT.appendChild(document.createElement('br'));
                featuresT.appendChild(document.createTextNode("-----"));
                featuresT.appendChild(document.createElement('br'));
            }

        //BELOW: abandoned due to time constraints
        //would have included rest of card details
                //"rest" pun intended :)
        //would have continued on to make the table dynamically sortable using vue-grid
        
        //e.x. as user types in textbox, cards that do not match will disapear

        // var ratesT =  document.createElement("td");
        //     for(var k = 0; k < data[i].rates_and_fees.length; k++) {
        //         let rateName = document.createTextNode(data[i].rates_and_fees[k].name);
        //         let rateFee = document.createTextNode(data[i].rates_and_fees[k].fee)
        //         featuresT.appendChild(rateName + ": " + rateFee);
        //         featuresT.appendChild(document.createElement('br'));
        //         featuresT.appendChild(document.createTextNode("-----"));
        //         featuresT.appendChild(document.createElement('br'));
        //     }

        imgT.appendChild(img);
        apply.appendChild(imgT);
        row.appendChild(apply);

        nameT.appendChild(name);
        row.appendChild(nameT);

        regAprT.appendChild(months);
        regAprT.appendChild(linebreak);
        regAprT.appendChild(rate);
        row.appendChild(regAprT);
        
        row.appendChild(featuresT);

        document.getElementById("cards").appendChild(row);

        console.log(data[i].id);
    }
  });

</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
#cards {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
#cards th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
}
a {
  color: #42b983;
}
</style>
