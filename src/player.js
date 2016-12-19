// player.js
import Backbone from 'backbone';
import Scrabble from 'scrabble';


const Player = Backbone.Model.extend({
  initialize: function(options) {
    this.set("name", options.name);
    this.set("plays", []);
    this.scrabble = new Scrabble();
  },

  hasWon: function() {
    return this.totalScore() > 100;
  },

  totalScore: function() {
    var total = 0;
    for (var i = 0; i < this.get("plays").length; i++){
      total += this.scrabble.score(this.get("plays")[i]);
    }
    return total;
  },

  highestScoringWord: function() {
    return this.scrabble.highestScoreFrom(this.get("plays"));
  },

  highestWordScore: function() {
    return this.scrabble.score(this.scrabble.highestScoreFrom(this.get("plays")));
  },

  play: function(word) {
    if (this.hasWon()){
      return false;
    } else {
      this.get("plays").push(word);
    }
  },


}); // closing Player

export default Player;
