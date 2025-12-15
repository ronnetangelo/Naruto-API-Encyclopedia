# Naruto API Encyclopedia

A simple web-based encyclopedia application that consumes the **Dattebayo (Naruto) API** to search and display **Naruto Characters** and **Tailed Beasts**. The project uses a lightweight **Node.js + Express proxy server** to avoid CORS issues and ensure reliable API access.

---

## 📌 Features

* Search Naruto **Characters** by name
* Search **Tailed Beasts** by name
* Dropdown selector to switch between Characters and Tailed Beasts
* Responsive card-based UI
* Image handling with graceful fallbacks
* Backend proxy to handle CORS and image requests

---

## 🗂 Project Structure

```
project-root/
│
├── index.html        # Frontend UI and logic
├── server.js         # Backend proxy server
├── package.json      # Node.js dependencies
└── README.md         # Project documentation
```

---

## ⚙️ Technologies Used

### Frontend

* HTML5
* CSS3 (Grid-based layout)
* Vanilla JavaScript (Fetch API)

### Backend

* Node.js
* Express.js
* node-fetch (dynamic import)
* CORS middleware

### External API

* Dattebayo Naruto API

  * `https://api-dattebayo.vercel.app/`

---

## 🚀 Getting Started

### 1. Clone or Download the Project

```
git clone <your-repository-url>
cd project-root
```

### 2. Install Backend Dependencies

Make sure you have **Node.js v18+** installed.

```
npm install
```

### 3. Start the Backend Proxy Server

```
node server.js
```

You should see:

```
✅ Backend running at http://localhost:3000
```

---

## 🌐 Running the Frontend

Open `index.html` using one of the following:

* VS Code **Live Server** extension (recommended)
* `npx http-server`
* Any local HTTP server

> ⚠️ Opening the file directly (`file://`) may cause fetch errors.

---

## 🔍 How Search Works

1. User selects either **Characters** or **Tailed Beasts** from the dropdown.
2. User enters a search term (optional).
3. The frontend sends a request to:

```
http://localhost:3000/api/<collection>?page=1&limit=50
```

4. The backend proxy forwards the request to the Dattebayo API.
5. Results are filtered by name on the client side.
6. Matching results are displayed as cards.

---

## 🖼 Image Handling

* Uses the `images` array from the API when available
* Automatically fixes protocol-less URLs (`//image-url`)
* Displays a placeholder image if no image exists

---

## 🧠 API Collections Used

Only the following collections are supported:

* `characters`
* `tailed-beasts`

Other collections are intentionally ignored to keep the application focused.

---

## 🛠 Backend Proxy (server.js)

The proxy server:

* Prevents CORS issues
* Forwards query parameters
* Handles both JSON and image responses
* Gracefully returns errors in JSON format

Example proxied route:

```
/api/characters
/api/tailed-beasts
```

---

## ❗ Common Issues

### "Failed to fetch" Error

* Ensure `server.js` is running
* Access frontend via `http://localhost`, not `file://`

### Images Not Loading

* Confirm the proxy server is active
* Check browser console for blocked requests

---

## 📈 Possible Improvements

* Pagination support
* Loading spinners
* Detailed character pages
* Search debounce
* UI filtering by village or affiliation

---

## 📜 License

This project is for **educational purposes** only and is not affiliated with the official Naruto franchise.

---

## 👤 Author

Developed by **Ronnet Quintana**

Naruto API Encyclopedia Project
