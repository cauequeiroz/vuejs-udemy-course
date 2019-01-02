const randomNumber = (min, max) => {
  return Math.floor( Math.random() * (max - min + 1) + min );
};

new Vue({
  el: '#app',

  data: {
    started: false,

    monster_health: 100,
    hero_health: 100,

    battle_log: []
  },

  methods: {
    startGame() {
      this.started = true;
    },

    endGame() {
      this.started = false;
      this.hero_health = 100;
      this.monster_health = 100;
      this.battle_log = [];
    },

    checkEndGame() {
      if (this.hero_health <= 0) {
        alert('You lose!');
        this.endGame();
      }

      if (this.monster_health <= 0) {
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
      const amount = randomNumber(7, 10);    
      this.processTurn(0, amount);  
    },

    processTurn(heroDamage, heroHeal) {
      const monsterDamage = randomNumber(5, 8);

      if (heroHeal) this.hero_health += heroHeal;

      this.hero_health -= monsterDamage;
      this.monster_health -= heroDamage;

      const messages = {
        hero: heroDamage ? `Player hits monster for ${heroDamage}` : `Player heals himself for ${heroHeal}`,
        monster: `Monster hits player for ${monsterDamage}`
      };

      this.updateBattleLog(messages);
      this.checkEndGame();
    },

    updateBattleLog(messages) {
      this.battle_log.unshift(messages);
    }
  }
})