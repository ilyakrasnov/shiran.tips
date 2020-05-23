const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");
const btn = document.querySelector("button");
const question = document.querySelector(".card-jobtitle");

const raw_questions = [
  'What message did you get from the show for your own life?',
  '"A lake is just a lake". What do you think about it?',
  'Which parts did you identify with the most?',
  'Do you think the show is realistic? Which parts yes, and which not?',
  'What did you feel after finishing the show?',
  'Where is the boundary between conservatism and fanatism?'
  'Which boundaries did you cross in your own life?',
  'What is your favorite scene?',
  'Who is your favorite character?',
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
  btn.innerText = "PICK NEXT QUESTION";
};


btn.addEventListener("click", handleButtonClick);

shuffled_questions = shuffle(raw_questions);
// handleButtonClick();
