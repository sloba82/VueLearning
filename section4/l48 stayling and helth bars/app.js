new Vue ({

        el: "#app",
        data: {
            healthbarMonster: 100,
            healthbarYou: 100,
            startGame: true,
            turns: [],

        },

        watch: {
        	startGame: function() {
        		if(this.startGame === false){
        			this.monsterAtacks();
        		}
        	},
            healthbarYou: function () {
                var demage = 100 - this.healthbarYou;
                this.turns.unshift({
                    player: 'monster',
                    text: 'Monster did demage to you ' + demage 
                });

            }

        },

        computed: {

        	helthYou: function () {
        		return this.healthbarYou;
        	},

        	helthMonster: function () {
        		return this.healthbarMonster;
        	},

        },

        methods: {
        	giveUp: function () {
        		location.reload();
        	},

        	attackMonster: function () {
        		var minusHelth = Math.floor(Math.random() * 10); 
        		this.healthbarMonster = this.healthbarMonster - minusHelth; 
                this.turns.unshift({
                    player: 'player',  
                    text: 'You did demage to monster ' + minusHelth
                } );
        		return this.healthbarMonster;
        	},

        	monsterAtacks: function() {
		        var vm = this;

                var minusHelth;
		        var interval = setInterval( function () {

			        var minusHelth = Math.floor(Math.random() * 7); 
			        vm.healthbarYou = vm.healthbarYou - minusHelth;
		       		
		       		if (vm.healthbarMonster < 1) {
		       				clearInterval(interval);
		       				vm.giveUp();
		       				alert("Monster is loser") ;
		       			}
		       		if (vm.healthbarYou < 1 ) {
			       			clearInterval(interval);
			       			vm.giveUp();
			       			alert("you lost the game") ;
			       		}

			        return this.healthbarYou;
		     	},500); 
    		},

            playerHeal: function() {
                if (this.healthbarYou < 90){

                    this.turns.unshift({
                        player: 'player',  
                        text: 'You bein heald by + 10 points'
                    } );
                   return this.healthbarYou += 10;
                }
            }

        },

});