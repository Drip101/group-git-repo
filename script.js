let gyms = [
    {
        title: "la fitness",
        image: "lf.png",
        description: "description",
        rating: 4,
        location: ["address"],
        distance: 0.3

    },

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