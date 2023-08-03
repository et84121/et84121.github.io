export default defineAppConfig({
  alpine: {
    title: 'BunnyBit Blog',
    description: '你幫我~我邦尼~',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'BunnyBit' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'bunnybit0121',
      instagram: 'bunnybit0121',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/bunnybit/'
      },
      github: 'et84121',
      'medium-blog': {
        icon: 'uil:medium-m',
        label: 'Medium',
        href: 'https://medium.com/@bunnybit'
      },
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
