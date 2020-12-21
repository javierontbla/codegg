import { google_provider, auth } from "../../firebase";

// firebase actions
export class User {
  static log_in_with_google() {
    auth.signInWithPopup(google_provider);
  }
}
