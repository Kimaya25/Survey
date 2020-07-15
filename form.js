class form{
      constructor(){
      }
      
      hide(){
        this.input.hide();
        this.button.hide();
            
    }
      
      display(){
        var title = createElement('h1')
        title.html("Lets Do A Survey On Our School Students");  
        title.position(200,10);
        
        var input = createInput("name");
        input.position(600, 255);
        
        var email = createInput("email");
        email.position(600, 165);

        var button = createButton("submit");
        button.position(700, 590);
      
        var question1 = createElement('h6');
        question1.html("Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        question1.position(350,300);

        var button2 = createButton("yes");
        button2.position(550,360);

        var button3 = createButton("no");
        button3.position(620,360);

        var question2 = createElement('h6');
        question2.html("would you be willing to donate a small amount of money to this program?");
        question2.position(350,400);


        var button4 = createButton("yes");
        button4.position(550,460);

        var button5 = createButton("no");
        button5.position(620,460);

        var question3 = createElement('h6');
        question3.html("How much per month would you be willing to pay?");
        question3.position(450,490);

        var button6 = createButton("100");
        button6.position(450,550);

        var button7 = createButton("500");
        button7.position(450,580);

        var button8 = createButton("1000");
        button8.position(550,550);

        var button9 = createButton("more");
        button9.position(550,580);



       
       
        button.mousePressed(function()
      {
          input.hide();
          email.hide();
          button.hide();
          question1.hide();
          question2.hide();
          question3.hide();
          button2.hide();
          button3.hide();
          button4.hide();
          button5.hide();
          button6.hide();
          button7.hide();
          button8.hide();
          button9.hide();
      })
        
        
        
        this.button.mousePressed(() => {
           this.input.hide();
           this.button.hide();

        
         
      });
     

      }  
}
         
    
