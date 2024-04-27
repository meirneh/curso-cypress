import { LoginElements } from "./login.element";

export class LoginMethods {
  static insertUserName(username) {
    LoginElements.textboxes.username.clear();
    LoginElements.textboxes.username.type(username);
    return this;
  }

  static insertPassword(password) {
    LoginElements.textboxes.username.clear();
    LoginElements.textboxes.password.type(password);
    return this;
  }

  static clickOnlogin() {
    LoginElements.buttons.login.click();
    return this;
  }

  static login(username, password) {
    this.insertUserName(username)
    .insertPassword(password)
    .clickOnlogin();
  }
}
