export default class CookieHelper {
  SetValue = (name, value) => {
    document.cookie = name+"="+value
  }
  GetValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const data = parts.pop().split(';').shift()
      if (data === undefined) {
        return ""
      }
      return data;
    }
    return ""
  }
}