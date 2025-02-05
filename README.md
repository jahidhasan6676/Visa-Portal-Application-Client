# VISA PORTAL APPLICATION

**Purpose**
Visa Portal Application is a dedicated platform offering comprehensive visa services for students, tourists, and professionals. Our website simplifies the visa application process, providing step-by-step guidance and support for securing student visas, tourist visas, and office visas. We ensure a hassle-free experience with up-to-date information, easy document submission, and expert assistance throughout the process. Whether you're planning to study abroad, explore new destinations, or travel for business, Visa Portal Application is your reliable partner for a smooth and efficient visa application journey. Trust us to make your travel dreams a reality.

## 🌐 Live Site URL
[Visit the live site here!](https://visa-portal-website.web.app)

##  Features of the Website
- **Dark/Light Theme Toggle:** Users can easily switch between dark and light modes.
- **Responsive Design:** The website offers an excellent view on mobile, tablet, and desktop devices.
- **User-Friendly Interface:**Enhances the user experience through a simple, elegant, and intuitive      design, making navigation seamless and enjoyable for all users.
- **Custom Animations:** Different interesting animations are shown in some sections. For which the user will feel attractive and comfortable to use the website.
- **Search Functionality:** Users can easily see their applications by searching by country name.
- **Social Login**: Google authentication for quick login and registration.
- **Conditionally Function** Shows "Login" and "Register" if the user is not logged in.
- Shows the user’s photo and "Logout" if the user is logged in.

### **External Packages**
- **React Awesome Reveal**: Our service cards are shown in Zoom format.
- **React Tooltip**: Hovering over the photoURL in the navbar display name with the react Tooltip package.
- **Animation.Css**: Our Coaching plan shown by animation css.


## Dependencies
- `@emotion/react`: For styled components in React.
- `@smastrom/react-rating`: Rating component for books.
- `animate.css`: CSS library for animations.
- `firebase`: For authentication and backend.
- `localforage`: For storing data offline.
- `lottie-react`: For Lottie animations in React.
- `match-sorter`: For sorting and filtering data.
- `react`: JavaScript library for building user interfaces.
- `react-awesome-reveal`: For adding reveal animations.
- `react-dom`: For DOM manipulation in React.
- `react-fast-marquee`: Scrolling text component.
- `react-icons`: For React component icons.
- `react-intersection-observer`: For observing intersection of elements.
- `react-rating`: For implementing ratings.
- `react-router-dom`: For navigation within the app.
- `react-toastify`: For toast notifications.
- `react-tooltip`: For adding tooltips.
- `sort-by`: For sorting data.
- `sweetalert2`: For creating beautiful alerts.
- `swiper`: For creating sliders/carousels.

## Dev Dependencies
- `@eslint/js`: JavaScript linting with ESLint.
- `@types/react`: TypeScript types for React.
- `@types/react-dom`: TypeScript types for React DOM.
- `@vitejs/plugin-react`: Vite plugin for React.
- `autoprefixer`: CSS prefixing for better compatibility.
- `daisyui`: TailwindCSS component library.
- `eslint`: Linter for identifying and fixing code quality issues.
- `eslint-plugin-react`: ESLint plugin for React.
- `eslint-plugin-react-hooks`: ESLint plugin for React Hooks.
- `eslint-plugin-react-refresh`: ESLint plugin for React Fast Refresh.
- `globals`: For adding global variables support in linting.
- `postcss`: Tool for transforming CSS with JavaScript plugins.
- `tailwindcss`: Utility-first CSS framework.
- `vite`: Build tool that aims to provide a faster and leaner development experience.

# 🛠 How to Run the Project Locally
   
## 📖 Table of Contents
- [Prerequisites](#prerequisites)
- [Step 1: Clone the Repository](#step-1-clone-the-repository)
- [Step 2: Install Dependencies](#step-2-install-dependencies)
- [Step 3: Set Up Environment Variables](#step-3-set-up-environment-variables)
- [Step 4: Start the Development Server](#step-4-start-the-development-server)
- [Step 5: Run the Backend (if applicable)](#step-5-run-the-backend-if-applicable)
- [Step 6: Test the Project](#step-6-test-the-project)
- [Step 7: Build for Production](#step-7-build-for-production)
- [Step 8: Troubleshooting](#step-8-troubleshooting)
   
---
   
## 🔧 Prerequisites
   
Before you start, make sure you have the following installed on your machine:
   
- **Node.js (v18+)** - [Download & Install](https://nodejs.org/)
- **Git** - [Download & Install](https://git-scm.com/)
- **MongoDB** - [Download & Install](https://www.mongodb.com/try/download/community) (or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **VS Code (or any code editor)** - [Download & Install](https://code.visualstudio.com/)
- **Vite** (optional, included in dependencies)
   
---
   
## **Step 1: Clone the Repository**
   
Open your terminal and run the following command to clone the project from GitHub.
   
```sh
git clone https://github.com/jahidhasan6676/Visa-Portal-Application-Client.git
   
cd Visa-Portal-Application-Client.git
Step 2: Install Dependencies
Run the following command to install all required dependencies:
   
npm install
This will install all dependencies listed in package.json.
   
Step 3: Set Up Environment Variables
Create a .env file in the root directory of the project and add the following configuration:
   
env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_MONGO_URI=your_mongodb_connection_string
REACT_APP_JWT_SECRET=your_jwt_secret
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
Replace your_firebase_api_key, your_mongodb_connection_string, your_jwt_secret, and your_stripe_public_key with your actual credentials.
Make sure your MongoDB instance is running.
Step 4: Start the Development Server
Run the following command to start the Vite development server:
   
npm run dev
By default, the frontend will be available at:
   
http://localhost:5173
If this port is already in use, Vite will automatically assign a different one.
   
Step 5: Run the Backend (if applicable)
If your project has a backend server, follow these steps:
   
Navigate to the backend folder:
   
cd server
Install backend dependencies:
   
npm install
Start the backend server:
   
npm run start
By default, the backend server will be available at:
   
http://localhost:5000
Step 6: Test the Project
Open a web browser and go to http://localhost:5173
Register or log in as a user.
Explore features like product submission, voting, and reviews.
Try different user roles (Normal User, Moderator, Admin).
Step 7: Build for Production
When you're ready to deploy, build the project using:
   
npm run build
This will generate optimized production files inside the dist folder.
   
Step 8: Troubleshooting
If you run into any issues, try the following:
   
Check your Node.js version: Run node -v (should be v18+).
Check MongoDB connection: Ensure MongoDB is running locally or your MongoDB Atlas URI is correct.
Clear npm cache (if packages fail to install):
   
npm cache clean --force
Restart the development server after making changes to .env.
✅ You're all set! Your Product Hunt Website should now be running locally. 🚀
   
---