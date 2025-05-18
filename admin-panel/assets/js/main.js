 
   document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("plholder");
    const tableRows = document.querySelectorAll(".promo-table tbody tr");

    searchInput.addEventListener("input", function () {
      const searchValue = this.value.toLowerCase().trim();

      tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchValue)) {
          row.style.display = ""; // Show the row
        } else {
          row.style.display = "none"; // Hide the row
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("plholder");
    const tableRows = document.querySelectorAll(".client-table tbody tr");

    searchInput.addEventListener("input", function () {
      const searchValue = this.value.toLowerCase().trim();

      tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchValue)) {
          row.style.display = ""; // Show the row
        } else {
          row.style.display = "none"; // Hide the row
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("plholder");
    const tableRows = document.querySelectorAll(".table-sec tbody tr");

    searchInput.addEventListener("input", function () {
      const searchValue = this.value.toLowerCase().trim();

      tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchValue)) {
          row.style.display = ""; // Show the row
        } else {
          row.style.display = "none"; // Hide the row
        }
      });
    });
  });
   document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("plholder");
    const tableRows = document.querySelectorAll(".pic-table tbody tr");

    searchInput.addEventListener("input", function () {
      const searchValue = this.value.toLowerCase().trim();

      tableRows.forEach(row => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchValue)) {
          row.style.display = ""; // Show the row
        } else {
          row.style.display = "none"; // Hide the row
        }
      });
    });
  });
  


   