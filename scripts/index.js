const dataPublications = [{
    image: "./images/picture/publication_Topic-driven Ensemble for Online Advertising Generation.png",
    title: "Topic-driven Ensemble for Online Advertising Generation",
    authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
    text: `Online advertising is one of the most widespread ways to reach and increase a target audience 
    for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. 
    Professional generation of banners requires creative and writing skills and a basi`
},
{
    image: "./images/picture/publication_Convolutional neural networks with hierarchical context transfe….png",
    title: "Convolutional neural networks with hierarchical context transf",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: `In this work, we consider a problem of predicting the next state of a given area using retrospective information. 
    The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major 
    issues of next state prediction problems - density variability, a sig`
},
{
    image: "./images/picture/publication_Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat….png",
    title: "Spatiotemporal Filtering Pipeline for Efficient Social Networks Dat",
    authors: "Ksenia Mukhina, Alexander Visheratin, Denis Nasonov",
    text: `One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens' 
    behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. 
    But it is widely known that the`
},
{
    image: "./images/picture/publication_Hybrid Intellectual Scheme for Scheduling of Heterogeneous Wo….png",
    title: "Hybrid Intellectual Scheme for Scheduling of Heterogeneous Wo",
    authors: "Mikhail Melnik, Ivan Dolgov, Denis Nasonov",
    text: `Scheduling of workload in distributed computing systems is a well-known optimization proble. A workload
    may include single independent software packages. However, the computational process in scientific and
    industrial fields is often organized as compos`
},
{
    image: "./images/picture/publication_Peregreen–modular database for efficient storage of historical tim….png",
    title: "Peregreen–modular database for efficient storage of historical tim",
    authors: "Alexander Visheratin, Alexey Struckov, Semen Yufa, Alexey Muratov, Denis Nasonov, Nikolay B",
    text: `The rapid development of scientific and industrial areas, which rely on time series data processing, raises the demand for storage 
    that would be able to process tens and hundreds of terabytes of data efficiently. And by efficiency, one should understand not only the speed 
    of data processing operations execution but als`
},
{
    image: "./images/picture/publication_Orienteering Problem with Functional Profits for multi-sourc.png",
    title: "Orienteering Problem with Functional Profits for multi-sourc",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
    text: `Orienteering problem (OP) is a routing problem, where the aim is to generate a path through set of nodes, 
    which would maximize total score and would not exceed the budget. In this paper, we present an extension of classic OP—Orienteering Problem 
    with Functional Profits (OPFP), where the score of`
},
{
    image: "./images/picture/publication_Intelligent sightseeing in immensely manifold cities.png",
    title: "Intelligent sightseeing in immensely manifold cities: Case",
    authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov, Lev Manovich",
    text: `In this work, we show how social media data can be used for the improvement of touristic experience. We present an algorithm 
    for automated touristic paths construction. Score function for location depends on three components: location's social media popularity and rating, 
    distances of place from others in r…`
},
{
    image: "./images/picture/publicaion_Intellectual Execution Scheme of Iterative Computational Models ….png",
    title: "Intellectual Execution Scheme of Iterative Computational Models",
    authors: "Mikhail Melnik, Denis A Nasonov,Alexey Liniov",
    text: `In the modern world, with the growth of the volume of processed data arrays, the logic of solving problems also
    becomes more complex. This leads more and more often to the need to use high-performance computational
    clusters, such as supercomputers. Created m`
},
]

const swiper = new Swiper('.publications__body', {
    
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: '.publications__slider-button_type_next',
        prevEl: '.publications__slider-button_type_prev', 
    },
    allowTouchMove: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        570: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
                fill:"row",
                rows: 2,
            },
            autoplay: false,
        },
        1100: {
            slidesPerView: 3, 
            spaceBetween: 33,

            grid: {
                fill:"row",
                rows: 2,
            },
            autoplay: false,
        }
    },

    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
})

const publicationCards = document.querySelector(".publications__slider");
const publictionTemplate = publicationCards.querySelector(".publications__template");

dataPublications.forEach(publication=>{
    const clonePublication = publictionTemplate.content.querySelector(".publication").cloneNode(true);
    const publicationImage = clonePublication.querySelector(".publication__picture");

    publicationImage.src = publication.image;
    publicationImage.alt = publication.title;

    clonePublication.querySelector(".publication__title").textContent = publication.title;
    clonePublication.querySelector(".publication__authors").textContent = publication.authors;
    clonePublication.querySelector(".publication__text").textContent = publication.text;

    publicationCards.append(clonePublication);
})

