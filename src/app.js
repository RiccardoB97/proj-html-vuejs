const app = new Vue({
    el: '#app',
    
    data: {
        // Image path
        img_path: './dist/img/',
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
        // Cards in team section
        team_cards: [
            {icon: 'fas fa-road', title: 'Establish Goals', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad accusamus id delectus cumque eaque atque odit praesentium explicabo obcaecati rem?'},
            {icon: 'fas fa-video', title: 'Work With A Team', paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora accusantium aut culpa quo, libero beatae earum architecto sapiente at. Eveniet!'},
            {icon: 'fas fa-tint', title: 'Get Results', paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odit, nesciunt repellat officiis praesentium esse voluptatum ex optio nostrum earum.'}
        ],
        // Cards in services section
        services_cards: [
            {icon: 'fab fa-google', title:'Google SEO' , paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem eius magni dolore, molestiae nemo aliquid alias qui! Perferendis, eius?'},
            {icon:'fas fa-cog' , title:'Brand Strategy' , paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem eius magni dolore, molestiae nemo aliquid alias qui! Perferendis, eius?'},
            {icon:'fas fa-chart-bar' , title:'Local SEO' , paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem eius magni dolore, molestiae nemo aliquid alias qui! Perferendis, eius?'},
            {icon: 'fas fa-building', title:'SEO Analysis' , paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem eius magni dolore, molestiae nemo aliquid alias qui! Perferendis, eius?'},
        ],
        // Cards in Work section
        work_cards: [
            {image_id: 'case-study-gallery-3-1.jpg'},
            {image_id: 'case-study-gallery-2-1.jpg'},
            {image_id: 'case-study-gallery-1-1.jpg'},
            {image_id: 'case-study-gallery-4-1.jpg'},
            {image_id: 'case-study-gallery-5-1.jpg'},
            {image_id: 'case-study-gallery-6-1.jpg'},

        ],
        // Cards in plan section
        plan_cards:[
            {name:'Standard', price:'19', projects: '5', storage:'5 GB', users: 'Unlimited'},
            {name:'Premium', price:'29', projects: '10', storage:'15 GB', users: 'Unlimited'},
            {name:'Professional', price:'39', projects: '15', storage:'30 GB', users: 'Unlimited'},
            {name:'Extreme', price:'59', projects: 'Unlimited', storage:'Unlimited', users: 'Unlimited'},
        ],
        // Cards in news section
        news_card:[
            {image:'related-service-2-700x441.jpg', title:'Why You Need A SEO Agency Now', date: 'November 1st, 2017', paragraph: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit perspiciatis quae esse laboriosam temporibus fugiat magnam tenetur facere harum? Praesentium.'},
            {image:'related-service-4-700x441.jpg', title:'SEO Tips For Your Startup', date: 'November 1st, 2017', paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius consectetur adipisci sequi nobis eum consequatur quod aliquid eaque sed pariatur!'},
            {image:'blog-post-6-700x441.jpg', title:'Image Optimized For Your Site', date: 'November 1st, 2017', paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit at omnis totam unde. Illum animi omnis id quis quos?'},
        ],
        // Logos of partners in client section
        partners: [
            {image:'clients_partner_5-200x202.png', name: 'Avada'}, 
            {image:'clients_partner_6-200x202.png', name: 'Avada University'},
            {image:'clients_partner_1-200x202.png', name: 'Avada Agency'}, 
            {image:'clients_partner_2-200x202.png', name: 'Avada Law'}, 
        ]
    },

    methods: {

    }

})