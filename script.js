console.log("JS: Loaded")

// PROVIDED HELPER FUNCTION FOR STEP 5 (STRETCH) - Do not modify
// This simulates an API call that returns matching colors
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

// STEP 1: Pick a color and preview it
// TODO: Select the color input (#color-picker) and attach a listener for the 'input' event
// TODO: In your handler function, read the color value (e.target.value)
// TODO: Update the preview box's background with that value
// TODO: Update the "Selected HEX" display to match the chosen color
// TODO: Update the status line (#status-message) so it says "Selected [hex]"

// STEP 2: Save your favorite
// TODO: Select the Save Favorite button (#save-btn) and listen for 'click'
// TODO: Inside the callback:
//   - Save the current selection into a variable (e.g., savedHex)
//   - Update the "Saved favorite" display to match that variable
//   - Update the status line (#status-message) to confirm the save

// STEP 3: Reset to a clean slate
// TODO: Select the Reset button (#reset-btn) and listen for 'click'
// TODO: Inside the callback:
//   - Set your saved variable back to null or empty
//   - Update the "Saved favorite" display to show "—"
//   - Update the status line (#status-message) to announce the reset

// STEP 4: Polish and refine user feedback
// TODO: Test your app and refine status messages to be short and clear
// TODO: Ensure consistent wording across actions
// TODO: Optional: Make the preview box border match the selected color

// STEP 5 (STRETCH): Fetch a matching palette
// TODO: Show the palette button by setting its style.display = 'block'
// TODO: Add a click listener to the palette button (#palette-btn)
// TODO: Inside the callback:
//   - Call fetchPaletteByHex(currentHex) with try/catch
//   - Render the returned swatches in the swatch container
//   - Show the swatch area by setting its style.display = 'block'
//   - Update the status line (#status-message) while loading and once swatches are displayed
