export function delHtmlTag(str) {
  let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "").replace(/&lt;/g, "").replace(/&gt;/g, "").replace(/ /g, "");
  return str1.length > 80?str1 + '...':str1;
}