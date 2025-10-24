# Solution Code - Favorite Color Picker

<details>
<summary> Step 1 Solution - Pick a Color and Preview It</summary>

JavaScript - script.js

```jsx
// STEP 1: Pick a color and preview it
const colorPicker = document.getElementById("color-picker");
const selectedHexDisplay = document.getElementById("selected-hex");
const previewBox = document.getElementById("preview-box");

let currentHex = "#4a90e2";

colorPicker.addEventListener("input", function (e) {
  currentHex = e.target.value;
  selectedHexDisplay.textContent = currentHex;
  previewBox.style.backgroundColor = currentHex;
});

```

</details>

<details>
<summary>Step 2 Solution – Save Your Favorite</summary>

JavaScript - script.js

```jsx
// STEP 2: Save your favorite
const saveBtn = document.getElementById("save-btn");
const savedHexDisplay = document.getElementById("saved-hex");
const statusMessage = document.getElementById("status-message");

let savedHex = null;

saveBtn.addEventListener("click", function () {
  savedHex = currentHex;
  savedHexDisplay.textContent = savedHex;
  statusMessage.textContent = `Saved ${savedHex}`;
});
```

</details>  
<details>
<summary>Step 3 Solution – Reset to a Clean Slate</summary>

JavaScript - script.js

```jsx
// STEP 3: Reset to a clean slate
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function () {
  savedHex = null;
  savedHexDisplay.textContent = "—";
  statusMessage.textContent = "Reset favorite";
});
```

</details>   
<details>

<summary> Step 4 Solution – Polish and Refine User Feedback</summary>

JavaScript - script.js

```jsx
colorPicker.addEventListener("input", function (e) {
  currentHex = e.target.value;
  selectedHexDisplay.textContent = currentHex;
  previewBox.style.backgroundColor = currentHex;
  previewBox.style.borderColor = currentHex; // optional polish
  statusMessage.textContent = `Selected ${currentHex}`;
});
```
</details>   



<details>

<summary> Step 5 Solution - Generate a Matching Palette Using the Prebuilt Helper (Optional/Stretch) </summary>

HTML - index.html

```html
<!-- Existing controls -->
<div class="controls">
  <button id="save-btn" class="btn-primary">Save Favorite</button>
  <button id="reset-btn" class="btn-secondary">Reset</button>
  <button id="palette-btn" class="btn-success" style="display: none;">Get Palette</button>
</div>

<!-- Status message -->
<div id="status-message" class="status-message"></div>

<!-- ✅ Add this below -->
<section id="swatch-area" style="display: none;">
  <h3>Matching Palette</h3>
  <div id="swatch-container" class="swatch-container"></div>
</section>

```

JavaScript - script.js

```jsx
// STEP 5 (STRETCH): Fetch a matching palette
paletteBtn.addEventListener("click", async function () {
  if (!currentHex) {
    statusMessage.textContent = "Please select a color first";
    return;
  }

  try {
    statusMessage.textContent = "Loading palette...";
    const swatches = await fetchPaletteByHex(currentHex, {
      mode: "analogic",
      count: 5,
    });

    // Clear previous swatches
    swatchContainer.innerHTML = "";

    // Render new swatches
    swatches.forEach((hex) => {
      const swatchDiv = document.createElement("div");
      swatchDiv.className = "swatch";

      const colorDiv = document.createElement("div");
      colorDiv.className = "swatch-color";
      colorDiv.style.backgroundColor = hex;

      const hexLabel = document.createElement("div");
      hexLabel.className = "swatch-hex";
      hexLabel.textContent = hex;

      swatchDiv.appendChild(colorDiv);
      swatchDiv.appendChild(hexLabel);
      swatchContainer.appendChild(swatchDiv);
    });

    // Show the swatch area
    swatchArea.style.display = "block";
    statusMessage.textContent = "Palette loaded";
  } catch (err) {
    statusMessage.textContent = "Could not load palette. Try again.";
    console.error("Palette fetch error:", err);
  }
});
```
</details>   




<details>

<summary> Final Solution – Base Steps</summary>

JavaScript - script.js

```jsx
// SOLUTION CODE - Complete JavaScript implementation (Does not include stretch) 

async function fetchPaletteByHex(hex, { mode = "analogic", count = 5 } = {}) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Generate complementary colors (simplified algorithm)
  const colors = [];
  const baseHue = parseInt(hex.slice(1), 16);

  for (let i = 0; i < count; i++) {
    const hueShift = mode === "analogic" ? i * 30 : i * 60;
    const newHue = (baseHue + hueShift) % 0xffffff;
    const newHex = "#" + newHue.toString(16).padStart(6, "0");
    colors.push(newHex);
  }

  return colors;
}

// DOM Element Selection
const colorPicker = document.getElementById("color-picker");
const selectedHexDisplay = document.getElementById("selected-hex");
const previewBox = document.getElementById("preview-box");
const savedHexDisplay = document.getElementById("saved-hex");
const saveBtn = document.getElementById("save-btn");
const resetBtn = document.getElementById("reset-btn");
const paletteBtn = document.getElementById("palette-btn");
const statusMessage = document.getElementById("status-message");
const swatchArea = document.getElementById("swatch-area");
const swatchContainer = document.getElementById("swatch-container");

// State variables
let currentHex = "#4a90e2";
let savedHex = null;

// STEP 1: Pick a color and preview it
colorPicker.addEventListener("input", function (e) {
  currentHex = e.target.value;
  selectedHexDisplay.textContent = currentHex;
  previewBox.style.backgroundColor = currentHex;
  // Optional: Make border match selected color
  previewBox.style.borderColor = currentHex;
  statusMessage.textContent = `Selected ${currentHex}`;
});

// STEP 2: Save your favorite
saveBtn.addEventListener("click", function () {
  savedHex = currentHex;
  savedHexDisplay.textContent = savedHex;
  statusMessage.textContent = `Saved ${savedHex}`;
});

// STEP 3: Reset to a clean slate
resetBtn.addEventListener("click", function () {
  savedHex = null;
  savedHexDisplay.textContent = "—";
  statusMessage.textContent = "Reset favorite";
});
```
</details>   



<details>
<summary>Final Solution - Stretch Step</summary>

script.js

```jsx

// STEP 5 (STRETCH): Fetch a matching palette
paletteBtn.addEventListener("click", async function () {
  if (!currentHex) {
    statusMessage.textContent = "Please select a color first";
    return;
  }

  try {
    statusMessage.textContent = "Loading palette...";
    const swatches = await fetchPaletteByHex(currentHex, {
      mode: "analogic",
      count: 5,
    });

    // Clear previous swatches
    swatchContainer.innerHTML = "";

    // Render new swatches
    swatches.forEach((hex) => {
      const swatchDiv = document.createElement("div");
      swatchDiv.className = "swatch";

      const colorDiv = document.createElement("div");
      colorDiv.className = "swatch-color";
      colorDiv.style.backgroundColor = hex;

      const hexLabel = document.createElement("div");
      hexLabel.className = "swatch-hex";
      hexLabel.textContent = hex;

      swatchDiv.appendChild(colorDiv);
      swatchDiv.appendChild(hexLabel);
      swatchContainer.appendChild(swatchDiv);
    });

    // Show the swatch area
    swatchArea.style.display = "block";
    statusMessage.textContent = "Palette loaded";
  } catch (err) {
    statusMessage.textContent = "Could not load palette. Try again.";
    console.error("Palette fetch error:", err);
  }
});
```

index.html 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favorite Color Picker - Solution</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <div class="app-header">
            <h1>Favorite Color Picker</h1>
            <p>Choose a color, preview it, and save your favorite</p>
        </div>

        <div class="color-section">
            <div class="color-input-group">
                <input type="color" id="color-picker" value="#4a90e2">
                <div class="color-info">
                    <label for="selected-hex">Selected HEX:</label>
                    <div id="selected-hex" class="hex-display">#4a90e2</div>
                </div>
            </div>
        </div>

        <div class="preview-section">
            <div id="preview-box" class="preview-box" style="background-color: #4a90e2;">
                Preview
            </div>
            <div class="preview-info">
                <h3>Saved Favorite:</h3>
                <div id="saved-hex" class="hex-display">—</div>
            </div>
        </div>

        <div class="controls">
            <button id="save-btn" class="btn-primary">Save Favorite</button>
            <button id="reset-btn" class="btn-secondary">Reset</button>
            <button id="palette-btn" class="btn-success">Get Palette</button>
        </div>

        <div id="status-message" class="status-message"></div>

        <section id="swatch-area" style="display: none;">
            <h3>Matching Palette</h3>
            <div id="swatch-container" class="swatch-container"></div>
        </section>
    </div>

    <script src="script.js" defer></script>
</body>
</html>
```
</details>