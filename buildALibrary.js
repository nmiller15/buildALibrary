class Media  {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    getAverageRating() {
      const init = 0;
      const ratingSum = this._ratings.reduce((acc, cur) => acc + cur, 0);
      let averageRating = ratingSum / this._ratings.length;
      return averageRating;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(newRating) {
      this._ratings = this._ratings.push(newRating);
    }
  }
  
  
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor (director, title, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }

    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}