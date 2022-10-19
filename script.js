let gyms = [
    {
        title: "la fitness",
        image: "workout photo background.jpeg",
        description: "description",
        rating: 4,
        location: ["address"],
        distance: 0.3

    },
    // need to add images, addresses and descriptions to each gym location//
    {
        title: "planet fitness",
        image: "fitness background 2.jpeg",
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

//let age = document.getElementById("age")
//let ageval
//console.log(age)

//let weight = document.getElementById("weight")
//let weightval
//console.log(weight)

//let height = document.getElementById("height")
//let heightval
//console.log(height)


let subscribe = document.getElementById("subscribe")
//console.log(subscribe)

// var fff = funciton () {
    //
//}
subscribe.addEventListener("click", (e) => {
    console.log("hello")
    e.preventDefault()
    let r=ss("#error")
    //ageval = age.value
    //weightval = weight.value
    //heightval = height.value
    //we have to add the url to the event listener locally to make sure it work.
    let a=ss("#age").value,w=parseInt(ss("#weight").value),h=ss("#height").value
    console.log(w,h)
    if (w<40||w>160) {
r.textContent="Weight must be between 40kg and 160kg"
r.classList.add("active")
ss("#weight").value=""
    }else if (h<130||h>230) {
        r.textContent="Height must be between 130cm and 230cm"
        r.classList.add("active")
        ss("#height").value=""
            }
            else {
                r.classList.remove("active")
    let exampleUrl = 'https://fitness-calculator.p.rapidapi.com/bmi?age=' + a + '&weight=' + w + '&height='+ h+''
    //  let exampleUrl = 'https://fitness-calculator.p.rapidapi.com/bmi?age=23&weight=65&height=180'
    //console.log(age.value)
    //console.log(ageval)
    //console.log(weight.value)
    //console.log(weightval)
    //console.log(height.value)
    //console.log(heightval)
    //console.log(exampleUrl)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd06ec7497amsh95f885629733a6dp16d216jsn1b38d4de183c',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
    };
    //first api is complete
    fetch(exampleUrl, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        //console.log(response.data.bmi)
        let bmi=response.data.bmi
        ss("#bmi").textContent="bmi: "+response.data.bmi
        ss("#healthyweight").textContent="health: "+response.data.health
        //console.log(bmi)
        })
        .catch(err => console.error(err));

        
    }
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