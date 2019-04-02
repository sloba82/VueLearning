new Vue ({

        el: "#app",
        data: {
            healthbarMonster: 100,
            healthbarYou: 100,
            startGame: true,

        },

        watch: {
        	startGame: function() {
        		if(this.startGame === false){
        			this.monsterAtacks();
        		}
        	},

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
        		return this.healthbarMonster;
        	},

        	monsterAtacks: function() {
		        var vm = this;
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

        },

});