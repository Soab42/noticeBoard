export function checkImageURL(url) {
  fetch(url)
    .then((response) => {
      if (
        response.ok &&
        response.headers.get("content-type").startsWith("image")
      ) {
        console.log("Image URL is valid and points to a valid image file.");
        return true;
      } else {
        console.log(
          "Image URL is not valid or doesn't point to a valid image file."
        );
        return false;
      }
    })
    .catch((error) => {
      console.error("An error occurred while checking the image URL:", error);
      return false;
    });
}

// // Replace this with your image URL
// const imageURL = "https://example.com/path/to/your/image.jpg";
// checkImageURL(imageURL);
