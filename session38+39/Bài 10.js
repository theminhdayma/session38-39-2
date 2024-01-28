document.getElementById("input").addEventListener("input", function() {
    const filter = this.value.toUpperCase();
    const table = document.getElementById("table");
    const rows = table.getElementsByTagName("tr");
  
    for (let i = 1; i < rows.length; i++) {
      const nameCell = rows[i].getElementsByTagName("td")[0];
      if (nameCell) {
        const name = nameCell.textContent || nameCell.innerText;
        if (name.toUpperCase().includes(filter)) {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  });