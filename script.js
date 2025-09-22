const inputEl = document.querySelector("input");
const checkBtn = document.querySelector("#checkBtn");
const container = document.querySelector(".container");

const outputPara = document.createElement("p");
const outputGoal = document.createElement("g");

container.append(outputPara);
container.append(outputGoal);

checkBtn.addEventListener("click", () => {
  const stuName = inputEl.value;
  if (stuName.trim() === "") {
    outputPara.textContent = "Please enter a name";
    return;
  }
  const student = StuLists.find((stud) => {
    if (stud.name === stuName) {
      return stud;
    }
  });
  if (student === undefined) {
    outputPara.textContent = `${stuName} is not found here in our database,try again`;
    return;
  }
  outputPara.textContent = student.description;
  outputGoal.textContent = student.Goal;
});

const StuLists = [
  {
    name: "Ogbor Isreal",
    description: "Always Friendly😊",
    Goal: "Software Engineer",
  },
  {
    name: "Akeem Osasana",
    description: "Very Focused and good 👍",
    Goal: "Pilot",
  },
  {
    name: "Oluwafemi Bankole",
    description: "Always have good ideas",
    Goal: "Doctor",
  },
  {
    name: "Ogunmakin Sunday Adewumi",
    description: "Quite funny😂",
    Goal: "Engineer",
  },
  {
    name: "Oriola Isreal",
    description: "So serious and quiet😒",
    Goal: "Achitecture",
  },
  {
    name: "Babatunde Oluwasola",
    description: "The real Comedian🤣",
    Goal: "Nurse",
  },
  {
    name: "Oluwaseun Adeomi",
    description: "Coding guru",
    Goal: "Lawyer",
  },
  {
    name: "Daramola Emmanuel",
    description: "creative thinker with a passion for coding",
    Goal: "Pharmacist",
  },
  {
    name: "Omonijo Akintomiwa James",
    description: "Loves to read and write and has a vivid imagination",
    Goal: "Scientist",
  },
  {
    name: "Onasanya Solomon Adewumi",
    description: "Enjoys helping others learn",
    Goal: "Psychologist",
  },
  {
    name: "Bello Emmanuelah Segun",
    description: "Determined student who excels in physical education",
    Goal: "Accountant",
  },
  {
    name: "Williams Damilola",
    description: "Williams has a natural curiosity for how things work",
    Goal: "Teacher",
  },
  {
    name: "Oluwatosin Sapphire Oguntuase",
    description: "Energetic and kind⚡",
    Goal: "Game Designer",
  },
  {
    name: " Williams David",
    description: "Nice and Smart",
    Goal: "AI Engineer",
  },
  {
    name: "Adedara Joshua Favour",
    description: "Thoughtful and hardworking",
    Goal: "IT Specialist",
  },
  {
    name: "Oluwalade Promise Morolake",
    description: "Well-rounded student with strong interpersonal skills",
    Goal: "Accountant",
  },
  {
    name: "Ogunlade Ayowande Olamide",
    description: "independent learner with a passion for storytelling",
    Goal: "Writer",
  },
  {
    name: "Adeoye Oluwatobi",
    description: "Highly motivated and responsible student",
    Goal: "UX/UI Designer",
  },
  {
    name: "Olufidipe Covenant",
    description:
      "Quiet but focused student who works diligently in all subject areas",
    Goal: "Robotics Engineer",
  },
  {
    name: "Oluwatoyin sunkanmi Emmanuel",
    description: "Always fun to be around with😊💕",
    Goal: "Film Director",
  },
  {
    name: "Alabi Stephen Olaoye",
    description: "Outgoing and a good Communicator",
    Goal: "Actor",
  },
  {
    name: "Oluwafemi Charles Adebowale",
    description: "Problem Solver",
    Goal: "Graphic Designer",
  },
  {
    name: "Olamilekan Fawaz Olowoyo",
    description: "Creative and Knowledgeable",
    Goal: "UX/UI Designer",
  },
];
