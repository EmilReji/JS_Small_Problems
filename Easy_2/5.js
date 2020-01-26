function triangle(size) {
  for (let stars = 1; stars <= size; stars++) {
    let str = '';
    for (let spaceIdx = 0; spaceIdx < size - stars; spaceIdx++) {
      str += ' ';
    }

    for (let starIdx = 0; starIdx < stars; starIdx++) {
      str += '*';
    }
  
    console.log(str);
  }
}

triangle(5);
triangle(9);

