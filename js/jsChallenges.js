document.addEventListener('DOMContentLoaded', () => {
    // For Challenge 1
    const subscribeCheckbox = document.querySelector("#subscribe");
    if (subscribeCheckbox) {
      subscribeCheckbox.addEventListener("click", (e) => {
        const emailDiv = document.querySelector("#emailDiv");
        if (e.target.checked) {
          emailDiv.style.display = "block"; // Show the email field
        } else {
          emailDiv.style.display = "none"; // Hide the email field
        }
      });
    }
  
    // For Challenge 2
    const sameAddressCheckbox = document.querySelector("#sameAddress");
    const billing = document.querySelector("#bill");
    const home = document.querySelector("#home");
    if (billing && home) { // Additional check if both elements exist
        home.addEventListener("input", (e) => {
            if (home.value == billing.value) {
                sameAddressCheckbox.disabled = true;
            }
            else {
                sameAddressCheckbox.disabled = false;
            }
        });
        billing.addEventListener("input", (e) => {
            if (home.value == billing.value) {
                sameAddressCheckbox.disabled = true;
            }
            else {
                sameAddressCheckbox.disabled = false;
            }
        });
    }
    if (sameAddressCheckbox) {
      sameAddressCheckbox.addEventListener("click", (e) => {
        if (e.target.checked) {
          if (billing && home) { // Additional check if both elements exist
            home.value = billing.value;
          }
        } else {
          const home = document.querySelector("#home");
          if (home) { // Check if the element exists
            home.value = "";
          }
        }
      });
    }
  });
  