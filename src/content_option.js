const logotext = "DDCG";
const meta = {
    title: "Daniel Da Cunha Gomes",
    description: "Je suis Daniel Da Cunha Gomes, Administrateur Réseau Junior et étudiant en Master spécialisé en cloud, sécurité et infrastructure réseau.",
};

const introdata = {
    title: "Je suis Daniel Da Cunha Gomes",
    animated: {
        first: "J'aime relever des défis techniques",
        second: "Je gère des réseaux et des infrastructures",
        third: "Je développe des solutions cloud sécurisées",
    },
    description: "Je suis passionné par l'administration réseau, la cybersécurité et l'innovation technologique. Mon objectif est de toujours apprendre et relever de nouveaux défis.",
    your_img_url: "https://images.unsplash.com/photo-1422668513969-23a470206d18?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Remplace l'URL de l'image par celle de ton choix
};

const dataabout = {
    title: "À propos de moi",
    aboutme: "Je suis un Administrateur Réseau Junior, étudiant en Master 1 en Cloud, Sécurité et Infrastructure. J'ai une solide expérience en administration réseau, gestion de serveurs Windows/Linux et cybersécurité. Je suis passionné par les défis techniques et l'innovation.",
};

const worktimeline = [
    {
        jobtitle: "Alternant Administrateur Réseau",
        where: "AEF Info",
        date: "2024/2026",
    },
    {
        jobtitle: "Alternant Administrateur Réseau",
        where: "Ynov Paris",
        date: "2023/2024",
    },
    {
        jobtitle: "Alternant Support Informatique",
        where: "Ynov Campus",
        date: "2023/2024",
    },
    {
        jobtitle: "Intérimaire Cybersécurité",
        where: "Slovénie",
        date: "2023",
    },
    {
        jobtitle: "Stage Administration Réseau",
        where: "OTHUA",
        date: "2023",
    },
];

// const skills = [
//     {
//         name: "Windows/Linux Server",
//         value: 85,
//     },
//     {
//         name: "Cybersécurité",
//         value: 70,
//     },
//     {
//         name: "Cisco",
//         value: 85,
//     },
//     {
//         name: "Azure",
//         value: 75,
//     },
//     {
//         name: "AWS",
//         value: 75,
//     },
// ];

const services = [
    {
        title: "Administration Réseau",
        description: "Gestion des infrastructures réseau, configuration de VLANs, routage, firewalling et sécurité.",
    },
    {
        title: "Support Informatique",
        description: "Assistance technique, dépannage matériel, gestion de tickets et maintenance des équipements informatiques.",
    },
    {
        title: "Cybersécurité",
        description: "Sécurisation des réseaux et systèmes, mise en place de solutions de cybersécurité et segmentation réseau.",
    },
];

const dataportfolio = [
    {
        img: "https://images.pexels.com/photos/4508748/pexels-photo-4508748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Gestion de réseaux et sécurité informatique : Mise en place de réseaux sécurisés et de pare-feu avancés.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/4818711/pexels-photo-4818711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Administration de serveurs et gestion d'infrastructure : Gestion de serveurs dédiés, optimisation des performances des systèmes.",
        link: "#",
    },
    {
        img: "https://www.computerland.fr/wp-content/uploads/2024/05/cloud.jpeg", 
        description: "Solutions cloud et services sécurisés : Mise en place de services cloud sécurisés avec AWS, Azure et GCP.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/2588757/pexels-photo-2588757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Dépannage et réparation de matériel informatique : Diagnostic et réparation de pannes matérielles, remplacements de composants.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Virtualisation et gestion des ressources : Utilisation de VMware et Hyper-V pour la gestion et l'optimisation des ressources serveurs.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Analyse et prévention des cybermenaces : Surveillance des vulnérabilités et mise en place de solutions pour protéger les données sensibles.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Sécurisation des réseaux d'entreprise : Mise en place de VPN et d'outils de sécurité pour protéger les échanges internes et externes.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Optimisation des performances systèmes : Analyse des serveurs pour améliorer la vitesse, la sécurité et la fiabilité des applications.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Sécurisation des réseaux d'entreprise : Mise en place de VPN et d'outils de sécurité pour protéger les échanges internes et externes.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Optimisation des performances systèmes : Analyse des serveurs pour améliorer la vitesse, la sécurité et la fiabilité des applications.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Sécurisation des réseaux d'entreprise : Mise en place de VPN et d'outils de sécurité pour protéger les échanges internes et externes.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Optimisation des performances systèmes : Analyse des serveurs pour améliorer la vitesse, la sécurité et la fiabilité des applications.",
        link: "#",
    },{
        img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Sécurisation des réseaux d'entreprise : Mise en place de VPN et d'outils de sécurité pour protéger les échanges internes et externes.",
        link: "#",
    },
    {
        img: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
        description: "Optimisation des performances systèmes : Analyse des serveurs pour améliorer la vitesse, la sécurité et la fiabilité des applications.",
        link: "#",
    },
];



const contactConfig = {
    YOUR_EMAIL: "dacunhagomesdaniel@gmail.com",
    YOUR_FONE: "(+33)7 89 00 32 20",
    description: "Je suis disponible pour discuter de tout projet réseau, cloud ou cybersécurité. N'hésitez pas à me contacter.",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Daniel-Da-Cunha-Gomes",
    linkedin: "https://www.linkedin.com/in/daniel-da-cunha-gomes-40934526a/",
};
const certifications = [
    {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        description: "Certification Azure couvrant les concepts de base du cloud, les services cloud Microsoft et la gestion des solutions cloud.",
        link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/"
    },
    {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    description: "Certification AWS d’entrée de gamme validant la compréhension des concepts fondamentaux du cloud, des services AWS, de la sécurité, de la facturation, et du support.",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
},
];

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    certifications,
};
