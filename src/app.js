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
        team_cards: [
            {icon: 'fas fa-road', title: 'Establish Goals', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus id delectus cumque eaque atque odit praesentium explicabo obcaecati rem?'},
            {icon: 'fas fa-video', title: 'Work With A Team', paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora accusantium aut culpa quo, libero beatae earum architecto sapiente at. Eveniet!'},
            {icon: 'fas fa-tint', title: 'Get Results', paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit, nesciunt repellat officiis praesentium esse voluptatum ex optio nostrum earum.'}
        ],
        services_cards: [
            {icon: 'fab fa-google', title:'Google SEO' , paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem eius magni dolore, molestiae nemo aliquid alias qui! Perferendis, eius?'},
            {icon:'fas fa-cog' , title:'Brand Strategy' , paragraph:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quidem nam eius quo rem numquam blanditiis porro magni recusandae quibusdam!'},
            {icon:'fas fa-chart-bar' , title:'Local SEO' , paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, fuga neque quibusdam molestiae impedit numquam eum quisquam consectetur ea quam.'},
            {icon: 'fas fa-building', title:'SEO Analysis' , paragraph:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nulla voluptates asperiores qui sunt ducimus inventore vero accusantium tempora cum.'},
        ],
        work_img_path: './dist/img/case-study-gallery-',
        work_cards: [
            {image_id: '3-1.jpg'},
            {image_id: '2-1.jpg'},
            {image_id: '1-1.jpg'},
            {image_id: '4-1.jpg'},
            {image_id: '5-1.jpg'},
            {image_id: '6-1.jpg'},

        ]
    },

    methods: {

    }

})