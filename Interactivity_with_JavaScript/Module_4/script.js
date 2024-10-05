function addTabFocus() {
  // Get all images in preview
  const images = document.getElementsByClassName("preview");

  for (let i = 0; i < images.length; i++) {
    // Add tab focus
    images[i].setAttribute("tabindex", i);

    // Add focus style
    images[i].addEventListener("focus", () => {
      images[i].classList.add("tabfocus");
    });

    // Remove focus style
    images[i].addEventListener("blur", () => {
      images[i].classList.remove("tabfocus");
    });
  }
}

  function upDate(previewPic) {
    /* In this function you should 
         1) change the url for the background image of the div with the id = "image" 
         to the source file of the preview image
         2) Change the text  of the div with the id = "image" 
         to the alt text of the preview image 
         */
    let img = document.getElementById("image");
    img.style.backgroundImage = "url('" + previewPic.src + "')";
    img.innerHTML = previewPic.alt;
  }

  function unDo() {
    /* In this function you should 
         1) Update the url for the background image of the div with the id = "image" 
         back to the orginal-image.  You can use the css code to see what that original URL was
         
         2) Change the text  of the div with the id = "image" 
         back to the original text.  You can use the html code to see what that original text was
         */
    let img = document.getElementById("image");
    img.style.backgroundImage = "url()";
    img.innerHTML = "Hover over an image below to display here.";
  }
