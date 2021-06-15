const app = new Vue({
    el: '#app',

    data: {
        // Nav links
        links: [
            {name: 'Home', link:'#site_header'},
            {name: 'Who We Are', link: '#meet'},
            {name: 'What We Do', link: '#services'},
            {name: 'Where We Work', link: '#work'},
            {name: 'Careers',link:'#plans', class: 'apply'},
            {name: 'News', link:'#news'},
            {name: 'GET IN TOUCH NOW',link:'#contact', class: 'btn_y'},
        ],
        cards: [
            {icon: 'fas fa-road', title: 'Establish Goals', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus id delectus cumque eaque atque odit praesentium explicabo obcaecati rem?'},
            {icon: 'fas fa-video', title: 'Work With A Team', paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora accusantium aut culpa quo, libero beatae earum architecto sapiente at. Eveniet!'},
            {icon: 'fas fa-tint', title: 'Get Results', paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit, nesciunt repellat officiis praesentium esse voluptatum ex optio nostrum earum.'}
        ]
    },

    methods: {

    }

})