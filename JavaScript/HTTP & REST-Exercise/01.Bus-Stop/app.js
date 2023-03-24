function getInfo() {
  const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";
  const stopInput = document.getElementById("stopId");
  const stopName = document.getElementById("stopName");
  const busesContainer = document.getElementById("buses");
  const stopInputVal = stopInput.value;
  busesContainer.innerHTML = '';  
  fetch(`${BASE_URL}${stopInputVal}`)
    .then((res) => res.json())
    .then((busInfo) => {
      const { name, buses } = busInfo;
      stopName.textContent = name;

      for (const key in buses) {
        const li = document.createElement("li");
        li.textContent = `Bus ${key} arrives in ${buses[key]} minutes`;
        busesContainer.appendChild(li);
      }
    })
    .catch((err) => {
      stopName.textContent = `Error`;
    });
}
