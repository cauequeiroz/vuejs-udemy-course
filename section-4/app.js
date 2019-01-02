const randomNumber = (min, max) => {
  return Math.floor( Math.random() * (max - min + 1) + min );
};

new Vue({
  el: '#app',

  data: {
    started: false,

    monsterHealth: 100,
    heroHealth: 100,

    battleLog: []
  },

  methods: {
    startGame() {
      this.started = true;
    },

    endGame() {
      this.started = false;
      this.heroHealth = 100;
      this.monsterHealth = 100;
      this.battleLog = [];
    },

    checkEndGame() {
      if (this.heroHealth <= 0) {
        alert('You lose!');
        this.endGame();
      }

      if (this.monsterHealth <= 0) {
        alert('You win!');
        this.endGame();
      }
    },

    attack() {
      const damage = randomNumber(7, 10);   
      this.processTurn(damage);   
    },

    specialAttack() {
      const damage = randomNumber(10, 15);
      this.processTurn(damage);
    },

    heal() {
      let amount = randomNumber(7, 10);  
      
      if (this.heroHealth + amount > 100) {
        amount -= ((this.heroHealth + amount) - 100);
      }

      this.processTurn(0, amount);  
    },

    processTurn(heroDamage, heroHeal) {
      const monsterDamage = randomNumber(5, 8);

      if (heroHeal) this.heroHealth += heroHeal;

      this.heroHealth -= monsterDamage;
      this.monsterHealth -= heroDamage;

      const messages = {
        hero: heroDamage ? `Player hits monster for ${heroDamage}` : `Player heals himself for ${heroHeal}`,
        monster: `Monster hits player for ${monsterDamage}`
      };

      this.updateBattleLog(messages);
      this.checkEndGame();
    },

    updateBattleLog(messages) {
      this.battleLog.unshift(messages);
    }
  }
})