const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const btn = document.querySelector("button");
const question = document.querySelector(".card-jobtitle");

const raw_questions = [
  'Who runs the world? Is it really similar to the movie?',
  'Which character did you most identify with?',
  'The makeover, first day in the new world: fashion, beauty, cosmetics and gender.',
  'What is your favorite scene?',
  'Where is the line between accepting help (let me lift your heavy bag) and independence?'
  'If not men are on top, women are on top. Is there an option where neither is the case? Does it need to be that way?',
  'What was the funniest scene?',
  'Feminist and Masculist. What do those words mean for you?',
  'What is the purpose of provocation during demonstrations? Is it a must? Does it delude the conversation?',
  'We’re the strong sex and hence we give birth and you take care of the child. Thoughts?'
];


let shuffled_questions = [];

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

let current_q = 0;
const handleButtonClick = (e) => {
  // console.log("CLICK");

  const new_q = shuffled_questions[current_q % (shuffled_questions.length-1)];   
  question.innerText = new_q;
  current_q += 1;
  btn.innerText = "NEXT QUESTION";
};


btn.addEventListener("click", handleButtonClick);

shuffled_questions = shuffle(raw_questions);
// handleButtonClick();
