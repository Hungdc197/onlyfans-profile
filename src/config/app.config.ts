import {FiCloud, FiCode, FiCpu, FiFacebook, FiGithub} from 'react-icons/fi';

export const AppConfig = {
  name: "Dinh Cong Hung",
  username: "Hrose", // should be GitHub username
  avatar: 'https://imgur.com/E2V7wpQ',
  verticalAvatar: 'https://imgur.com/qjIxLDp',
  introduction: `10+ years experience in software development.\n` +
    `Working in scalable and high-performance technology systems.\n` +
    `Web Development, Mobile Development, DevOps & more.`,
  subscriptions: [{
    name: "Hire Me",
    price: "At any price",
    preferred: true,
  }, {
    name: "Freelance",
    price: "From $100"
  }],
  socialLinks: [{
    name: 'GitHub',
    url: 'https://github.com/monokaijs',
    icon: FiGithub
  }, {
    name: 'Facebook',
    url: 'https://facebook.com/delimister',
    icon: FiFacebook
  }],
  expertises: [{
    name: 'Web Development',
    icon: FiCode,
    description: 'React, Next.js, Node.js, Express, Nest.js, Golang, PHP, Python, SQL, MongoDB, GraphQL, REST API, C#, Rust etc.'
  }, {
    name: 'Infrastructure',
    icon: FiCloud,
    description: 'AWS, GCP, Azure, Kubernetes, Docker, etc.'
  }, {
    name: 'IoT Development',
    icon: FiCpu,
    description: 'ESP32, ESP8266, Arduino, etc.'
  }],
  analytics: {
    gaId: 'G-NF39CSC1T1',
  },
  giscusEnabled: true,
}
