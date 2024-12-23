class Novel {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    getAuthor() {
        return 'Tác giả là ' + this.author;
    }
}

const test = new Novel('Tôi thấy hoa vàng trên cỏ xanh ', 'Nguyễn Nhật Ánh')
console.log("check test:", test);
console.log("check author:", 
    test.getAuthor());


class Profile {
    constructor (name, unversity) {
        this.name = name;
        this.unversity = unversity;
    }

    getInfo() {
        return 'Toi ten la ' + this.name + ' hoc tai ' + this.unversity;
    }
}

const abc = new Profile ('tran minh quan', 'VAA')
console.log('check info: ', abc.getInfo());
