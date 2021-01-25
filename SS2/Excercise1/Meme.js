class Meme {
  constructor(id, name, image, dateModified) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.dateModified = dateModified;
  }
  get show() {
    return [this.id, this.name, this.image];
  }

  set update(data) {
    this.name = data.name;
    this.image = data.image;
  }
}

export default Meme;
