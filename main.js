const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const restart = document.getElementById('restart');
const text = document.getElementById('modal-text');
const wintext = document.getElementById('text-win');
const computerscore = document.getElementById('score-computer');
const playerscore = document.getElementById('score-player');
const image = document.getElementById('modal-image');
const modal = document.querySelector('.modal');
const modalcont = document.querySelector('.modal-cont');
const scoreboard = {
	player:0,
	computer:0
}
function play(e){
	restart.style.display = 'inline-block';
	const playerChoice = e.target.id;
	const computerChoice = getcomputerChoice();
	const winner = result(playerChoice , computerChoice);
	console.log(winner);
	if(winner=='Youwon')
	{   wintext.innerHTML="You Win";
		scoreboard.player=scoreboard.player + 1;
        playerscore.innerHTML="Player: "+scoreboard.player;
		modal.style.display='inline-block';
		if(computerChoice=='paper')
		{
			image.className = "fas fa-hand-paper fa-10x";
            text.innerHTML="Computer Chose Paper";
		}
		else if(computerChoice=='scissors')
		{
			image.className = "fas fa-hand-scissors fa-10x";
			text.innerHTML="Computer Chose Scissors";
		}
	}
	else if(winner=='draw')
	{   wintext.innerHTML="It's A Draw";
		modal.style.display='inline-block';
		if(computerChoice=='paper')
		{
			image.className = "fas fa-hand-paper fa-10x";
            text.innerHTML="Computer Chose Paper";
		}
		else if(computerChoice=='scissors')
		{
			image.className = "fas fa-hand-scissors fa-10x";
			text.innerHTML="Computer Chose Scissors";
		}
	}
    else
    {   scoreboard.computer=scoreboard.computer + 1;
        computerscore.innerHTML="Computer: "+scoreboard.computer;
        console.log(scoreboard.computer);
    	wintext.innerHTML="You Lose";
		modal.style.display='inline-block';
		if(computerChoice=='paper')
		{
			image.className = "fas fa-hand-paper fa-10x";
            text.innerHTML="Computer Chose Paper";
		}
		else if(computerChoice=='scissors')
		{
			image.className = "fas fa-hand-scissors fa-10x";
			text.innerHTML="Computer Chose Scissors";
		}
    }
	
}
function button()
{
	scoreboard.player=0;
	scoreboard.computer=0;
	computerscore.innerHTML="Computer: "+scoreboard.computer;
	playerscore.innerHTML="Player: "+scoreboard.player;
}
function wind(e)
{    if(e.target==modal || e.target==modalcont)
     modal.style.display='none';	
}
function getcomputerChoice(){
	const rand = Math.random();
	if (rand < 0.44) {
		return 'rock';
	}
	else if(rand <= 0.67)
	{
		return 'paper';
	}
	else
	{
		return 'scissors';
	}

}

function result(p,c){
	if(p==c)
	{
		return'draw';
	}
	else if(p=='rock')
	{
	    if (c=='paper') {
			return'computerwon';
		}
		else{
			return'Youwon';
		}
	}
	else if(p=='paper')
	{
		if (c=='scissors') {
			return'computerwon';
		}
		else{
			return'Youwon';
		}
	}
	else if(p=='scissors'){
		if (c=='rock') {
			return'computerwon';
		}
		else{
			return'Youwon';
		}
	}
}

for(var i=0;i<choices.length;i++)
{
	choices[i].addEventListener('click',play);
}
restart.addEventListener('click',button);
window.addEventListener('click',wind);