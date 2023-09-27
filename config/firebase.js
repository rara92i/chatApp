import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importez AsyncStorage

// Firebase config
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.apiKey,
  authDomain: Constants.expoConfig.extra.authDomain,
  projectId: Constants.expoConfig.extra.projectId,
  storageBucket: Constants.expoConfig.extra.storageBucket,
  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
  appId: Constants.expoConfig.extra.appId,
  databaseURL: Constants.expoConfig.extra.databaseURL,
  //   @deprecated is deprecated Constants.manifest
};

// Initialize firebase
initializeApp(firebaseConfig);

// Utilisez AsyncStorage pour la persistance
export const auth = getAuth();
export const database = getFirestore();
export const persistence = getReactNativePersistence(AsyncStorage); // Ajoutez cette ligne
