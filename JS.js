const URL="https://api.covid19api.com/summary"

function getData(URL)
{
    fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      for(let i of data.Countries)
      {
        if(i.Country=="India")
        {
            document.getElementById("Country").innerText=i.Country;
            document.getElementById("Date").innerText=new Date().toDateString();
            document.getElementById("tc").innerText=i.TotalConfirmed;
            document.getElementById("td").innerText=i.TotalDeaths;
            document.getElementById("nc").innerText=i.NewConfirmed;
            document.getElementById("nd").innerText=i.NewDeaths;
        }
      }
    })
    .catch((error) => console.log(error.message));
}


getData(URL);