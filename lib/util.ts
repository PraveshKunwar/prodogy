class Util {
  public genString(length: number): string {
    let result = "";
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const len = chars.length;
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * len));
    }
    return result;
  }
  public getDate(): number {
    const date = new Date();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const today = new Date(
      `${this.getMonth(
        date.getMonth()
      )} ${date.getDate()}, ${date.getFullYear()} ${time}`
    ).getTime();
    return today;
  }
  public getMonth(month: number): string {
    switch (month + 1) {
      case 1:
        return "Jan";
        break;
      case 2:
        return "Feb";
        break;
      case 3:
        return "Mar";
        break;
      case 4:
        return "Apr";
        break;
      case 5:
        return "May";
        break;
      case 6:
        return "Jun";
        break;
      case 7:
        return "Jul";
        break;
      case 8:
        return "Aug";
        break;
      case 9:
        return "Sep";
        break;
      case 10:
        return "Oct";
        break;
      case 11:
        return "Nov";
        break;
      case 12:
        return "Dec";
        break;
    }
  }
}
export const util = new Util();
