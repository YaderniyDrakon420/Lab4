class Thing {
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    getInfo() {
        return `Thing: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }

    setWeight(newWeight) {
        this.weight = newWeight;
    }
}

const sword = new Thing("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);
console.log(sword.getInfo());

class Tool extends Thing {
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    use() {
        if (this.durability > 0) {
            this.durability -= 10;
            if (this.durability < 0) this.durability = 0;
        }
    }

    repair() {
        this.durability = 100;
    }

    getInfo() {
        return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
    }
}

const bow = new Tool("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
console.log(bow.durability);
bow.repair();
console.log(bow.durability);

const potion = new Thing("Health Potion", 0.5, "common");
const axe = new Tool("Battle Axe", 5.0, "rare", 25, 80);

console.log(potion.getInfo());
console.log(axe.getInfo());

axe.use();
axe.use();
console.log(axe.getInfo());

// function Thing(name, weight, rarity) {
//     this.name = name;
//     this.weight = weight;
//     this.rarity = rarity;

//     this.getInfo = function() {
//         return `Thing: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
//     };

//     this.setWeight = function(newWeight) {
//         this.weight = newWeight;
//     };
// }

// function Tool(name, weight, rarity, damage, durability) {
//     Thing.call(this, name, weight, rarity);

//     this.damage = damage;
//     this.durability = durability;

//     this.use = function() {
//         if (this.durability > 0) {
//             this.durability -= 10;
//             if (this.durability < 0) this.durability = 0;
//         }
//     };

//     this.repair = function() {
//         this.durability = 100;
//     };
// }

// // Прототипное наследование
// Tool.prototype = Object.create(Thing.prototype);
// Tool.prototype.constructor = Tool;

// const player = {
//     inventory: {
//         weapon: new Tool("Sword", 3, "common", 10, 50)
//     }
// };

// console.log(player.inventory?.weapon?.durability);
// console.log(player.inventory?.armor?.durability);