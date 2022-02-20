const templateCard = document.querySelector('#project').content.querySelector('.project');
const projectsArea = document.querySelector('.projects');
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
    description: 'Первый учебный проект в Яндекс.Практикуме. Начальное обучение верстке, использование HTML, CSS. Использовались кейфремы для анимации в CSS. Верстка по брифу в pdf. Следование принципам БЭМ при оформлении классов и файлов CSS. Работа проходила ревью в процессе обучения.',
    skills:
            [
              'HTML',
              'CSS',
              'БЭМ'
            ],
  },
  {
    title: 'Когнитивные искажения',
    subtitle: 'Учебный проект в Хекслете',
    image: 'images/project03.png',
    github: 'https://github.com/Smolib/layout-designer-project-lvl1',
    pages: 'https://smolib.github.io/layout-designer-project-lvl1/',
    description: 'Первый учебный проект в Хекслете. Начальное обучение верстке, использование HTML, CSS. Верстка по макету в Figma. Работа проходила автотесты на площадке Хекслета.',
    skills:
            [
              'HTML',
              'CSS',
              'Figma'
            ],
  },
  {
    title: 'Путешествия по России',
    subtitle: 'Учебный проект в Яндекс. Практикуме',
    image: 'images/project02.png',
    github: 'https://github.com/Smolib/russian-travel',
    pages: 'https://smolib.github.io/russian-travel/',
    description: 'Второй учебный проект в Яндекс.Практикуме. Углубленное обучение верстке. Адаптивная верстка под несколько разрешений. Использование grid и flex. Верстка с макета в Figma. Следование принципам БЭМ при оформлении классов и файлов CSS. Работа проходила ревью в процессе обучения.',
    skills:
            [
              'HTML',
              'CSS',
              'БЭМ',
              'Figma'
            ],
  },
  {
    title: 'Music Box',
    subtitle: 'Учебный проект в Хекслете',
    image: 'images/project04.png',
    github: 'https://github.com/Smolib/layout-designer-project-lvl2',
    pages: 'https://smolib.github.io/layout-designer-project-lvl2/',
    description: 'Второй учебный проект в Хеклете. Углубленное обучение верстке. Сайт на две страницы. Адаптивная верстка под несколько разрешений. Использование препроцессора Sass. Использование grid и flex. Верстка с макета в Figma. Работа проходила автотесты на площадке Хекслета.',
    skills:
            [
              'HTML',
              'CSS',
              'Figma',
              'Sass'
            ],
  },
  {
    title: 'Сайт - портфолио',
    subtitle: 'Pet-проект',
    image: 'images/project05.png',
    github: 'https://github.com/Smolib/portfolio',
    pages: '/',
    description: 'Проект создавался для отработки навыков верстки и программирования, а также для помощи в дальнейшем поиске работы. Собственный дизайн. Адаптивная верстка. Использование методологии БЭМ. Использованиее css-анимации. Использование JS для разработки карточек проектов.',
    skills:
            [
              'HTML',
              'CSS',
              'JS'
            ],
  },
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
    listItem.classList.add('popup__list-item');
    listItem.textContent = skill;

    popupList.append(listItem);
  })
};

const popupFresh = () => {
  while (popupList.firstChild) {
    popupList.firstChild.remove();
  }
}

const createdCards = [];

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
