


//This is the RSS feed where data is being pulled from.
rssURL = "https://rss.app/feeds/C9t9xdGBsY3PdSht.xml"
//This function displays the RSS feed.
function getData() {
    //Here the data is fetched from the URL  
    fetch(rssURL)
    //Here, if there is an error retrieving the data the user       will be alerted
    .catch(function (error) {
	      console.log('Request failed', error);
        alert('Oh no! There was an error retrieving the data!')})
    //Here the data fetched from the RSS feed is converted
    //into a string
    .then(response => response.text())
    .then(str => {
        const parser = new DOMParser();
        //The string is then loaded into an XML file.
        const xmlDoc = parser.parseFromString(str, 'text/xml');
        //The items are then identified for use.
        const items = xmlDoc.querySelectorAll('item');
        //Loads the elements in the XML file 
        //into an array, ready to be used.
    items.forEach(item => {
        var title = item.querySelector('title').textContent;
        var link = item.querySelector('link').textContent;
        var description = item.querySelector('description').textContent;
        //Replaces the associated elements in the HTML file
        //with the elements from the XML file
        document.getElementById("title").innerHTML = title;
        document.getElementById("link").innerHTML = link;
        document.getElementById("description").innerHTML = description;
    })
  })
}  

//This function allows the switch between light and dark mode
function chngMOD() {
    //Selects the documents body.
    var element = document.body;
    //Toggles the css between the body tag and the
    //.dark-mode tag.
    element.classList.toggle("dark-mode")
}




