fetch("data.json")
.then(response => response.json())
.then(davlatlar => {
const container = document.getElementById("countries");


    davlatlar.forEach(davlat => {
        container.innerHTML += `
            <div class="card">
                <h2>${davlat.bayroq} ${davlat.nomi}</h2>
                <p>Poytaxt: ${davlat.poytaxt}</p>
                <p>Aholisi: ${davlat.aholi}</p>
            </div>
        `;
    });
})
.catch(error => {
    console.log("Xatolik:", error);
});
