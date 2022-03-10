const doc = document;
const result = doc.getElementById("result");
const tryBtn = doc.getElementById("try");

const api = () => {
  fetch("https://www.boredapi.com/api/activity")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      result.innerHTML = `
    <table class="table">
    <thead>
      <tr>
        <th>Activity</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${data.activity}</td>
        <td>${data.type.charAt(0).toUpperCase() + data.type.slice(1)}</td>
      </tr>
    </tbody>
  </table>
    `;
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
};

doc.addEventListener("DOMContentLoaded", api);
tryBtn.addEventListener("click", api);
