export function delHtmlTag(str) {
  let str1 = str.replace(/<\/?.+?>/g, "").replace(/&nbsp;/g, "").replace(/&lt;/g, "").replace(/&gt;/g, "");
  return str1.length > 120 ? str1.slice(0,120) + '...' : str1;
}