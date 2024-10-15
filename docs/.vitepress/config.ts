export default {
  title: "RailWise",
  description: "An awesome docs template built by me",
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Adocs",
    search: {
      provider: "local",
    },
    // Navbar Link
    nav: [
      
      { text: "Guide", link: "/guide" },
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      
      
      
    ],
    
    
    // Sidebar
    sidebar: [
      {
        text: "Introduction",
        collapsible: false,
        items: [
          { text: "Overview", link: "/overview" },
          
        ],
      },
      {
        text: "Frequently Asked Questions",
        collapsible: false,
        items: [
          { text: "FAQ", link: "/faq " },
          
        ],
      },
      
    ],
    // you can disable the previous and next page here
    docFooter: {
      prev: true,
      next: true,
    },
    
    
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
