import {
  enableValidation
} from './components/validate.js';

const dataPublications = [{
  image: './images/picture/publication_Topic-driven Ensemble for Online Advertising Generation.png',
  title: 'Topic-driven Ensemble for Online Advertising Generation',
  authors: 'Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov',
  text: `Online advertising is one of the most widespread ways to reach and increase a target audience 
  for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. 
  Professional generation of banners requires creative and writing skills and a basi`
},
{
  image: './images/picture/publication_Convolutional neural networks with hierarchical context transfe….png',
  title: 'Convolutional neural networks with hierarchical context transf',
  authors: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
  text: `In this work, we consider a problem of predicting the next state of a given area using retrospective information. 
  The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major 
  issues of next state prediction problems - density variability, a sig`
},
{
  image: './images/picture/publication_Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat….png',
  title: 'Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat',
  authors: 'Ksenia Mukhina, Alexander Visheratin, Denis Nasonov',
  text: `One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens' 
  behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. 
  But it is widely known that the`
},
{
  image: './images/picture/publication_Hybrid Intellectual Scheme for Scheduling of Heterogeneous Wo….png',
  title: 'Hybrid Intellectual Scheme for Scheduling of Heterogeneous Wo',
  authors: 'Mikhail Melnik, Ivan Dolgov, Denis Nasonov',
  text: `Scheduling of workload in distributed computing systems is a well-known optimization proble. A workload
  may include single independent software packages. However, the computational process in scientific and
  industrial fields is often organized as compos`
},
{
  image: './images/picture/publication_Peregreen–modular database for efficient storage of historical tim….png',
  title: 'Peregreen–modular database for efficient storage of historical tim',
  authors: 'Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B',
  text: `The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage 
  that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed 
  of data processing operations execution but als`
},
{
  image: './images/picture/publication_Orienteering Problem with Functional Profits for multi-sourc.png',
  title: 'Orienteering Problem with Functional Profits for multi-sourc',
  authors: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
  text: `Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, 
  which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem 
  with Functional Profits (OPFP), where the score of`
},
{
  image: './images/picture/publication_Intelligent sightseeing in immensely manifold cities.png',
  title: 'Intelligent sightseeing in immensely manifold cities: Case',
  authors: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich',
  text: `In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm 
  for automated touristic paths construction. Score function for location depends on three components: location's social media popularity and rating, 
  distances of place from others in r…`
},
{
  image: './images/picture/publicaion_Intellectual Execution Scheme of Iterative Computational Models ….png',
  title: 'Intellectual Execution Scheme of Iterative Computational Models',
  authors: 'Mikhail Melnik, Denis A Nasonov,Alexey Liniov',
  text: `In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also
  becomes more complex. This leads more and more often to the need to use high-performance computational
  clusters, such as supercomputers. Created m`
},
{
  image: './images/picture/publication_User Profiles Matching for Different Social Networks Based.png',
  title: 'User Profiles Matching for Different Social Networks Based',
  authors: 'Timur Sokhin, Nikolay Butakov,Denis Nasonov',
  text: `It is common practice nowadays to use multiple social networks for different social roles. Although this, these networks assume differences in content type, 
  communications and style of speech. If we intend to understand human behaviour as a key-feature for recommender systems, banking risk`
},
{
  image: './images/picture/publication_Urban events prediction via convolutional neural networks a….png',
  title: 'Urban events prediction via convolutional neural networks ',
  authors: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
  text: `In today' s world, it is crucial to be proactive and be prepared for events which are not happening yet. 
  Thus, there is no surprise that in the field of social media analysis the research agenda has moved from the development of event detection methods 
  to a brand new area - event prediction models...`
},
{
  image: './images/picture/publication_Ensemble-based method of answers retrieval for domain spe.png',
  title: 'Ensemble-based method of answers retrieval for domain spe…',
  authors: 'Iskander Safiulin, Nikolay Butakov, Dmitriy Alexandrov, Denis Nasonov',
  text: `Many companies want or prefer to use chatbot systems to provide smart assistants for accompanying human specialists especially newbies 
  with automatic consulting. Implementation of a really useful smart assistant for a specific domain requires a knowledge base for this domain, that often e…`
},
{
  image: './images/picture/publication_uilding City-Scale Walking Itineraries Using Large Geospatia.png',
  title: 'Building City-Scale Walking Itineraries Using Large Geospatia…',
  authors: 'Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov',
  text: `Nowadays, social networks play an important role in many aspects of people's life and in traveling in particular. 
  People share their experience and opinions not only on specialized sites, like TripAdvisor, but also in social networks, e.g. Instagram. 
  Combining information from different sources we can ge…`
},
{
  image: './images/picture/publication_Evaluation of modern tools and techniques for storing time-serie.png',
  title: 'Evaluation of modern tools and techniques for storing time-serie…',
  authors: 'Alexey Struckov, Semen Yufa, Alexander A Visheratin, Denis Nasonov',
  text: `Time series data as its analysis and applications recently have become increasingly important in different areas and domains. 
  Many fields of science and industry rely on storing and processing large amounts of time series - economics and finance, medicine, 
  the Internet of Things, environmental protection, …`
},
{
  image: './images/picture/publication_Forecasting of the Urban Area State Using Convolutional Neural.png',
  title: 'Forecasting of the Urban Area State Using Convolutional Neural…',
  authors: 'Ksenia D Mukhina, Alexander A Visheratin, Gali-Ketema Mbogo, Denis Nasonov',
  text: `Active development of modern cities requires not only efficient monitoring systems but furthermore forecasting systems 
  that can predict future state of the urban area with high accuracy. In this work we present a method for urban area prediction based 
  on geospatial activity of users in social network. One of the …`
},
{
  image: './images/picture/publication_Workflow scheduling using neural networks and reinforcement lear.png',
  title: 'Workflow scheduling using neural networks and reinforcement lear…',
  authors: 'Mikhail Melnik, Denis Nasonov',
  text: `The development of information technologies entails a nonlinear growth of both volumes of data and the complexity of data processing itself. 
  Scheduling is one of the main components for optimizing the operation of   the computing system. Currently, there are a large number of scheduling algorithms. 
  However, even in spite of existing hybrid sch…`
},
{
  image: './images/picture/publication_Multiscale event detection using convolutional quadtrees and ada.png ',
  title: 'Multiscale event detection using convolutional quadtrees and ada…',
  authors: 'A A Visheratin, K D Mukhina, A K Visheratina, D Nasonov, A V Boukhanovsky',
  text: `Increasing popularity of social networks made them a viable data source for many data mining applications and event 
  detection is no exception. Researchers aim not only to find events that happen in networks but more importantly to identify and locate events occurring 
  in the real world. In this paper, we …`
},
{
  image: './images/picture/publication_Unified domain-specific language for collecting and processing dat.png',
  title: ' …',
  authors: 'Nikolay Butakov, Maxim Petrov, Ksenia Mukhina, Denis Nasonov, Sergey Kovalchuk',
  text: `Data provided by social media becomes an increasingly important analysis material for social scientists, market analysts, and other stakeholders. 
  Diversity of interests leads to the emergence of a variety of crawling techniques and programming solutions. Nevertheless, these solutions 
  have a lack of flexibility to sati…`
},
{
  image: './images/picture/publication_Blockchain-based transaction integrity in distributed big data.png',
  title: 'Blockchain-based transaction integrity in distributed big data …',
  authors: 'Denis Nasonov, Alexander A Visheratin, Alexander Boukhanovsky',
  text: `Today Big Data occupies a crucial part of scientific research areas as well as in the business analysis of large companies. 
  Each company tries to find the best way to make generated Big Data sets valuable and profitable. However, in most cases, companies have not enough 
  opportunities and budget t…`
},
{
  image: './images/picture/publication_The multi-level adaptive approach for efficient execution of multi-sc.png',
  title: 'The multi-level adaptive approach for efficient execution of multi-sc…',
  authors: 'D Nasonov, N Butakov, M Melnik, A Visheratin, A Linev, P Shvets, S Sobolev, K Mukhina',
  text: `Today advanced research is based on complex simulations which require a lot of computational resources that usually are organized 
  in a very complicated way from technical part of the view. It means that a scientist from physics, biology or even sociology should struggle with all technical is…`
},
{
  image: './images/picture/publication_Towards a scenario-based solution for extreme metocean event sim.png',
  title: 'Towards a scenario-based solution for extreme metocean event sim…',
  authors: 'A Kalyuzhnaya, D Nasonov, S Ivanov, S Kosukhin, A Boukhanovsky',
  text: `Today, metocean investigations, combined with forecasts and analysis of extreme events, require new design and development approaches 
  because of their complexity. Extreme metocean events forecasting and prevention is an urgent computing task from decision-making and for reaction point of view.`
},
{
  image: './images/picture/publication_Precedent-Based Approach for the Identification of Deviant Behavio.png',
  title: 'Precedent-Based Approach for the Identification of Deviant Behavio…',
  authors: 'Anna V Kalyuzhnaya, Nikolay O Nikitin, Nikolay Butakov, Denis Nasonov',
  text: `The current paper is devoted to a problem of deviant users' identification in social media. For this purpose, each user 
  of social media source should be described through a profile that aggregates open information about him/her within the special structure. 
  Aggregated user profiles are formally describ…`
},
{
  image: './images/picture/publication_Storage tier-aware replicative data reorganization with prioritization.png ',
  title: 'Storage tier-aware replicative data reorganization with prioritization…',
  authors: 'Anton Spivak, Andrew Razumovskiy, Denis Nasonov, Alexander Boukhanovsky, Anton Redice',
  text: `The importance of data collection, processing, and analysis is rapidly growing. Big Data technologies are in high demand in many fields, 
  including bio-informatics, hydrometeorology, and high energy physics. One of the most popular computational paradigms used in large data processing fra…`
},
{
  image: './images/picture/publication_Hybrid scheduling algorithm in early warning systems.png',
  title: 'Hybrid scheduling algorithm in early warning systems',
  authors: 'A Visheratin, M Melnik, D Nasonov, N Butakov, A Boukhanovsky',
  text: `The development of an efficient Early Warning System (EWS) is essential for the prediction and prevention of imminent natural hazards. 
  In addition to providing a computationally intensive infrastructure with extensive data transfer, high-execution reliability and hard-deadline 
  satisfaction are important req…`
},
{
  image: './images/picture/publication_Adaptive performance model for dynamic scaling Apache Spark St.png',
  title: 'Adaptive performance model for dynamic scaling Apache Spark St…',
  authors: 'Max Petrov, Nikolay Butakov, Denis Nasonov, Mikhail Melnik',
  text: `Nowadays, data volumes increase exceptionally, a lot of information comes from different sources, for example, 
  from mobile phones, sensors, traffic, etc. All information from these sources can be represented as a data streams, 
  which can grow up and fall in time in their size. In the first case, data proce…`
},
{
  image: './images/picture/publication_Distributed data-driven platform for urgent decision making in car.png',
  title: 'Distributed data-driven platform for urgent decision making in car…',
  authors: 'Sergey V Kovalchuk, Evgeniy Krotov, Pavel A Smirnov, Denis A Nasonov, Alexey N Yakovlev',
  text: `his paper presents ongoing research aimed at developing a data-driven platform for clinical decision support systems (DSSs) 
  that require integration and processing of various data sources within a single solution. Resource management is developed 
  within a framework of an urgent computing approach to address …`
},
{
  image: './images/picture/publication_Hybrid evolutionary workflow scheduling algorithm for dynami.png',
  title: 'Hybrid evolutionary workflow scheduling algorithm for dynami…',
  authors: 'D Nasonov, A Visheratin, N Butakov, N Shindyapina, M Melnik, A Boukhanovsky',
  text: `he optimal workflow scheduling is one of the most important issues in heterogeneous distributed computational environments. 
  Existing heuristic and evolutionary scheduling algorithms have their advantages and disadvantages. 
  In this work we propose a hybrid algorithm based on heuristic methods…`
},
{
  image: './images/picture/publication_Byzantine fault-tolerant and semantic-driven consensus proto.png',
  title: 'Byzantine fault-tolerant and semantic-driven consensus proto…',
  authors: 'Stepan Rakitin, Alexander A Visheratin, Denis Nasonov',
  text: `To provide fault tolerance, modern distributed storage systems use specialized network topologies and consensus 
  protocols that create high overheads. The main disadvantage of existing specialized topologies is a difficulty to implement an efficient 
  data placement that takes into account locality of the data. In scie…`
},
{
  image: './images/picture/publication_Execution time estimation for workflow scheduling.png',
  title: 'Execution time estimation for workflow scheduling',
  authors: 'A Chirkin, Adam SZ Belloum, S Kovalchuk, Marc X Makkes, M Melnik, A Visheratin, D Nasonov',
  text: `Estimation of the execution time is an important part of the workflow scheduling problem. The aim of this paper is to highlight 
  common problems in estimating the workflow execution time and propose a solution that takes into account the complexity and the stochastic 
  aspects of the workflow compone…`
},
]

const settingsSwiperPublication = {
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.publications__slider-button_type_next',
    prevEl: '.publications__slider-button_type_prev',
  },
  autoplay: false,
  allowTouchMove: false,
  slidesPerGroup: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      autoplay: {
        delay: 2500,
      },
      allowTouchMove: true,
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        fill: 'row',
        rows: 2,
      },
      allowTouchMove: true,
    },
    1100: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 33,
      grid: {
        fill: 'row',
        rows: 2,
      },
    }
  },
};

const settingsSwiperTeam = {
  pagination: {
    el: '.team__slide',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet team__bullet'
  },
  navigation: {
    nextEl: '.team__arrow_next',
    prevEl: '.team__arrow_back',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
      slidesPerGroup: 2,
    },
    570: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
};

const settingsSwiperAboutUs = {
  pagination: {
    el: '.about-us__bullets',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet intro__bullet'
  },
  navigation: {
    nextEl: '.about-us__arrow_type_next',
    prevEl: '.about-us__arrow_type_back',
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 8,
    },
    570: {
      slidesPerView: 2 ,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 22,
    },
  }
};

const updateSwiper = (selector, settings) => {
  return new Swiper(selector, settings)
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 570 && window.innerWidth >= 550) {
    updateSwiper('.publications__body', settingsSwiperPublication);
    updateSwiper('.team__cards', settingsSwiperTeam);
    updateSwiper('.about-us__swiper', settingsSwiperAboutUs);
  }
})

updateSwiper('.publications__body', settingsSwiperPublication);
updateSwiper('.team__cards', settingsSwiperTeam);
updateSwiper('.about-us__swiper', settingsSwiperAboutUs);

const publicationCards = document.querySelector('.publications__slider');
const publictionTemplate = publicationCards.querySelector('.publications__template');

dataPublications.forEach(publication => {
  const clonePublication = publictionTemplate.content.querySelector('.publication').cloneNode(true);
  const publicationImage = clonePublication.querySelector('.publication__picture');

  publicationImage.src = publication.image;
  publicationImage.alt = publication.title;

  clonePublication.querySelector('.publication__title').textContent = publication.title;
  clonePublication.querySelector('.publication__authors').textContent = publication.authors;
  clonePublication.querySelector('.publication__text').textContent = publication.text;

  publicationCards.append(clonePublication);
})


const aspirant = document.querySelector('#aspirant')
const magistr = document.querySelector('#magistr')
const magistrButton = document.querySelector('#magistr__button')
const aspirantButton = document.querySelector('#aspirant__button')

const aspirantOnClick = () => {
  aspirant.classList.add('educate__programs_active')
  magistr.classList.remove('educate__programs_active')
  magistrButton.classList.remove('educate__button_active')
  aspirantButton.classList.add('educate__button_active')
}
const magistrOnClick = () => {
  aspirant.classList.remove('educate__programs_active')
  magistr.classList.add('educate__programs_active')
  magistrButton.classList.add('educate__button_active')
  aspirantButton.classList.remove('educate__button_active')
}

aspirantButton.addEventListener('click', aspirantOnClick)
magistrButton.addEventListener('click', magistrOnClick)


// popup
const labPopup = document.querySelector('.popup__lab')

const industrialFirst = document.querySelector('.industrial__card-1')
const industrialSecond = document.querySelector('.industrial__card-2')
const industrialThird = document.querySelector('.industrial__card-3')
const industrialFourth = document.querySelector('.industrial__card-4')

function findHeader(item) {
  return item.querySelector('.industrial__card-title').textContent
}

const industrialFirstButton = industrialFirst.querySelector('.industrial__card-button')
const industrialSecondButton = industrialSecond.querySelector('.industrial__card-button')
const industrialThirdButton = industrialThird.querySelector('.industrial__card-button')
const industrialFourthButton = industrialFourth.querySelector('.industrial__card-button')

function openPopup(popup, header) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeEsc);
  popup.addEventListener('click', closeOverlay);
  popup.querySelector('.popup__close').addEventListener('click', closeCross)
  popup.querySelector('.popup__header').textContent = header
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeEsc);
  popup.removeEventListener('click', closeOverlay);
  popup.querySelector('.popup__close').removeEventListener('click', closeCross)
  popup.querySelector('.popup__header').textContent = ''
};

function closeOverlay(event) {
  const popup = document.querySelector('.popup_opened')
  if (event.target === popup) {
    closePopup(popup)
  }
}

function closeEsc(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closeCross() {
  const popup = document.querySelector('.popup_opened');
  closePopup(popup);
}

industrialFirstButton.addEventListener('click', () => openPopup(labPopup, findHeader(industrialFirst)))
industrialSecondButton.addEventListener('click', () => openPopup(labPopup, findHeader(industrialSecond)))
industrialThirdButton.addEventListener('click', () => openPopup(labPopup, findHeader(industrialThird)))
industrialFourthButton.addEventListener('click', () => openPopup(labPopup, findHeader(industrialFourth)))

// ** Начальная инициализация
// Включение валидации полей ввода форм
enableValidation({
  formSelector: 'form',
  inputSelector: 'form__input',
  inputErrorClass: 'form__input_type_error',
  submitButtonSelector: 'form__send-btn',
  inactiveButtonClass: 'form__send-btn_disabled',
  errorClass: 'form__input-error_active'
});
