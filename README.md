# 📱 MyFirstRNApp

A **React Native learning project** focused on building real-world mobile app architecture using modern best practices.  
This project is developed incrementally with an emphasis on **clean code, scalable navigation, and production-ready patterns**.

---

## 🚀 Tech Stack

- React Native (CLI / Bare)
- TypeScript
- React Navigation
  - Native Stack Navigator
  - Bottom Tab Navigator
- React Context API
- AsyncStorage
- Phosphor Icons
- Platform-native Toasts
- Git & GitHub (daily contributions)

---

## ✨ Key Features

- Cross-platform app running on **Android and iOS**
- Clean and scalable project structure
- Authentication system using Context API
- Persistent login using AsyncStorage
- Auto-login on app restart
- Proper logout handling
- Auth-driven navigation flow
- Bottom tab navigation (Home, Products, Profile)
- Modern UI with icon-based design (Phosphor)
- Platform-native feedback (Android Toast / iOS bottom toast)
- iOS Safe Area handling (notch & Dynamic Island support)

---

## 🧠 Architecture Highlights

- Single source of truth for authentication
- Navigation controlled by auth state (not manual redirects)
- Clear separation of concerns:
  - `context/` → global state
  - `navigation/` → app navigation
  - `screens/` → UI screens
- Designed to be API-ready for real backend integration

---

## 🔐 Authentication Flow

- User taps **Login**
- Auth state updates via Context
- Login state persisted in AsyncStorage
- App automatically navigates based on auth state
- Logout clears storage and resets navigation

---

## 🎯 Purpose of This Project

- Learn real-world React Native patterns
- Practice clean architecture and state management
- Maintain consistent daily GitHub contributions
- Build a strong foundation for production-ready apps

---

## 📌 Status

🚧 Actively under development  
New features and improvements are added regularly.

---

## 🧑‍💻 Author

**Divyanshu Tandon**  
React Native / MERN Stack Developer

---

## ⭐️ Notes

This project is intentionally built **without Expo** to gain a deeper understanding of native React Native tooling.
