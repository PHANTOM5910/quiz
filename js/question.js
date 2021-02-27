class Question {
    
constructor(){

    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name")
    this.input2 = createInput("Enter the correct answer")
   
    this.button = createButton('Submet')

    this.question = createElement('h3')
    this.opition1 = createElement('h4')
    this.opition2 = createElement('h4')
    this.opition3 = createElement('h4')
    this.opition4 = createElement('h4')
}

hide(){

    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();

}

display(){

this.title.html("My Quiz Game");
this.title.position(350,0);
this.question.html("Question1: Which Planet is Closest to the Earth?"); 
this.question.position(150,80);

this.opition1.html("1. Mars");
this.opition1.position(150,100);

this.opition2.html("2. Mercury");
this.opition2.position(150,120);

this.opition3.html("3. Venus");  
this.opition3.position(150,140);

this.opition4.html("4. Sun");
this.opition4.position(150,160);

this.input1.position(150, 230);
this.input2.position(350, 230);
this.button.position(290, 300);

this.button.mousePressed(()=>{
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    contestant.name = this.input1.value();
    contestant.answer = this.input2.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);
  });

}











    
}