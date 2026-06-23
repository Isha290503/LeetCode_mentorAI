# LeetCode AI Mentor

LeetCode AI Mentor is a Chrome Extension that analyzes LeetCode solutions using Google's Gemini API. It extracts the current problem statement and user solution directly from the LeetCode page and provides AI-powered feedback including complexity analysis, optimization suggestions, and guided hints.

---

## Features

### Current Features

* Extracts LeetCode problem statements automatically
* Extracts user solutions directly from the editor
* Integrates with Google Gemini API
* Estimates Time Complexity
* Estimates Space Complexity
* Evaluates solution correctness
* Suggests optimization opportunities
* Generates guided hints instead of revealing solutions
* Secure API key management using Chrome Storage API

---

## How It Works

1. Open a LeetCode problem.
2. Click the extension icon.
3. Press **Analyze Solution**.
4. The extension:

   * Extracts the problem statement
   * Extracts the user's code
   * Sends the data to Gemini
   * Displays AI-generated feedback

### Architecture

LeetCode Page
→ Content Script
→ Popup Script
→ Gemini API
→ Analysis Results

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Chrome Extension APIs

* Manifest V3
* Content Scripts
* Runtime Messaging
* Storage API
* Tabs API

### AI

* Google Gemini API (Gemini 2.5 Flash)

---

## Future Improvements

* Improved UI with structured analysis cards
* Pattern Detection (Hashing, DP, Sliding Window, etc.)
* Related LeetCode Problem Recommendations
* Difficulty Estimation
* Interview Readiness Score
* Learning Resource Suggestions
* Multi-language Support
* One-click Code Optimization Insights

---

## Screenshots

### Extension Popup



<img width="1902" height="956" alt="image" src="https://github.com/user-attachments/assets/d7485dc4-de57-4792-b550-71a5eae97505" />


### Analysis Example


<img width="1898" height="917" alt="image" src="https://github.com/user-attachments/assets/367b48d7-ff89-4d6e-ad33-39235dfd5391" />


### Settings Page


<img width="1900" height="875" alt="image" src="https://github.com/user-attachments/assets/9f43839e-6f98-40f8-8238-c81b0e6b20c7" />

---

## Installation

1. Clone the repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode.
4. Click **Load unpacked**.
5. Select the project folder.
6. Open the extension settings.
7. Add your Gemini API key.
8. Start analyzing LeetCode solutions.

---

## Author

Isha
