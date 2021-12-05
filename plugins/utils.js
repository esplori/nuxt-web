export function delHtmlTag(str) {
  let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "").replace(/&lt;/g, "").replace(/&gt;/g, "");
  return str1.replace(/ /g, "");
}