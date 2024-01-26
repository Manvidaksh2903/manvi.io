 function drawStarTriangle(height) {
        let triangle = "";
        for (let i = 1; i <= height; i++) {
          let row = "";
          // Add leading spaces
          for (let s = 1; s <= height - i; s++) {
            row += "";
          }
          // Add stars
          for (let j = 1; j <= 2 * i - 1; j++) {
            row += "*";
          }
          triangle += row + "\n";
        }
        return triangle;
      }

      function generateTriangle() {
        const heightInput = document.getElementById("height");
        const triangleOutput = document.getElementById("triangle-output");
        const height = parseInt(heightInput.value, 10);

        if (isNaN(height) || height < 1 || height > 50) {
          triangleOutput.textContent =
            "Please enter a valid height greater than 0 and less than 50.";
        } else {
          const trianglePattern = drawStarTriangle(height);
          triangleOutput.textContent = trianglePattern;
        }
      }


//generate half pyramid//////////////////


function drawhalfpyramid(height) {
  let pyramid = "";
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    pyramid += row + "\n";
  }
  return pyramid;
}

function generatepyramid() {
  const heightInput = document.getElementById("height");
  const triangleOutput = document.getElementById("halfpyramid-output");
  const height = parseInt(heightInput.value, 10);

  if (isNaN(height) || height < 1 || height > 50) {
    triangleOutput.textContent =
      "Please enter a valid height greater than 0 and less than 50.";
  } else {
    const trianglePattern = drawhalfpyramid(height);
    triangleOutput.textContent = trianglePattern;
  }
}
  
