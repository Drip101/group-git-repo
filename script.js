let gyms = [
    {
        title: "la fitness",
        image: "lf.png",
        description: "description",
        rating: 4,
        location: ["address"],
        distance: 0.3

    },
    // need to add images, addresses and descriptions to each gym location//
    {
        title: "planet fitness",
        image: "pf.png",
        description: "description",
        rating: 3.8,
        location: ["address"],
        distance: 0.2
    },

    {
        title: "crunch fitness",
        image: "cf.png",
        description: "description",
        rating: 3.2,
        location: ["address"],
        distance: 0.1
    }
]
let ss = e => document.querySelector(e)

let age = document.getElementById("age")
let ageval
console.log(age)

let subscribe = document.getElementById("subscribe")
console.log(subscribe)


subscribe.addEventListener("click", () => {
    console.log("hello")
    ageval = age.value
    //we have to add the url to the event listener locally to make sure it work.
    let exampleUrl = 'https://fitness-calculator.p.rapidapi.com/bmi?age=' + ageval + '&weight=65&height=180'
    console.log(age.value)
    console.log(ageval)
    console.log(exampleUrl)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd06ec7497amsh95f885629733a6dp16d216jsn1b38d4de183c',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };
    
    fetch(exampleUrl, options)
        .then(response => response.json())
        .then(response => {
            //console.log(response)
        //console.log(response.data.bmi)
        let bmi=response.data.bmi
        //console.log(bmi)
        })
        .catch(err => console.error(err));
})






const showlocations = (g) => {
    let gym = document.createElement("div")
    gym.innerHTML = `
    <div class="location"><h5>${g.title}</h5><p>${g.description}</p><span>${g.rating}</span></div>
<div class="image"><img src="./images/${g.image}" alt=""></div>
    `
    ss("#gyms").append(gym)
}
gyms.forEach(g => showlocations(g))
//created filters for gyms: distance, rating, title//

Array.from(document.querySelectorAll(".distance input")).forEach(i => {
    i.addEventListener("input", () => {
        ss("#gyms").innerHTML = ""
        let v = ss(".distance input:checked").value
        let d = gyms.filter(g => g.distance == v)
        d.forEach(g => showlocations(g))
    })
})