export function setupCounter(element) {
  const input = document.querySelector("input[type=file]");

  const zicaBrab = input.addEventListener("change", (event) => {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        return data;
      } catch {
        const errorElement = document.createElement("div");
        errorElement.innerHTML = "Error";
        const errorLabel = (document.getElementById(
          "errorJson"
        ).style.visibility = "visible");
        return;
      }
    };
  });
}
