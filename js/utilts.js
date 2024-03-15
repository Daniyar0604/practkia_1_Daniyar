// function getRandomInt (value) {
//     return Math.random() < (value / 100)
// }

const  getRandomInt = (value) => Math.random() < (value / 100);

const showInfo = function () {
    const message = `HP у ${this.name} ${this.hp}`
    console.log(message);
}

const modifyHelth = function () {
    const damage = this.str + this.weapon - Dragon.defense;
    Dragon.hp -= damage;
    const message = `Герой попал по дракону, урон => ${damage}`
    console.log(message);
}

const attack = function () {
       
    if (getRandomInt (75) ) {
        this.modifyHelth();
        Dragon.showInfo();
        console.log('=====================');
    } else {
        const message = `Герой промахнулся =(\n====================`;
        console.log(message);
        
    }
} 

const modifyHelthDragon = function () {
    const damageDragon = this.str + this.weapon - Hero.defense
    Hero.hp -= damageDragon
    const messageDrakon = `Дракон попал по герою, урон ${damageDragon}`
    console.log(messageDrakon);
}


const attackDragon = function () {
    if (getRandomInt (50) ) {
        this.modifyHelthDragon();
        Hero.showInfo();
        console.log('================');
    } else {
        const messageDrakon = `Дракон ушел спать :( \n==========`;
        console.log(messageDrakon);
    }
}





 


