const wordWrap = (str, num) => {
  if (str.length <= num) {
    return str;
  }

  const indexOfBlank = str.lastIndexOf(' ', num);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = num;
    offset = 0
  }
  return str.substring(0, split) + "\n" + wordWrap(str.substring(split + offset), num);
}
