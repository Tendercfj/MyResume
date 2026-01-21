type SkillItem = {
  title: string;
  description: string;
  backgroundImage: string;
};

type ExperienceItem = {
  company: string;
  job: string;
  reap: string;
  beginTime: string;
  endTime: string;
};

type ProjectItem = {
  beginTime?: string;
  endTime?: string;
  proName: string;
  period?: string;
  describe?: string;
  science?: string[];
};

type ProjectGroup = {
  name: string;
  list: ProjectItem[];
};

export type ResumeData = {
  aboutme: string[];
  skillText: string;
  skill: string[];
  skillItem: SkillItem[];
  experienceText: string;
  experience: ExperienceItem[];
  project: ProjectGroup[];
  touch: string[];
  inf: string[];
  phone: string[];
};

const data: ResumeData = {
  aboutme: [
    "我是来自杭州师范大学软件工程的硕士生，曾在杭州宇神五号（ATLASV）实习半年。",
    "有着坚实的前端开发基础，并且一直保持对新技术的学习热情。熟练使用HTML5、CSS3以及JavaScript；对流行的前端开发框架，比如vue有实际开发项目；能熟练使用前端开发工具，比如Postman、TailwindCSS和scss等等；自学习了HTML,CSS3,Javascript,Vue与React，但更加喜欢轻巧、高性能、可组件化的MVVM框架Vue.js，并在实际的开发项目中使用。",
    "乐于学习先进前沿的技术，活跃在GitHub上，学习过不少开源的项目，并且总结过一些学习技巧。希望自己的技术能越来越好。",
    "爱读书，爱听歌，爱旅游，爱猫咪，爱烹饪。代码不是生活的全部。",
  ],

  skillText:
    "前端开发需要一个持续和长期的学习，需要在各种领域都有充足的知识储备，需要对新技术的学习保持热情。前端开发工程师技术栈中最重要的就是原生JavaScript,并长时间在网上攻读此类的博客等,最近刚开始学习Typescript",
  skill: [
    "HTML5",
    "CSS3",
    "JavaSript",
    "Vue.js",
    "React",
    "Less/scss",
    "TailwindCSS",
    "Typescript",
    "ECMAScript 6",
  ],
  skillItem: [
    {
      title: "HTML+CSS+JS",
      description:
        "熟悉HTML5、CSS3、JavaScript（ES6）和TypeScript，具备扎实的前端开发基础。",
      backgroundImage: 'url("../../../assets/three.webp")',
    },
    {
      title: "VUE",
      description:
        "熟悉Vue3.js框架，熟悉组件化开发，熟悉VueRouter路由和Pinia状态管理库，有相关VUE实际项目经验。",
      backgroundImage: 'url("../../../assets/vue.png")',
    },
    {
      title: "REACT",
      description:
        "了解React框架，了解React Hooks组件化开发，了解react-router路由和redux状态管理库，有做过相关react小项目。",
      backgroundImage: 'url("../../../assets/react.svg")',
    },
    {
      title: "SKILL",
      description:
        "能使用git进行版本控制和团队协作。熟练使用Axios进行前后端数据交互，熟悉ElementUI、AntDesign等组件库的使用，熟悉TailwindCSS的使用。",
      backgroundImage: 'url("../../../assets/git.png")',
    },
  ],

  experienceText:
    "2023年6月，毕业于铜陵学院，由于就业的压力和学历的限制选择了考研，2023年9月成功上岸杭州师范大学软件工程专业的研究生，2026年1月毕业。在此期间曾在杭州的宇神五号的研发部实习前端岗位。在实习期间我真正意义上接触到了企业级的项目，也学会了团队协作，并且也学习了许多前端的技术。我学习的途径主要是在网上找一些视频从基础的学期，并且慢慢跟着敲代码，刚开始没有经验的确很难学会，但是我们有放弃，坚持了半年左右发现自己也是可以学会的，并且开始自己模仿别人网站进行练习，以提升提升自己的前端开发技能和经验。",
  experience: [
    {
      company: "宇神五号",
      job: "web前端实习生",
      reap: "在这家公司主要负责该公司自营的产品，有官网，管理平台，PWA，项目的埋点，相关bug的修复等等，",
      beginTime: "2024-9",
      endTime: "2025-2",
    },
    // {
    //   company: "广州市本该科技有限责任公司",
    //   job: "web前端工程师",
    //   reap: "这段时间是自己前端开发技能得到不少提高的阶段。自己是公司的小白前端前端，公司的官网、日常的运营页面、新项目的开发我都有参与学习。工作非常饱和，但是在闲暇时候抽空学了很多新的框架和库，对Vue和React有了一定的了解，而选择了轻巧、高性能、可组件化的Vue.js作为主攻的MVVM框架，开始涉及WebPack，ECMAScript6，Node.js(Express)等的学习，熟练使用npm、yarn等工具。",
    //   beginTime: "2017-07",
    //   endTime: "2019-09",
    // },
  ],

  project: [
    {
      name: "杭州宇神五号",
      list: [
        {
          beginTime: "2024-9",
          endTime: "2024-10",
          proName: "PWA应用（Vue）",
          period: "1个月",
          describe:
            "这是一款是一款根据用户喜好，推荐ins平台热门视频、音频和图片并提供用户下载的app",
          science: [
            "运用vue3+TS进行的开发",
            "运用pinia进行组件数据的传递存储",
            "运用公司内部自研的组件库进行开发",
            "运用IndexdDB进行相关数据浏览器存储",
            "对该项目进行了全面的埋点了解用户行为，为后期迭代更新进行研究",
          ],
        },
        {
          beginTime: "2024.10",
          endTime: "2024.12",
          proName: "内部统一平台乙女部分(React)",
          period: "2个月+迭代至今",
          describe:
            "这款项目，是一款采用微前端架构(qiankun)，用React框架编写的一个方便乙女项目操作的平台",
          science: [
            "该项目是本人独立开发",
            "该项目模块有:",
            "  -文件上传文件夹形式可视化",
            "  -文件资源搜索",
            "  -乙女剧本内容详情等配置",
            "  -日志记录", ,
            "运用到的技术 React，react-router，react-redux，TS和antd库 ", ,
          ],
        },
        {
          beginTime: "2024.12",
          endTime: "2024.12",
          proName: "线下支付(Solid.js)",
          period: "1个月+迭代至今",
          describe:
              "这款项目，是一款采用Solid.js框架开发的支持线下支付的页面",
          science: [
            "该项目是本人独立开发",
            "该项目模块有:",
            "  -谷歌登录获取商品列表",
            "  -跳转Insaver产品下载地址",
            "  -Message提示用户操作行为",
            "  -购买支付跳转",
            "  -多语言支持切换",
            "运用到的技术  solid.js，tailwindcss，i18n-next",
          ],
        },

        // {
        //   beginTime: "2019.05",
        //   endTime: "2019.07",
        //   proName: "大语文学习平台(Vue)",
        //   period: "2个月+后期慢慢维护更新迭代",
        //   describe:
        //     "本项目是一个基于在疫情期间，很多学生不能面授从而开发的一款针对小学生群体的k12教育平台系统",
        //   science: [
        //     "运用了scss进行预编译提高开发效率",
        //     "用到了vue脚手架，typescrept 以及element ui开发的一款平台",
        //     "该项目分为2个部分，一部分是家长端，一部分是学生端，家长端涉及到购买，听，试听，等，学生端涉及到，听，读，写，测试等",
        //     "运用vuex进行全局的状态管理",
        //     "运用了ES6规范等",
        //     "运用了路由跳转等技术",
        //     "对该项目进行了全面的埋点了解用户行为，为后期迭代更新进行研究",
        //   ],
        // },
        // {
        //   beginTime: "2019.02",
        //   endTime: "2019.04",
        //   proName: "知鸦appH5嵌入混合开发(vue)",
        //   period: "2个月+后期慢慢维护更新迭代",
        //   describe:
        //     "该项目是一个嵌入到app中的一个模块，该模块包含了投票，打卡，测试等相关的动能",
        //   science: [
        //     "运用到了vue全家桶",
        //     "运用了vant ui，实现了嵌入app的需求",
        //     "运用到了window.webkit.messageHandlers.toDengLuView.postMessage()的方法与ios进行交互;",
        //     "运用到了Android()的方法与安卓进行交互",
        //     "该项目，包含了投票，打卡，测试，日历等相关功能",
        //     "对该项目进行了全面的埋点了解用户行为，为后期迭代更新进行研究",
        //   ],
        // },
        // {
        //   beginTime: "2019.11",
        //   endTime: "2020.01",
        //   proName: "知鸦官网(Vue)",
        //   period: "2个月+后期慢慢维护更新迭代",
        //   describe:
        //     "该项目是一款介绍该公司的pc端官网，后期因需求，迭代到适配移动端，以及实现了2端商城购买的功能",
        //   science: [
        //     "pc端:vue全家桶，element ui 和typescript ，scss",
        //     "移动端:vue全家桶，vant ui 和 typescript ，scss",
        //     "对该项目进行了全面的埋点了解用户行为，为后期迭代更新进行研究",
        //   ],
        // },
      ],
    },
    // {
    //   name: "广州市本该科技有限责任公司",
    //   list: [
    //     {
    //       beginTime: "2019-03",
    //       endTime: "2019-08",
    //       proName: "芝麻加油站(Vue)",
    //       period: "2个月+更新迭代到离职",
    //       describe:
    //         "芝麻加油站是主做汽车加油的程序，通过获取用户的定位并且通过合作加油站自行进行加油服务。",
    //       science: [
    //         "运用vue的写法进行开发，提高了开发的效率",
    //         "运用其自带的api封装好的接口用原生js调取，进行开发",
    //         "运用vuex进行组件数据的传递存储",
    //         "运用axios,并且进行二次封装,进行与后端的数据交互，从而渲染页面",
    //         "模块化开发思想,封装公共组件，通过props传值提高复用率",
    //       ],
    //       obligation:
    //         "我在该项目中负责前端的工作,包括静态的制作,网络请求与后台的交互,处理api接口实现交互效果及后期的维护等。",
    //     },
    //     {
    //       beginTime: "2018.09",
    //       endTime: "2018.12",
    //       proName: "公司商品后台管理系统(Vue)",
    //       period: "3个月",
    //       describe:
    //         "新增了业务,要弄一个后台管理系统，把之前的后台管理系统彻底重新整合起来，是一个集商城,加油,违章,油耗,用户信息,商家信息等的后台系统",
    //       science: [
    //         "运用vue-cli脚手架进行的项目开发",
    //         "运用vue-router进行路由的跳转,并且使用路由懒加载,路由守卫等进行优化,提高用户的体验",
    //         "运用vuex管理全局的状态，进行组间之间的通信",
    //         "运用axios,进行与后端的数据骄交互",
    //         "运用了网上的element UI提高开发效率等",
    //         "运用到了token技术,加强安全性,实现功能预渲染",
    //       ],
    //       obligation:
    //         "该项目是团队开发项目，负责公司的后台管理页面,我在其中负责的是路由的设置，以及用户信息，优惠卷，商品页面等界面的开发",
    //     },
    //     {
    //       beginTime: "2018.06",
    //       endTime: "2018.08",
    //       proName: "查违章(Vue)",
    //       period: "1个月+后期慢慢维护更新迭代",
    //       describe:
    //         "基于之前新增加的模块,查违章,用户可以自行通过手机查询进行车辆的违章知晓",
    //       science: [
    //         "运用vue进行的单页面开发",
    //         "运用axios通过监听输入框信息然后传递后台查询信息渲染的技术",
    //         "运用div+css进行静态页面的开发",
    //       ],
    //       obligation:
    //         "该项目是个人开发项目,负责所有页面,该项目,我认为最麻烦的在于键盘的制作,应产品经理要求,不能用自带键盘,不能用input,所以在这里浪费了些许时间",
    //     },
    //     {
    //       beginTime: "2018.03",
    //       endTime: "2018.06",
    //       proName: "芝麻加油商城(Vue)",
    //       period: "3个月+后期慢慢维护更新迭代",
    //       describe: "该项目是对自己公司商品的售卖进行手机端的开发",
    //       science: [
    //         "运用vue进行项目开发",
    //         "运用了scss进行预编译提高开发效率",
    //         "运用了有赞集团的vantUI提高页面效果，提高开发效率，提高用户体验",
    //         "运用vuex进行全局的状态管理",
    //         "运用了ES6规范等",
    //         "运用了路由跳转等技术",
    //       ],
    //       obligation:
    //         "该项目是团队开发项目,负责首页,列表页,详情页，购物车等页面",
    //     },
    //     {
    //       beginTime: "2017.09",
    //       endTime: "2017.12",
    //       proName: "芝麻加油官网(PC+jQuery)",
    //       period: "3个月",
    //       describe: "该项目是对公司官网的制作",
    //       science: [
    //         "运用jQuery进行项目开发",
    //         "运用了bootstrap提高开发效率",
    //         "运用了Ajax的封装，进行与后端的数据交互",
    //         "运用了ES6规范,css3等技术",
    //       ],
    //       obligation: "该项目是团队开发项目,负责首页,成为车主页面等页面的开发",
    //     },
    //   ],
    // },
  ],

  touch: [
    "作为一个真正的程序员",
    "首先应该尊重编程",
    "热爱你所写下的程序",
    "他是你的伙伴",
    "而不是工具",
  ],

  inf: ["email: 1805150751@qq.com"],
  phone: ["phone: 17384340081"],
};

export default data;
