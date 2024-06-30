// SEARCH
document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon");
    const closeSearchIcon = document.getElementById("close-search");
    const searchContainer = document.getElementById("search-container");
    const searchInput = document.getElementById("search-input");
    const headerContainer = document.querySelector(".header__container");
  
    searchIcon.addEventListener("click", function() {
      searchContainer.style.display = "flex";
      headerContainer.style.display = "none";
      searchInput.focus();
    });
  
    closeSearchIcon.addEventListener("click", function() {
      searchContainer.style.display = "none";
      headerContainer.style.display = "flex";
    });
  
    searchInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter" && searchInput.value.trim() !== "") {
        // Handle search functionality here if needed
        searchContainer.style.display = "none";
        headerContainer.style.display = "flex";
      }
    });
  
    const searchHistoryCloseIcons = document.querySelectorAll(".search__history ion-icon");
    searchHistoryCloseIcons.forEach(icon => {
      icon.addEventListener("click", function() {
        this.parentElement.style.display = "none";
      });
    });
  });
  


// FOOTER
window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer')
    const scrollHeight = window.scrollY

    if (scrollHeight > 50) {
        footer.classList.add('sticky')
    } else {
        footer.classList.remove('sticky')
    }
})

