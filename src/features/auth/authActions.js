import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstans";
import firebase from "../../app/config/firebase";
import { APP_LOADED } from "../../app/api/async/asyncReducer";
import {
  dataFromSnapshot,
  getUserProfile,
} from "../../app/firestore/firestoreService";
import { listenToCurrentUserProfile } from "../profiles/profileActions";

export function signInuser(user) {
  return {
    type: SIGN_IN_USER,
    payload: user,
  };
}

export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInuser(user));
        const profileRef = getUserProfile(user.uid);
        profileRef.onSnapshot((snapshot) => {
          dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
          dispatch({ type: APP_LOADED });
        });
      } else {
        dispatch(signOutUser());
        dispatch({ type: APP_LOADED });
      }
    });
  };
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
