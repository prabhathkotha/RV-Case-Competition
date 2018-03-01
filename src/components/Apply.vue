<template>
  <div class="info">
    <router-link to="/">
        <img src= "@/assets/ColdCoders.jpg" width="400">
    </router-link>
    <h1>Note your card ID</h1>
    <ul id="cards2">
    </ul>
    <h1>Enter Card ID and your Credit Score</h1>
    <form>
        <input type="text" id="cardid" name="cardid" placeholder="card ID">
        <input type="number" id="crscore" name="crscore" placeholder="credit score" min="280" max="850">
        <br>
        <input type="submit" value="Submit">
    </form>

  </div>
</template>

<script>

fetch('http://localhost:3000/api/v1/cards')
  .then(response => response.json())
  .then(data => {
    for (var i = 0; i < data.length; i++) {
        var imgT = document.createElement("ul");
            var img = document.createElement("img")
                img.setAttribute('src', data[i].image);
                img.setAttribute('width', '200');
            var id = document.createTextNode(data[i].id);
        imgT.appendChild(img);
        imgT.appendChild(id);
        document.getElementById("cards2").appendChild(imgT);
    }
  });
fetch('http://localhost:3000/api/v1/cards/:id/apply', {      //TODO collect data from form and post to appropriate URL
  method: 'POST',
  body: JSON.stringify(), 
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
input[type=text], select, textarea {
    width: 50%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}
input[type=number], select, textarea {
    width: 50%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

</style>
