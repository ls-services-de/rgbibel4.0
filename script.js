const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});



document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}



let highlightedElement = null; // Variable zur Verfolgung des zuletzt markierten Elements

document.getElementById('suchleiste').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        scrollToText();
    }
});

function scrollToText() {
    const searchText = document.getElementById('suchleiste').value.toLowerCase();
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, a');
    let found = false;

    for (let i = 0; i < elements.length; i++) {
        const elementText = elements[i].textContent.toLowerCase();
        if (elementText.includes(searchText)) {
            found = true;
            elements[i].scrollIntoView({ behavior: 'smooth' });

            // Markiere den gesuchten Text im Element
            const markedText = elements[i].innerHTML.replace(new RegExp(searchText, 'gi'), match => `<span class="highlight">${match}</span>`);
            elements[i].innerHTML = markedText;

            // Setze die globale Variable mit dem zuletzt markierten Element
            highlightedElement = elements[i];

            // Entferne das Highlight nach 5 Sekunden
            setTimeout(removeHighlight, 5000);

            break;
        }
    }

    if (!found) {
        alert('Der gesuchte Text wurde nicht gefunden.');
    }
}

function removeHighlight() {
    if (highlightedElement) {
        highlightedElement.innerHTML = highlightedElement.textContent;
        highlightedElement = null;
    }
}












    document.addEventListener("DOMContentLoaded", function() {
      const slider = document.querySelector(".slides");
      const slides = document.querySelectorAll(".slides img");
      const prevBtn = document.querySelector(".prev-btn");
      const nextBtn = document.querySelector(".next-btn");
    
      let slideIndex = 0;
    
      function showSlide(index) {
        if (index < 0) {
          slideIndex = slides.length - 1;
        } else if (index >= slides.length) {
          slideIndex = 0;
        }
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
      }
    
      prevBtn.addEventListener("click", () => {
        slideIndex--;
        showSlide(slideIndex);
      });
    
      nextBtn.addEventListener("click", () => {
        slideIndex++;
        showSlide(slideIndex);
      });
    
      function autoSlide() {
        slideIndex++;
        showSlide(slideIndex);
      }
    
      setTimeout(() => {
        autoSlide();
        setInterval(autoSlide, 3700);
      }, 10000);
    });



    // JavaScript-Code zum Einblenden des Rests der Website nach 6 Sekunden
    setTimeout(function() {
      var videoContainer = document.getElementById("video-container");
      var restDerWebsite = document.getElementById("rest-der-website");
      
      videoContainer.style.display = "none";
      restDerWebsite.style.display = "block";

      var opacity = 0;
      var interval = setInterval(function() {
        opacity += 0.03;
        restDerWebsite.style.opacity = opacity;
        if (opacity >= 1) {
          clearInterval(interval); // Stoppt die Schleife, sobald die Opazität 1 erreicht hat
        }
      }, 110);
    }, 4500); // 6000 Millisekunden = 6 Sekunden




    document.addEventListener("DOMContentLoaded", function() {
      const shortText = document.querySelector(".short-text");
      const fullText = document.querySelector(".full-text");
      const toggleButton = document.querySelector(".toggle-button");
    
      toggleButton.addEventListener("click", function() {
        if (fullText.style.display === "none") {
          fullText.style.display = "block";
          shortText.style.display = "none";
          toggleButton.textContent = "Weniger Anzeigen";
        } else {
          fullText.style.display = "none";
          shortText.style.display = "block";
          toggleButton.textContent = "Mehr Lesen";
        }
      });
    });