const app = Vue.createApp({
    data() {
        return {
            name: "Lherminez",
            firstName: "Mickaël",
            job: "Tech Lead Front-End",
            mail: "mickael.lherminez@gmail.com",
            image: "assets/images/moi.jpeg",
            exist: true,
            show: true,
            checked: false,
            showList: "Tableau",
            skills: [
                {
                    img: 'assets/images/angularjs.png',
                    color: '#a1120c',
                    width: '20px',
                    label: 'AngularJS',
                    type: 'Framework',
                    rating: 8
                }, {
                    img: 'assets/images/database.png',
                    color: '#9e9e9f',
                    width: '20px',
                    label: 'SQL',
                    type: 'Language',
                    rating: 7
                }, {
                    img: 'assets/images/language-css3.png',
                    color: '#3cb27f',
                    width: '20px',
                    label: 'CSS',
                    type: 'Language',
                    rating: 7
                }, {
                    img: 'assets/images/bootstrap.png',
                    color: '#543a78',
                    width: '20px',
                    label: 'Bootstrap',
                    type: 'Library',
                    rating: 8
                }, {
                    img: 'assets/images/language-html5.png',
                    color: '#de4b25',
                    width: '20px',
                    width: '20px',
                    label: 'HTML5',
                    type: 'Language',
                    rating: 9
                }, {
                    img: 'assets/images/language-csharp.png',
                    color: '#652077',
                    width: '20px',
                    label: 'C#',
                    type: 'Language',
                    rating: 8
                }, {
                    img: 'assets/images/jquery.png',
                    color: '#144997',
                    width: '20px',
                    label: 'jQuery',
                    type: 'Library',
                    rating: 7
                }, {
                    img: 'assets/images/docker.png',
                    color: '#0098d6',
                    width: '20px',
                    label: 'Docker',
                    type: 'Infra',
                    rating: 6
                }, {
                    img: 'assets/images/angular.png',
                    color: '#c30e2e',
                    width: '20px',
                    label: 'Angular 4, 5, 6, 7...',
                    type: 'Framework',
                    rating: 7
                }, {
                    img: 'assets/images/vuejs.png',
                    color: '#3cb27f',
                    width: '20px',
                    label: 'Vue 2, 3',
                    type: 'Framework',
                    rating: 9
                }
            ]
        }       
    },
})
 