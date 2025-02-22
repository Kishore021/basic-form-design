document.addEventListener("DOMContentLoaded", function () {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("dob").setAttribute("max", today);

    populateStates();
});

const stateDistricts = {
    "1.Andhra Pradesh": ["Srikakulam", "Parvathipuram Manyam", "Vizianagaram", "Visakhapatnam", "Anakapalli", "Alluri Sitharama Raju", "Kakinada", "East Godavari", "Konaseema", "West Godavari", "Eluru", "Krishna", "NTR", "Guntur", "Palnadu", "Bapatla", "Prakasam", "Sri Potti Sriramulu Nellore", "Kurnool", "Nandyal", "Anantapur", "Sri Sathya Sai", "YSR Kadapa", "Annamayya", "Chittoor", "Tirupati"],
    "Arunachal Pradesh": [],
    "Assam": [],
    "Bihar": [],
    "Chhattisgarh": [],
    "Goa": [],
    "Gujarat": [],
    "Haryana": [],
    "Himachal Pradesh": [],
    "Jharkhand": [],
    "Karnataka": [],
    "Kerala": [],
    "Madhya Pradesh": [],
    "Maharashtra": [],
    "Manipur": [],
    "Meghalaya": [],
    "Mizoram": [],
    "Nagaland": [],
    "Odisha": [],
    "Punjab": [],
    "Rajasthan": [],
    "Sikkim": [],
    "Tamil Nadu": [],
    "Telangana": [],
    "Tripura": [],
    "Uttar Pradesh": [],
    "Uttarakhand": [],
    "West Bengal": [],
    "Andaman and Nicobar Islands": [],
    "Chandigarh": [],
    "Dadra and Nagar Haveli and Daman and Diu": [],
    "Delhi": [],
    "Jammu and Kashmir": [],
    "Ladakh": [],
    "Lakshadweep": [],
    "Puducherry": []
};

function populateStates() {
    let stateSelect = document.getElementById("state");
    stateSelect.innerHTML = '<option value="">Select State...</option>'; // Ensure default option
    for (let state in stateDistricts) {
        let option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    }
}

function updateDistricts() {
    let state = document.getElementById("state").value;
    let districtSelect = document.getElementById("district");

    districtSelect.innerHTML = '<option value="">Select District...</option>';
    if (stateDistricts[state] && stateDistricts[state].length > 0) {
        stateDistricts[state].forEach(district => {
            let option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}