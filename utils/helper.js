import { API_FETCH, LOCAL_STORAGE_TABS, PARAMS_TABS, SLUG_PRACTICE } from "./constants";

export const HOME_PAGE_BUTTONS = [
    {
    link:PARAMS_TABS,
    linkText:"Params Tabs" 
    },
    {
    link:API_FETCH,
    linkText:"Api Fetch" 
    },
    {
    link:LOCAL_STORAGE_TABS,
    linkText:"local storage tabs" 
    },
    {
    link:SLUG_PRACTICE,
    linkText:"slug" 
    },
]

export const SIDEBAR_LINKS = [
    {
      to: "/apifetch",
      link: "Api Fetch",
    },
    {
      to: "/paramstabs",
      link: "Params Tabs",
    },
    {
      to: "/localstoragetabs",
      link: "Local Storage Tabs",
    },
  ];
  export const TAB_DATA = [
    {
      id: "1",
      tabName: "tab one",
      tabContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, id nesciunt. Sed optio fugit sequi iste quia ipsa facere ipsam?",
    },
    {
      id: "2",
      tabName: "tab two",
      tabContent:
        "nesciunt. Sed optio fugit sequi iste quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, id  ipsa facere ipsam?",
    },
    {
      id: "3",
      tabName: "tab three",
      tabContent:
        "adipisicing elit. Ipsa, id nesciunt. Sed optio fugit Lorem ipsum dolor sit amet consectetur  sequi iste quia ipsa facere ipsam?",
    },
    {
      id: "4",
      tabName: "tab four",
      tabContent:
        "sit amet consectetur adipisicing elit. Lorem ipsum dolor Ipsa, id nesciunt. Sed optio fugit sequi iste quia ipsa facere ipsam?",
    },
  ];
  export const LOCAL_TAB_DATA = [
    {
      tab: "London",
      contentHeading: "London",
      contentPara: "London is the capital city of England.",
    },
    {
      tab: "Paris",
      contentHeading: "Paris",
      contentPara: "Paris is the capital of France.",
    },
    {
      tab: "Tokyo",
      contentHeading: "Tokyo",
      contentPara: "Tokyo is the capital of Japan.",
    },
  ];
  export const BLOG_POSTS_LIST = [
    {
      category: "blog",
      title: "Tips for Aspiring Game Developers",
      image:"/assets/images/elevating-game.webp",
      date: "July 5, 2024",
      admin: "Admin",
      comments: 2,
      description:
        "In this post, we share valuable tips and insights for aspiring game developers looking to create their own games on Roblox. From concept development to coding, we cover it all.",
      brief: [
        "Lorem ipsum dolor sit amet consectetur. Lorem aenean dui risus eget tincidunt aliquet nunc egestas tincidunt. Pellentesque arcu urna non amet. Aliquam vitae a imperdiet nibh felis quis eu lacus elit. Est tempor purus posuere aliquet consectetur lorem dolor arcu commodo.",
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. Elit egestas vel ut lobortis imperdiet ac amet. <a href="#">Pharetra urna augue commodo fermentum</a> est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium. Auctor in arcu tristique tincidunt lectus pretium cras integer. Vitae amet morbi et libero felis in. Integer sit lacus arcu scelerisque. Varius interdum eu mattis auctor. At amet sed ut viverra pulvinar aenean a. Arcu id proin eu ac gravida. Placerat volutpat bibendum feugiat libero magna quam quisque risus tortor.`,
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. <a href="#">Elit egestas vel ut lobortis imperdiet ac amet.</a> Pharetra urna augue commodo fermentum est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium.`,
      ],
    },
    {
      category: "blog",
      image:"/assets/images/game-testing.webp",
      title: "Developing 'Aqua Adventure'",
      date: "June 20, 2024",
      admin: "Admin",
      comments: 2,
      description:
        "Discover the creative process and challenges faced by our team while developing 'Aqua Adventure,' a unique underwater adventure game.",
      brief: [
        "Lorem ipsum dolor sit amet consectetur. Lorem aenean dui risus eget tincidunt aliquet nunc egestas tincidunt. Pellentesque arcu urna non amet. Aliquam vitae a imperdiet nibh felis quis eu lacus elit. Est tempor purus posuere aliquet consectetur lorem dolor arcu commodo.",
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. Elit egestas vel ut lobortis imperdiet ac amet. <a href="#">Pharetra urna augue commodo fermentum</a> est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium. Auctor in arcu tristique tincidunt lectus pretium cras integer. Vitae amet morbi et libero felis in. Integer sit lacus arcu scelerisque. Varius interdum eu mattis auctor. At amet sed ut viverra pulvinar aenean a. Arcu id proin eu ac gravida. Placerat volutpat bibendum feugiat libero magna quam quisque risus tortor.`,
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. <a href="#">Elit egestas vel ut lobortis imperdiet ac amet.</a> Pharetra urna augue commodo fermentum est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium.`,
      ],
    },
    {
      category: "blog",
      image:"/assets/images/new-game.webp",
      title: "The Future of Gaming on Roblox",
      date: "May 10, 2024",
      admin: "Admin",
      comments: 2,
      description:
        "Explore the future of gaming on Roblox with our studio's vision and upcoming projects. We discuss trends, new technologies, and how we plan to stay ahead in the ever-evolving gaming industry.",
      brief: [
        "Lorem ipsum dolor sit amet consectetur. Lorem aenean dui risus eget tincidunt aliquet nunc egestas tincidunt. Pellentesque arcu urna non amet. Aliquam vitae a imperdiet nibh felis quis eu lacus elit. Est tempor purus posuere aliquet consectetur lorem dolor arcu commodo.",
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. Elit egestas vel ut lobortis imperdiet ac amet. <a href="#">Pharetra urna augue commodo fermentum</a> est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium. Auctor in arcu tristique tincidunt lectus pretium cras integer. Vitae amet morbi et libero felis in. Integer sit lacus arcu scelerisque. Varius interdum eu mattis auctor. At amet sed ut viverra pulvinar aenean a. Arcu id proin eu ac gravida. Placerat volutpat bibendum feugiat libero magna quam quisque risus tortor.`,
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. <a href="#">Elit egestas vel ut lobortis imperdiet ac amet.</a> Pharetra urna augue commodo fermentum est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium.`,
      ],
    },
    {
      category: "blog",
      image:"/assets/images/precision-game.webp",
      title: "Partnership with OPS Studios",
      date: "March 30, 2024",
      admin: "Admin",
      comments: 2,
      description:
        "1v2 Studio has partnered with XYZ Studios to co-develop a series of educational games on Roblox, aiming to make learning fun and interactive for kids.",
      brief: [
        "Lorem ipsum dolor sit amet consectetur. Lorem aenean dui risus eget tincidunt aliquet nunc egestas tincidunt. Pellentesque arcu urna non amet. Aliquam vitae a imperdiet nibh felis quis eu lacus elit. Est tempor purus posuere aliquet consectetur lorem dolor arcu commodo.",
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. Elit egestas vel ut lobortis imperdiet ac amet. <a href="#">Pharetra urna augue commodo fermentum</a> est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium. Auctor in arcu tristique tincidunt lectus pretium cras integer. Vitae amet morbi et libero felis in. Integer sit lacus arcu scelerisque. Varius interdum eu mattis auctor. At amet sed ut viverra pulvinar aenean a. Arcu id proin eu ac gravida. Placerat volutpat bibendum feugiat libero magna quam quisque risus tortor.`,
  
        `Lorem ipsum dolor sit amet consectetur. Tincidunt sed sed sit eget rhoncus quis placerat viverra. Volutpat massa scelerisque adipiscing volutpat et lacus suspendisse. Aliquam erat suspendisse ligula odio elit proin ipsum et ornare. <a href="#">Elit egestas vel ut lobortis imperdiet ac amet.</a> Pharetra urna augue commodo fermentum est eu sed pellentesque. Arcu venenatis proin commodo nunc pretium.`,
      ],
    },
  ];