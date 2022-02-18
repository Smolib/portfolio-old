const templateCard = document.querySelector('#project').content.querySelector('.project');
const projectsArea = document.querySelector('.projects__area');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupList = document.querySelector('.popup__list');

const projectsArray = [
  {
    title: 'Научиться Учиться',
    subtitle: 'Учебный проект в Яндекс. Практикуме',
    image: 'images/project01.png',
    github: 'https://github.com/Smolib/how-to-learn',
    pages: 'https://smolib.github.io/how-to-learn/',
    description: 'описание бла-бла-бла',
    skills:
            [
              'первое',
              'второе',
              'и третье!'
            ],
  },
  {
    title: 'Научиться Учиться',
    subtitle: 'Учебный проект в Яндекс. Практикуме',
    image: 'images/project01.png',
    github: 'https://github.com/Smolib/how-to-learn',
    pages: 'https://smolib.github.io/how-to-learn/',
    description: 'описание бла-бла-бла',
    skills:
            [
              'первое',
              'второе',
              'и третье!'
            ],
  }
];

const handleMoreClick = (evt) => {
  popupFresh();
  popup.classList.add('popup_opened');

  card = evt.target.closest('.project');
  project = card.projectInfo;

  popup.querySelector('.popup__title').textContent = project.title;
  popup.querySelector('.popup__subtitle').textContent = project.subtitle;
  popup.querySelector('.popup__description').textContent = project.description;

  project.skills.forEach((skill) => {
    const listItem = document.createElement('li');
    listItem.textContent = skill;

    popupList.append(listItem);
  })
};

const popupFresh = () => {
  while (popupList.firstChild) {
    popupList.firstChild.remove();
  }
}

const createCard = (project) => {
  const card = templateCard.cloneNode(true);
  const image = card.querySelector('.project__image');

  card.projectInfo = project;

  image.src = project.image;
  image.alt = project.title;

  card.querySelector('.project__title').textContent = project.title;
  card.querySelector('.project__subtitle').textContent = project.subtitle;
  card.querySelector('.project__link_type_github').href = project.github;
  card.querySelector('.project__link_type_pages').href = project.pages;
  card.querySelector('.project__more').addEventListener("click", handleMoreClick);

  return card;
}

const addCard = (project) => {
  const card = createCard(project);
  projectsArea.prepend(card);
}

projectsArray.forEach((project) => addCard(project));

popupCloseButton.addEventListener('click', (evt) => {
  popup.classList.remove('popup_opened')
  popupFresh();
});
