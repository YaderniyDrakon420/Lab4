# Лабораторная работа №4

## Продвинутые объекты в JavaScript

## Ссылка на GitHub

(вставьте ссылку)

------------------------------------------------------------------------

## Цель работы

Изучить классы, объекты, конструкторы и наследование в JavaScript.

------------------------------------------------------------------------

## Ход работы

### Класс Thing

``` javascript
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
```

### Класс Tool (наследование)

``` javascript
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
```

### Тестирование

``` javascript
const sword = new Thing("Steel Sword", 3.5, "rare");
const bow = new Tool("Longbow", 2.0, "uncommon", 15, 100);

console.log(sword.getInfo());
console.log(bow.getInfo());

bow.use();
bow.repair();
```

### Функции-конструкторы и optional chaining

``` javascript
function Thing(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}

function Tool(name, weight, rarity, damage, durability) {
    Thing.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
}

Tool.prototype = Object.create(Thing.prototype);

const player = {
    inventory: {
        weapon: new Tool("Sword", 3, "common", 10, 50)
    }
};

console.log(player.inventory?.weapon?.durability);
console.log(player.inventory?.armor?.durability);
```

------------------------------------------------------------------------

## Контрольные вопросы

**1. this** --- текущий объект.\
**2. \#** --- приватные поля класса.\
**3. Разница** --- class проще и современнее, function использует
prototype.

------------------------------------------------------------------------