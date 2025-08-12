document.getElementById("add-wish-btn").addEventListener("click", () => {
    const input = document.getElementById("wish-input");
    const wishText = input.value.trim();

    if (wishText) {
        // Show it publicly on the wall
        const div = document.createElement("div");
        div.className = "wish";
        div.textContent = wishText;
        document.getElementById("wish-wall").appendChild(div);

        // Send it silently to Google Sheets
        fetch("https://script.google.com/macros/s/AKfycbx1TyYaEh8xVWQK3eDUK8pL5Y3xMl93r5hyBZ7gIXkEyd_vlv5L4krshE2tR5ofbVHmrg/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "wish=" + encodeURIComponent(wishText)
        });

        // Clear the input
        input.value = "";
    }
});
document.getElementById("wish-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // prevent default Enter behavior
        document.getElementById("add-wish-btn").click(); // simulate button click
    }
});
