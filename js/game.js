
Vue.component('main-window', {
  template: '<div><div id="sprite" /><div id="description">You see a tiny slime creature. It quivers.</div></div>',
  props: ['enemy']
})

Vue.component('p-bar', {
  template: '<div class="p-bar">{{ curr }} / {{  max }}</div>',
  props: ['curr', 'max']
})

Vue.component('messages', {
  template: '<ul id="messages"><li v-for="message in messages">{{ message }}</li></ul>',
  props: ['messages'],
  updated: function() {
    var el = document.getElementById('messages')
    el.scrollTop = el.scrollHeight;
  }
})

Vue.component('skill-button', {
  template: '<button @click="performSkill">{{ skill.name }}</button>',
  props: ['skill', 'performSkill']
})

var app = new Vue({
  el: '#app',
  data: {
    player: {
      currentHP: 100,
      maxHP: 100,
      currentMP: 25,
      maxMP: 25
    },
    enemy: {
      name: 'a little kobold',
    },
    messages: [],
    items: [
      { name: 'attack' },
      { name: 'defend' },
      { name: 'pass' },
    ],
  },
  ready() {
    console.log(this.$el);
  },
  methods: {
    performSkill: function(skill) {
      this.messages.push('You ' + skill.name);
    },
    onKeyUp: function(e) {
      console.log(e.key);
    },
  }
})
