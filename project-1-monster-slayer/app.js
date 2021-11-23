const getHitValue = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;


const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      specialAttackCooldown: 0,
      winner: null,
      log: []
    }
  },

  computed: {
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: '0%' };
      } else {
        return { width: this.playerHealth + '%' };
      }
    },

    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: '0%' };
      } else {
        return { width: this.monsterHealth + '%' };
      }
    },

    isSpecialAttackDisabled() {
      return this.specialAttackCooldown > 0;
    }
  },

  methods: {
    attackMonster() {
      const hit = getHitValue(5, 12);
      
      this.monsterHealth -= hit;

      this.addLogMessage('player', 'attack', hit);
      this.updateCooldown();
      this.attackPlayer();
    },

    attackPlayer() {
      const hit = getHitValue(8, 15);

      this.playerHealth -= hit;

      this.addLogMessage('monster', 'attack', hit);
      this.checkGameOver();
    },

    specialAttack() {
      const hit = getHitValue(10, 25);
      this.monsterHealth -= hit;

      this.specialAttackCooldown = 3;
      this.addLogMessage('player', 'attack', hit);
      this.attackPlayer();
    },

    heal() {
      const hit = getHitValue(8, 20);

      this.playerHealth += hit;

      this.addLogMessage('player', 'heal', hit);
      this.updateCooldown();
      this.attackPlayer();
    },

    surrender() {
      this.winner = 'monster';
    },

    updateCooldown() {
      if (this.specialAttackCooldown > 0) {
        this.specialAttackCooldown -= 1;
      }
    },

    checkGameOver() {
      const playerDie = this.playerHealth <= 0;
      const monsterDie = this.monsterHealth <= 0;

      if (playerDie && monsterDie) {
        this.winner = 'draw';
      } else if (playerDie) {
        this.winner = 'monster';
      } else if (monsterDie) {
        this.winner = 'player';
      }
    },

    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackCooldown = 0;
      this.winner = null;
      this.log = [];
    },

    addLogMessage(who, action, value) {
      this.log.unshift({ who, action, value });
    }
  }
});

app.mount('#game');
