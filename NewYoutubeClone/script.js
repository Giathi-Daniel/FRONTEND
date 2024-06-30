// SEARCH
document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon");
    const closeSearchIcon = document.getElementById("close-search");
    const searchContainer = document.getElementById("search-container");
    const searchInput = document.getElementById("search-input");
    const headerContainer = document.querySelector(".header__container");
    const footer = document.getElementById('footer')
  
    // footer.style.display = "none"

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
        searchContainer.style.display = "none";
        headerContainer.style.display = "flex";
      }
    });
  
    document.addEventListener("click", function(event) {
      if (event.target && event.target.matches(".search__history ion-icon")) {
        const listItem = event.target.closest("li");
        listItem.remove();
        updateSearchHistory();
      }
    });
  
    function updateSearchHistory() {
      const searchHistoryList = document.querySelector(".search__history ul");
      const listItems = searchHistoryList.querySelectorAll("li");
      if (listItems.length === 0) {
        searchHistoryList.innerHTML = "<li>No search history</li>";
      }
    }
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

