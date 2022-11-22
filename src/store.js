import { reactive } from 'vue'

export const store = reactive({
    articles: [],
    messages: [],
    // FORM
    name: "",
    email: "",
    subject: "",
    message: "",
    // BENEFITS
    benefits: {
        img: "/img/24.png",
        title: "Online Marketing",
        description: "it is a long established fact that a reader will be distracted",
        list: ["SEO", "SEM", "Website Strategy", "Social Management"],
      },
      tricks: [
        {
          img: "/img/510.png",
          title: "Reporting Analysis",
          description: "Everybody's workin' for the weekend. Everybody wants a new romance"
        },
        {
          img: "/img/511.png",
          title: "Technical SEO Adult",
          description: "Everybody's going off the deep end. Everybody needs a second chance"
        }
      ],
    //   FEATURES
      features: [
        {
            img: "/img/342.png",
            title: "Customized Invoices",
        },
        {
            img: "/img/234.png",
            title: "Stock Management",
        },
        {
            img: "/img/86.png",
            title: "Receivable & Payable",
        },
        {
            img: "/img/877.png",
            title: "Manage Buying",
        },
        {
            img: "/img/476.png",
            title: "Powerful & Secure",
        },
        {
            img: "/img/86.png",
            title: "Fastest Return Filing",
        },
        {
            img: "/img/474.png",
            title: "Monthly Detailed",
        },
        {
            img: "/img/367.png",
            title: "Product Management",
        }
    ],
    // TESTIMONIALS
    testimonials: [
        {
            img:"/img/26.jpeg",
            name:"Julia Aan",
            role: "COO Sofbox",
            description: "Lei è quella brava che fa tutto",
        },
        {
            img:"/img/27.jpeg",
            name:"Mac Znder",
            role: "Manager Sofbox",
            description: "Lui è quello meno bravo che chiede consigli ogni cinque minuti",
        }
    ],
    // SOCIAL
    social: [
        {
          icon: "fa-brands fa-facebook-f",
          link: "A-Link",
        },
        {
          icon: "fa-brands fa-twitter",
          link: "A-Link",
        },
        {
          icon: "fa-brands fa-github",
          link: "A-Link",
        },
        {
          icon: "fa-brands fa-instagram",
          link: "A-Link",
        }
        
      ],
    //   FOOTER
    footerMenu: [
        {
          title: "Menu",
          content: [ 
            {
              item:"About Us",
             links: "Link-A",
            },
            { 
              item:"Theme",
              links:"Link-B",
            },
            {
              item: "Features",
              links: "link-C"
            },
            {
              item: "Pricing",
              links: "link-D"
            },
            {
              item: "Blog",
              links: "link-E"
            },
          ]
        },
        {
          title: "About Us",
          content: [ 
            {
              item:"About Sofbox",
             links: "Link-F",
            },
            { 
              item:"RoadMap",
              links:"Link-G",
            },
            {
              item: "How it works",
              links: "link-H"
            },
            {
              item: "Team",
              links: "link-I"
            },
            {
              item: "News",
              links: "link-J"
            },
          ]
        },
        {
          title: "Menu",
          content: [ 
            {
              item:"About Us",
             links: "Link-A",
            },
            { 
              item:"Theme",
              links:"Link-B",
            },
            {
              item: "Features",
              links: "link-C"
            },
            {
              item: "Pricing",
              links: "link-D"
            },
            {
              item: "Blog",
              links: "link-E"
            },
          ]
        },
      ] 
})