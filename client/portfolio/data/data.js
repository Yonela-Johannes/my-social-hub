import logo from '../img/AlphaBlack.png'
import logoLight from '../img/alphagreen.png'
import soiree from '../img/soiree.png'
import jobs from '../img/jobs.svg'
import mxye from '../img/Mxye.svg'

export const projects = [
  {
    key: 0,
    name: "Nomi",
    sub_v_name: "",
    description: "Nomi is a revolutionary platform empowering South African small businesses with their own websites, offering easy-to-use admin panels for managing content, sharing updates, and connecting with their audience, all in one place. It cuts through the noise of traditional social media, providing a genuine and authentic space for individuals to showcase their talents, sell goods, offer services, and build meaningful connections.",
    about: ["✦ PostgreSql: Implemented the app's PostgreSql schema, a high-performance, open-source relational database management system, optimized for performance and flexibility",
        "✦ CSS: Used CSS to style the app's layout and make it visually appealing and easy to use.", "✦ Ruby on Rails: Developing the app using Ruby on Rails, two powerful and versatile programming languages that helped to make the app fast, efficient, and responsive.",
        "✦ JavaScript: added interactivity and dynamic features to the app, making it more engaging and user-friendly.",
        "✦ Asana: project management by helping to manage the timeline, ensuring deadlines were met, and collaborating with the team to ensure project goals were achieved.."
      ],
    technologies: ["Vite", "React", "Tailwind CSS", "JavaScript", "NodeJs", "MongoDb"],
    sub_v_web: "",
    web: "https://ornate-shortbread-84fbc1.netlify.app/#/",
    repo: "https://github.com/Yonela-Johannes/nomi",
    images: [],
    logo: logo,
    sub_v_logo: logo,
    barcode: ""
  },
  {
    key: 1,
    name: "Soiree",
    sub_v_name: "MMXIIYE",
    description: "As a collaborative web developer, I had the opportunity to work on an exciting app that aimed to streamline project management and collaboration. The app featured a number of key functionalities, including the ability to manage collaborators, events, and task assignments.",
    about: ["✦ PostgreSql: Implemented the app's PostgreSql schema, a high-performance, open-source relational database management system, optimized for performance and flexibility",
        "✦ CSS: Used CSS to style the app's layout and make it visually appealing and easy to use.", "✦ Ruby on Rails: Developing the app using Ruby on Rails, two powerful and versatile programming languages that helped to make the app fast, efficient, and responsive.",
        "✦ JavaScript: added interactivity and dynamic features to the app, making it more engaging and user-friendly.",
        "✦ Asana: project management by helping to manage the timeline, ensuring deadlines were met, and collaborating with the team to ensure project goals were achieved.."
      ],
    technologies: ["Ruby", "Ruby on Rails", "CSS", "HTML", "JavaScript", "StimulusJs", "Postgresql"],
    sub_v_web: "https://mmxiiye.herokuapp.com/",
    web: "https://www.soiree-app.me/users/sign_in",
    repo: "https://github.com/JessJiggs/soiree",
    images: [],
    logo: soiree,
    sub_v_logo: logo,
    barcode: ""
  },
  {
    key: 2,
    name: "Pxya",
    description: "This e-commerce website was built using Angular, JavaScript, and CSS for the front-end, and Mongoose, MongoDB, ExpressJs, and NodeJs for the back-end. It allows customers to browse products, add them to a cart, and complete purchases securely. The website is designed to provide a user-friendly and efficient shopping experience.",
    about: ["✦ Angular: Utilized the Angular framework for building the front-end of the e-commerce website.",
        "✦ JavaScript: Utilized JavaScript for scripting and programming the website's behavior and functionality.",
        "✦ CSS: Utilized CSS for styling and design of the website.",
        "✦ Mongoose: Used the Mongoose Object Data Modeling (ODM) library to facilitate MongoDB data modeling and schema creation.",
        "✦ MongoDB: Utilized MongoDB as the database for the e-commerce website.",
        "✦ ExpressJs: Used ExpressJs as the server framework for the website.",
        "✦ NodeJs: Used NodeJs as the server-side runtime environment for the website."
      ],
    technologies: ["Angular", "JavaScript", "CSS", "Mongoose", "MongoDB", "ExpressJs", "NodeJs"],
    web: "https://pxya.herokuapp.com/",
    repo: "https://github.com/Yonela-Johannes/pxya",
    images: [],
    logo: logoLight,
    barcode: ""
  },
  {
    key: 3,
    name: "Mxye",
    description: "This music player app uses the Shazam-core Apple API to allow users to search and play music with a sleek, intuitive interface. Built with React, Vite, and Tailwind CSS, the app is fast, responsive, and customizable. The music player functionality includes play/pause, volume control, and track skipping. Async API requests ensure quick song retrieval and playback. This app is a must-have for music lovers looking for an easy and enjoyable listening experience.",
    about: ["✦ React: used the React library to build the user interface and manage the state of the application.",
    "✦ Vite: used the Vite build tool to facilitate fast development and server rendering of the application.",
    "✦ Tailwind CSS: used the Tailwind CSS framework to quickly style and design the application.",
    "✦ API integration: integrated the Shazam-core Apple API to search and retrieve music data for the application.",
    "✦ JavaScript: Music player functionality: created a music player that allowed users to play and pause songs, control volume, and skip between tracks.",
    "✦ Git and GitHub: used Git version control and GitHub to collaborate on the code and store the codebase.",
    "✦ Netlify: used Netlify to deploy the application and make it available for others to use and view."
  ],
  about_native: [
    "✦ React Native: Used to build the user interface and manage the state of the application.",
    "✦ Expo: Used to speed up development and make it easier to build and test the application.",
    "✦ React Navigation: Used to create the navigation between screens in the application.",
    "✦ React Native Video: Used to play videos within the app.",
    "✦ React Native Track Player: Used to play and manage audio files within the app.",
    "✦ Expo AV: Used to access and play audio files from the device's storage.",
    "✦ Git and GitHub: Used Git version control and GitHub to collaborate on the code and store the codebase.",
],
    technologies: ["React", "Vite", "JavaScript", "Tailwind"],
    app_technologies: ["React-Native", "Expo", "TypeScript", "CSS"],
    web: "https://alpha-sounds.netlify.app/",
    repo: "https://https://github.com/Yonela-Johannes/audio-atlas",
    native_repo: "https://github.com/Yonela-Johannes/Mxye",
    images: [],
    logo: logo,
    barcode: mxye
  },
  {
    key: 4,
    name: "0000",
    description: "Job search app built with React-Native, Expo, and CSS. This app allows users to search for job opportunities based on keyword. With a clean and intuitive interface, users can easily browse job listings. Built with React and optimized for mobile using React-Native and Expo, this app is fast, responsive, and cross-platform compatible.",
    about: ["✦ React: used for building the user interface and managing the state of the application.",
    "✦ React-Native: used for building the mobile app version of the job search app.",
    "✦ Expo: used as the build tool to facilitate fast development and deployment of the application to mobile devices.",
    "✦ API integration: integrated the j-search Apple API to search and retrieve music data for the application.",
    "✦ CSS: used for styling and designing the user interface of the application.",
    "✦ Job search API integration: integrated an external job search API to retrieve job listings based on location, keyword, or company.",
  ],
    technologies: [],
    app_technologies: ["React-Native", "Expo", "TypeScript", "CSS"],
    web: "",
    repo: "https://github.com/Yonela-Johannes/react-native-practice",
    images: [],
    logo: logoLight,
    barcode: jobs
  },
];
