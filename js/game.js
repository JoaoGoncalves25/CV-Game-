class Game {
    // code to be added
    constructor () {

        this.startScreen = document.getElementById("game-intro") ;
        this.gameScreen = document.getElementById("game-screen") ;
        this.gameEndScreen = document.getElementById("game-end") ;
        

        this.player = new Player(
            this.gameScreen , 
            180 , 
            550 , 
            80 , 
            100 , 
            "./images/boy.png") ;
           


        // Style for the board game.

        this.height = 650 ;
        this.width = 550 ; 

        // Obstacles

        this.obstacles = [] ; // html
        this.obstacles2 = [] ; // css
        this.obstacles3 = [] ; // javascript
        this.obstacles4 = [] ; // mongodb
        this.obstacles5 = [] ; // mongoose
        this.obstacles6 = [] ; // nodejs
        this.obstacles7 = [] ; // react
        this.obstacles8 = [] ; // chakra
        this.obstacles9 = [] ; // bug

        // Score 
        
        this.score = 0 ;

        // Lives 
        
        this.lives = 5 ;

        //Variable to check if im in the process of creating an obstacles.
        this.isPushingObstacle = false ;
        this.isPushingObstacle2 = false ;
        this.isPushingObstacle3 = false ;
        this.isPushingObstacle4 = false ;
        this.isPushingObstacle5 = false ;
        this.isPushingObstacle6 = false ;
        this.isPushingObstacle7 = false ;
        this.isPushingObstacle8 = false ;
        this.isPushingObstacle9 = false ;


        //VAriable to check if the game is over
        
        this.gameIsOver = false ;

        this.soundtrack = null ;

        this.isStarted = false ;

        this.timerInterval = null ;
        
    }  

    start(){
        // Sets the height and width of the game screen.||||||||||

        this.gameScreen.style.height = `${this.height}px` ;
        this.gameScreen.style.width = `${this.width}px` ;

        // Hides the start screen.||||||||||||||||||||||||||||||||

        this.startScreen.style.display = "none" ;

        // Shows the game screen.|||||||||||||||||||||||||||||||||

        this.gameScreen.style.display = "block" ;

        this.soundtrack = document.getElementById("soundtrack") ;

        //this.soundtrack.play() ;

        // Starts the game loop 

        this.gameLoop() ; 
    }    
    
    gameLoop() {
        if(this.gameIsOver) {
            return ;
        }

        this.update() ;

        window.requestAnimationFrame(() => this.gameLoop()) ;
    }

    update() {
        /* Score, lives Scoreboard */
        let score = document.getElementById("score") ;
        let lives = document.getElementById("lives") ;

        /* Every Frame of the game, i want to check if the car is moving */
        this.player.move() ;



//------------------- HTML LOGO --------------------//

        // Iterate over the obstacles array and make them move
        for(let i = 0 ; i < this.obstacles.length ; i++) {
            const obstacle = this.obstacles[i] ;
            obstacle.move(this.player) ;


            if(this.player.didCollode(obstacle)){
                obstacle.element.remove() ;

                this.obstacles.splice(i , 1) ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'HTML';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '10px'; // Adjust as needed
                htmlText.style.left = '10%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

             else if(obstacle.top > this.height) {
                 
                 //Remove the obstacle HTML element from the HTML.
                 obstacle.element.remove() ;

                 //Remove the obstacle from the game class,obstacles array.
                this.obstacles.splice(i , 1);
             }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after one and half second.
        else if(!this.obstacles.length && !this.isPushingObstacle) {
            this.isPushingObstacle = true ;
            setTimeout(() =>{
                this.obstacles.push(new Obstacle(this.gameScreen)) ;
                this.isPushingObstacle = false ;  

            } , 1400) ;
        }
//----------------------- CSS LOGO --------------------//

        for(let i = 0 ; i < this.obstacles2.length ; i++) {
            const obstacle2 = this.obstacles2[i] ;
            obstacle2.move(this.player) ;


            if(this.player.didCollode(obstacle2)){
                obstacle2.element.remove() ;

                this.obstacles2.splice(i , 1) ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'CSS';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '10px'; // Adjust as needed
                htmlText.style.left = '25%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

            else if(obstacle2.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle2.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles2.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles2.length && !this.isPushingObstacle2) {
            this.isPushingObstacle2 = true ;
            setTimeout(() =>{
                this.obstacles2.push(new Obstacle2(this.gameScreen)) ;
                this.isPushingObstacle2 = false ;  

            } , 1800) ;
        }
        // Obstacle 3 Javascript

        // Move the obstacles.
        
        for(let i = 0 ; i < this.obstacles3.length ; i++) {
            const obstacle3 = this.obstacles3[i] ;
            obstacle3.move(this.player) ;


            if(this.player.didCollode(obstacle3)){
                obstacle3.element.remove() ;

                this.obstacles3.splice(i , 1) ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Javascript';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '10px'; // Adjust as needed
                htmlText.style.left = '45%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

            else if(obstacle3.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle3.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles3.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles3.length && !this.isPushingObstacle3) {
            this.isPushingObstacle3 = true ;
            setTimeout(() =>{
                this.obstacles3.push(new Obstacle3(this.gameScreen)) ;
                this.isPushingObstacle3 = false ;  

            } , 2200) ;
        }
        // Obstacle 4 Mongodb

        for(let i = 0 ; i < this.obstacles4.length ; i++) {
            const obstacle4 = this.obstacles4[i] ;
            obstacle4.move(this.player) ;


            if(this.player.didCollode(obstacle4)){
                obstacle4.element.remove() ;

                this.obstacles4.splice(i , 1) ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Mongodb';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '10px'; // Adjust as needed
                htmlText.style.left = '70%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

            else if(obstacle4.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle4.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles4.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles4.length && !this.isPushingObstacle4) {
            this.isPushingObstacle4 = true ;
            setTimeout(() =>{
                this.obstacles4.push(new Obstacle4(this.gameScreen)) ;
                this.isPushingObstacle4 = false ;  

            } , 2600) ;
        }
        // Obstacle 5 Mongoose
        for(let i = 0 ; i < this.obstacles5.length ; i++) {
            const obstacle5 = this.obstacles5[i] ;
            obstacle5.move(this.player) ;


            if(this.player.didCollode(obstacle5)){
                obstacle5.element.remove() ;

                this.obstacles5.splice(i , 1) ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Mongoose';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '40px'; // Adjust as needed
                htmlText.style.left = '20%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

            else if(obstacle5.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle5.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles5.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles5.length && !this.isPushingObstacle5) {
            this.isPushingObstacle5 = true ;
            setTimeout(() =>{
                this.obstacles5.push(new Obstacle5(this.gameScreen)) ;
                this.isPushingObstacle5 = false ;  

            } , 2900) ;
        }
        // Obstacle 6 Nodejs
        for(let i = 0 ; i < this.obstacles6.length ; i++) {
            const obstacle6 = this.obstacles6[i] ;
            obstacle6.move(this.player) ;


            if(this.player.didCollode(obstacle6)){
                obstacle6.element.remove() ;

                this.obstacles6.splice(i , 1) ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Nodejs';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '40px'; // Adjust as needed
                htmlText.style.left = '45%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

            else if(obstacle6.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle6.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles6.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles6.length && !this.isPushingObstacle6) {
            this.isPushingObstacle6 = true ;
            setTimeout(() =>{
                this.obstacles6.push(new Obstacle6(this.gameScreen)) ;
                this.isPushingObstacle6 = false ;  

            } , 3100) ;
        }
        // Obstacle 7 React
        
        for(let i = 0 ; i < this.obstacles7.length ; i++) {
            const obstacle7 = this.obstacles7[i] ;
            obstacle7.move(this.player) ;


            if(this.player.didCollode(obstacle7)){
                obstacle7.element.remove() ;

                this.obstacles7.splice(i , 1) ;
                
                const htmlText = document.createElement('div');
                htmlText.textContent = 'React';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '40px'; // Adjust as needed
                htmlText.style.left = '65%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

            else if(obstacle7.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle7.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles7.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles7.length && !this.isPushingObstacle7) {
            this.isPushingObstacle7 = true ;
            setTimeout(() =>{
                this.obstacles7.push(new Obstacle7(this.gameScreen)) ;
                this.isPushingObstacle7 = false ;  

            } , 3500) ;
        }
        // Obstacle 8 Chakra

        for(let i = 0 ; i < this.obstacles8.length ; i++) {
            const obstacle8 = this.obstacles8[i] ;
            obstacle8.move(this.player) ;


            if(this.player.didCollode(obstacle8)){
                obstacle8.element.remove() ;

                this.obstacles8.splice(i , 1) ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'Chakra';
                htmlText.style.position = 'absolute';
                htmlText.style.top = '10px'; // Adjust as needed
                htmlText.style.left = '90%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '24px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                this.score++ ;
            }

            else if(obstacle8.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle8.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles8.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles8.length && !this.isPushingObstacle8) {
            this.isPushingObstacle8= true ;
            setTimeout(() =>{
                this.obstacles8.push(new Obstacle8(this.gameScreen)) ;
                this.isPushingObstacle8 = false ;  

            } , 3500) ;
        }

        // Obstacle 9 Bug
        for(let i = 0 ; i < this.obstacles9.length ; i++) {
            const obstacle9= this.obstacles9[i] ;
            obstacle9.move(this.player) ;


            if(this.player.didCollode(obstacle9)){
                obstacle9.element.remove() ;

                this.obstacles9.splice(i , 1) ;

                this.lives-- ;

                const htmlText = document.createElement('div');
                htmlText.textContent = 'One more life left my friend'; 
                htmlText.style.position = 'absolute';
                htmlText.style.top = '300px'; // Adjust as needed
                htmlText.style.left = '50%'; // Center horizontally
                htmlText.style.transform = 'translateX(-50%)';
                htmlText.style.fontSize = '40px'; // Adjust as needed
                htmlText.style.color = 'white';
                this.gameScreen.appendChild(htmlText);

                setTimeout(() =>{
                    htmlText.remove() ;
                }, 2000)

                
            }

            else if(obstacle9.top > this.height) {
                
                //Remove the obstacle CSS element from the HTML.
                obstacle9.element.remove() ;

                //Remove the obstacle from the game class,obstacles array.
                this.obstacles9.splice(i , 1);
            }            
        }

        if(this.lives === 0) {
            this.endGame() ;
        }

        // if there are no obstacles, push a new one after two second.
        else if(!this.obstacles9.length && !this.isPushingObstacle9) {
            this.isPushingObstacle9 = true ;
            setTimeout(() =>{
                this.obstacles9.push(new Obstacle9(this.gameScreen)) ;
                this.isPushingObstacle9 = false ;  

            } , 1000) ;
        


       
        }
        score.innerHTML = this.score ;
        lives.innerHTML = this.lives ; 
    }

    endGame() {
        //Change the gameIsOver status. if its true, remmember that -->
        // -->this is going to break the animation loop
        this.gameIsOver = true ;

        // Remove my Player from the HTML
        this.player.element.remove() ;

        //Remove all the obstacles from the HTML
        this.obstacles.forEach((obstacle , index) => {
            this.obstacles.splice(index , 1) ;
            obstacle.element.remove() ;
        }) ;

        // Hide the current game screen
        this.gameScreen.style.display = "none" ;

        // In Order, to display the Game End Screen. 
        this.gameEndScreen.style.display = "block" ;
    }

}










