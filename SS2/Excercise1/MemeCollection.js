import Meme from "./Meme.js";

class MemeCollection {
  constructor(id, name, owner, memes) {
    this.id = id;
    this.name = name;
    this.owner = owner;
    this.memes = memes;
  }

  add(meme) {
    this.memes.push(meme);
  }
  update(data) {
    this.id = data.id;
    this.name = data.name;
  }

  delete(id) {
    this.memes.splice(
      this.memes.findIndex((i) => i.id === id),
      1
    );
  }

  show() {
    console.log(this);
  }
}

const smile = new Meme("001", "smile", "https:smile", "10/12/1992");
const sad = new Meme("002", "sad", "https:sad", "10/12/1993");

const collection1 = new MemeCollection("01CL", "best", "hieu", []);

// test

// collection1.add(smile);
// collection1.add(sad);
// collection1.show();
// collection1.update({ id: "04CL", name: "best02" });
// collection1.show();
// collection1.delete("001");
// collection1.delete("002");
// collection1.show();
