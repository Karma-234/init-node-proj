export class StringUtil {
  public static stringLength(entry: string): number {
    return entry.length;
  }
  public static stringTriangle(entry: string): string {
    if (entry == "") {
      return "";
    }
    let temp = "";
    for (let i = 0; i <= entry.length; i++) {
      temp += `${entry.substring(0, i)}\n`;
    }
    return temp;
  }
}
