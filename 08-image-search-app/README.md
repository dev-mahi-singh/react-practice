# 📸 Image Search App

A modern and responsive **Image Search Application** built using **React.js** and the **Unsplash API**.
Users can search for images dynamically or explore random images when no search query is provided.

---

## 🚀 Features

* 🔍 Search images by any keyword
* 🎲 Random images when search input is empty
* 📄 Load More functionality (pagination)
* ⚡ Fast API fetching using Axios
* 🎨 Beautiful responsive UI with Tailwind CSS
* 🖼️ Masonry-style image grid layout
* 📝 Image description on hover
* ⏳ Loading spinner for better UX
* ❌ Error handling (no results / API error)

---

## 🧠 How It Works

* When the app loads → random images are displayed
* When user searches → images related to query are fetched
* If search input is empty → random topic images are shown
* Clicking **Load More** loads next page images

---

## 🛠️ Tech Stack

* ⚛️ React.js
* 🎨 Tailwind CSS
* 🌐 Axios
* 📸 Unsplash API

---

## 🔑 API Used

This project uses the **Unsplash API** to fetch images.

👉 Get your API key from: [https://unsplash.com/developers](https://unsplash.com/developers)

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/dev-mahi-singh/react-practice.git
```

2. Navigate to the project folder:

```bash
cd react-practice/08-image-search-app
```

3. Install dependencies:

```bash
npm install
```

4. Install Axios (for API requests):

```bash
npm install axios
```

5. Add your API key:

Replace in your code:

```js
const apiKey = "YOUR_API_KEY";
```

6. Start the development server:

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── ImageGrid.jsx
│   ├── ImageCard.jsx
│   ├── Loader.jsx
│   └── LoadMoreBtn.jsx
│
├── App.jsx
└── main.jsx
```

---

## 🎯 Future Improvements

* 🔄 Infinite Scroll
* 🔍 Image Modal (Zoom View)
* ❤️ Like / Save Images
* 📥 Download Button
* 🌙 Dark Mode

---

## 🙌 Acknowledgements

* Thanks to **Unsplash** for providing free high-quality images

---

## 📌 Author

**Mahi Singh**
💻 Aspiring Full Stack Developer

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repo and share it!
