import emoji from 'react-easy-emoji';
import {
  EducationType,
  MemberType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  KeyFeatureType,
  Family,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Solana Education',
  title: "Hello, I'm Solana Education",
  description:
    "Please bring future technology into training",
  resumeLink:
    'https://solana-education.vercel.app/posts',
};

export const openSource = {
  githubUserName: 'minhhaufpt',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://solana-education.vercel.app',
  github: 'https://github.com/mhaucoder',
  instagram: 'https://www.instagram.com/haunguyen.vn.2k3/',
  facebook: 'https://www.facebook.com/profile.php?id=100037362923065',
  linkedin: '',
  twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: 'What technology do I have?',
  subTitle: '',
  data: [
    {
      title: 'Information Security',
      lottieAnimationFile: '/lottie/AI/security.json',
      skills: [
        emoji('⚡ Advanced technology'),
        emoji('⚡ Information is absolutely confidential'),
        emoji('⚡ Do not provide any information to third parties'),
      ],
      softwareSkills: [
        {
          skillName: 'Security',
          iconifyTag: 'icon-park:message-security',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'AI',
          iconifyTag: 'eos-icons:ai',
        },
      ],
    },
    {
      title: 'Platform AI',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Smart data processing with ChatGPT'),
      ],
      softwareSkills: [
        {
          skillName: 'ChatGPT',
          iconifyTag: 'ri:openai-fill',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Solana Platform'),
        emoji('⚡ Payment with CandyPay'),
        emoji('⚡ Payment is transparent, fast, safe'),
      ],
      softwareSkills: [
        {
          skillName: 'Solana',
          iconifyTag: 'formkit:solana',
        },
        {
          skillName: 'Metamask',
          iconifyTag: 'logos:metamask-icon',
        },
        {
          skillName: 'Security',
          iconifyTag: 'icon-park:blockchain',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Exactly', 
    progressPercentage: '80', 
  },
  {
    Stack: 'Pretty',
    progressPercentage: '70',
  },
  {
    Stack: 'Individual',
    progressPercentage: '90',
  },
];


export const KeyFeatureInfo: KeyFeatureType[] = [
  {
    title: 'Automatic Avatar Creation',
    desc: '',
    descBullets: [
      'Just provide a brief description of your character or scene, and AvatarAI will craft a unique avatar based on it.',
    ],
  },
  {
    title: 'Customization',
    desc: '',
    descBullets: [
      'You can customize avatars by changing colors, backgrounds, or other features to reflect your personality.',
    ],
  },
];

export const member: MemberType[] = [
   {
    role: 'Full-stack Developer',
    name: 'PS24488 - Nguyễn Minh Hậu',
    avatar: '/img/icons/common/nguyenminhhau.png',
    date: '09/2023',
    desc: '',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: '',
    feedback:
      '',
  },
];



// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Solana Education',
  description:
    'Internship Project',
  author: 'Nguyễn Minh Hậu',
  image: 'https://avatars.githubusercontent.com/u/91709592?s=96&v=4',
  url: 'https://solana-ai-avatar.vercel.app',
  keywords: [
    'Solana',
    'AI',
    'Education',
    'Solana Education',
  ],
};
