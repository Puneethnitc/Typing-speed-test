# Typing Speed Test 🚀

A clean, responsive web app to test your typing speed using randomly selected sentences. Measures time and calculates your Words Per Minute (WPM) as you type.

## 🖥️ Features

- ✅ Random sentence generation
- ✅ Starts timer on first input
- ✅ Stops timer automatically on correct completion
- ✅ Calculates and displays WPM
- ✅ Reload button to reset and try again
- ✅ Mobile-friendly and disables keyboard suggestions
- ✅ Real-time input tracking (ready for future improvements)

## ⚠️ Mobile Keyboard Caution

> 📱 **Avoid using predictive text or suggestions offered by your mobile keyboard**, as this may affect the timer accuracy and WPM calculation. The app is designed for raw typing without autocomplete help to ensure a fair test.

## 🔗 Live Demo

👉 [Try the Typing Speed Test Live](https://puneethnitc.github.io/Typing-speed-test/)
> Test your typing speed instantly with a random sentence. Type without auto-suggestions for accurate results!

## 💡 Technologies Used

- HTML
- CSS (Responsive Design)
- JavaScript (DOM manipulation & logic)

## 🔧 How It Works

1. A random sentence appears on page load.
2. Typing starts the timer.
3. When you finish typing the sentence exactly:
   - The timer stops.
   - Time taken is displayed.
   - WPM is calculated as:
     ```
     WPM = (Number of Words / Time in seconds) × 60
     ```
4. Press **Reload** to try a new sentence and reset everything.

## 📱 Mobile Friendly

- The layout adapts to smaller screens.
- Keyboard autocorrect, autocomplete, and suggestions are turned off for accuracy.

## 🛠️ Future Improvements (Ideas)

- Highlight correct/incorrect characters in real-time.
- Add paragraph-level typing test.
- Keep track of high scores and averages.
- Add dark/light theme toggle.
- Leaderboard with localStorage or backend.

## 🚀 Getting Started

Simply open `index.html` in your browser — no setup needed!

## 📂 File Structure

typing-speed-test/
│
├── index.html # HTML structure
├── style.css # Styling
├── script.js # Logic and functionality
└── README.md # You're here!


## 📬 Author

Made with ❤️ by Puneeth 
Feel free to contribute or fork!
