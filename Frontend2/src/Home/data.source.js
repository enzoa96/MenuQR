import React from 'react';
export const Nav20DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children:
      'https://gw.alipayobjects.com/os/s/prod/seeconf/9b458a789d9a000312899b42a7542b9c.svg',
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: '当前页面 ID 地址，参考如上',
        children: '导航名称',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  Menu: {
    children: [
      {
        name: 'Banner3_0',
        to: 'Banner3_0',
        children: '首页',
        className: 'active menu-item',
      },
      {
        name: 'Content8_0',
        to: 'Content8_0',
        children: '特邀嘉宾',
        className: 'menu-item',
      },
      {
        name: 'Content9_0',
        to: 'Content9_0',
        children: '会议日程',
        className: 'menu-item',
      },
      {
        name: 'Content10_0',
        to: 'Content10_0',
        children: '大会地址',
        className: 'menu-item',
      },
      {
        name: 'Content11_0',
        to: 'Content11_0',
        children: '展台展示',
        className: 'menu-item',
      },
      {
        name: 'Content12_0',
        to: 'Content12_0',
        children: '特别鸣谢',
        className: 'menu-item',
      },
    ],
  },
};
export const Pricing10DataSource = {
  wrapper: { className: 'home-page-wrapper pricing1-wrapper' },
  page: { className: 'home-page pricing1' },
  OverPack: { playScale: 0.3, className: 'pricing1-content-wrapper' },
  titleWrapper: {
    className: 'pricing1-title-wrapper',
    children: [
      { name: 'title', children: '价目表', className: 'pricing1-title-h1' },
    ],
  },
  block: {
    className: 'pricing1-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box ' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Free' },
          money: { className: 'pricing1-money', children: '¥0' },
          content: {
            className: 'pricing1-content',
            children: (
              <span>
                140-500Mbps<br /> 140 GB-50TB（含）<br /> 14500GB流量包<br />{' '}
                14国内按峰值宽带账单<br /> 14弹性计算<br /> 14云服务器 ECS{' '}
              </span>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '免费试用',
              },
            },
          },
        },
      },
      {
        name: 'block1',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box active' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Starter' },
          money: { className: 'pricing1-money', children: '¥199' },
          content: {
            className: 'pricing1-content',
            children: (
              <span>
                14500-5Gbps<br />1410 GB-50TB（含）<br />141TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />云服务器
                ECS
              </span>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
      {
        name: 'block2',
        className: 'pricing1-block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'pricing1-block-box ' },
          topWrapper: { className: 'pricing1-top-wrapper' },
          name: { className: 'pricing1-name', children: 'Pro' },
          money: { className: 'pricing1-money', children: '¥999' },
          content: {
            className: 'pricing1-content',
            children: (
              <span>
                14大于5Gbps<br />1450 GB-100TB（含）<br />145TB流量包<br />14国内按峰值宽带账单<br />14弹性计算<br />14云服务器
                ECS
              </span>
            ),
          },
          line: { className: 'pricing1-line' },
          buttonWrapper: {
            className: 'pricing1-button-wrapper',
            children: {
              a: {
                className: 'pricing1-button',
                href: '#',
                children: '立即购买',
              },
            },
          },
        },
      },
    ],
  },
};
export const Feature00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式业务接入',
            },
            { name: 'content', children: '支付、结算、核算接入产品效率翻四倍' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式事中风险监控',
            },
            {
              name: 'content',
              children: '在所有需求配置环节事前风险控制和质量控制能力',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '一站式数据运营',
            },
            {
              name: 'content',
              children: '沉淀产品接入效率和运营小二工作效率数据',
            },
          ],
        },
      },
    ],
  },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Seeking Experience & Engineering Conference',
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: '首届蚂蚁金服体验科技大会',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '探索极致用户体验与最佳工程实践探索',
      },
      { name: 'button', className: 'banner3-button', children: '立即报名' },
      {
        name: 'time',
        className: 'banner3-time',
        children: '2018.01.06 / 中国·杭州',
      },
    ],
  },
};
export const Content80DataSource = {
  wrapper: { className: 'home-page-wrapper content8-wrapper' },
  page: { className: 'home-page content8' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特邀嘉宾', className: 'title-h1' },
    ],
  },
  block: {
    className: 'content-wrapper',
    children: [
      {
        name: 'block0',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block1',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block2',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block3',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block4',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block5',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block6',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
      {
        name: 'block7',
        md: 6,
        xs: 24,
        className: 'content8-block-wrapper',
        children: {
          className: 'content8-block',
          img: {
            className: 'content8-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/JahzbVrdHdJlkJjkNsBJ.png',
          },
          title: { className: 'content8-title', children: 'Jack' },
          content: {
            className: 'content8-content',
            children: '公司+职位 信息暂缺',
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '会议日程', className: 'title-h1' },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '开幕致辞' },
          content: { className: 'block-content', children: '' },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: { className: 'block-name', children: '姓名' },
          post: { className: 'block-post', children: '公司 职位' },
          time: { className: 'block-time', children: '09:00 - 10:00' },
          title: { className: 'block-title', children: '演示标题 - XYZ' },
          content: {
            className: 'block-content',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
    ],
  },
};
export const Content100DataSource = {
  wrapper: { className: 'home-page-wrapper content10-wrapper' },
  Content: {
    className: 'icon-wrapper',
    children: {
      icon: {
        className: 'icon',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/zIUVomgdcKEKcnnQdOzw.svg',
        name: '主要图标',
      },
      iconShadow: {
        className: 'icon-shadow',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/WIePwurYppfVvDNASZRN.svg',
        name: '图标影阴',
      },
      url: { children: 'https://gaode.com/place/B0FFH3KPBX', name: '跳转地址' },
      title: { children: '大会地址', name: '弹框标题' },
      content: {
        children: '蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号',
        name: '弹框内容',
      },
    },
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      {
        name: 'content',
        children:
          '特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家',
        className: 'title-content',
      },
      {
        name: 'content2',
        children: '现场问诊，为你答疑解难',
        className: 'title-content',
      },
    ],
  },
  button: {
    className: '',
    children: { a: { className: 'button', href: '#', children: '立即报名' } },
  },
};
export const Content120DataSource = {
  wrapper: { className: 'home-page-wrapper content12-wrapper' },
  page: { className: 'home-page content12' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '特别鸣谢', className: 'title-h1' },
    ],
  },
  block: {
    className: 'img-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg',
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg',
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg',
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg',
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'block-content' },
          img: {
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg',
          },
        },
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/NuuAwJBxewWglRSoNjET.png',
        className: 'copyright-logo',
      },
      {
        name: 'group',
        children: '蚂蚁金服体验科技大会',
        className: 'copyright-group',
      },
      {
        name: 'image2',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/fgGmQUfiUfSBfvsQpfOj.svg',
        className: 'copyright-line',
      },
      {
        name: 'copyright',
        children: 'Copyright © 蚂蚁金融服务集团',
        className: 'copyright-text',
      },
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'weibo',
        href: '#',
        className: 'links-weibo',
        children:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjYgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT53ZWlibzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNCI+CiAgICAgICAgPGcgaWQ9IumhteiEmiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU2LjAwMDAwMCwgLTIxLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxnIGlkPSJ3ZWlibyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTYuMDAwMDAwLCAyMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS4wOTMyNDIyLDkuNDM5OTgwNzIgQzE5LjUwNzk3MjcsOC4zOTk3OTc1OSAxOS41NTA5NTksNy41MDI1NjYyNyAxOS4xMDExMzg3LDYuODYyNTcyMjkgQzE4LjI1Nzk5MjIsNS42NjIzNTkwNCAxNS45NTA2Njk5LDUuNzI2OTAyNDEgMTMuMzA1NzI4NSw2LjgzMDMxMzI1IEMxMy4zMDU3Mjg1LDYuODI4OTQ2OTkgMTIuNDc1MzAyNyw3LjE5MjQ3NDcgMTIuNjg3NTkzNyw2LjUzNTc1NjYzIEMxMy4wOTQ0MDIzLDUuMjMyNTY3NDcgMTMuMDMzMjg3MSw0LjE0MTI1MDYgMTIuNDAwMTIxMSwzLjUxMDg5NjM5IEMxMC45NjU0MjM4LDIuMDgwMTEzMjUgNy4xNDk3NzE0OCwzLjU2NTA2NjI3IDMuODc3MjUsNi44MjQ1NDQ1OCBDMS40MjcwMjkzLDkuMjY2NDkwMzYgMC4wMDQwODc4OTA2MiwxMS44NTQ2NzcxIDAuMDA0MDg3ODkwNjIsMTQuMDkyNzcxMSBDMC4wMDQwODc4OTA2MiwxOC4zNzM1ODMxIDUuNTEyOTkwMjMsMjAuOTc1OTYzOSAxMC45MDI1NTY2LDIwLjk3NTk2MzkgQzE3Ljk2NzIxODgsMjAuOTc1OTYzOSAyMi42NjY4OTY1LDE2Ljg4NTU0MzQgMjIuNjY2ODk2NSwxMy42MzgxODQzIEMyMi42NjY4OTY1LDExLjY3NjE3NzEgMjEuMDA4NTU4NiwxMC41NjI3OTc2IDE5LjUxODM1NzQsMTAuMTAyMDYyNyBDMTkuMTUyNjA1NSw5Ljk5MzExNTY2IDE4LjkwMTU2ODQsOS45MTgzNzU5IDE5LjA5MzIxNjgsOS40Mzk5ODA3MiBMMTkuMDkzMjQyMiw5LjQzOTk4MDcyIFogTTIuNjI0NzU1ODYsMTUuMTE0MTMwMSBDMi4zNDU1NjA1NSwxMi4zMDA5Mzk4IDUuNjA2NTI5Myw5LjY3NzI1NTQyIDkuOTA2MzMwMDgsOS4yNTM4MTQ0NiBDMTQuMjA3MDk1Nyw4LjgyOTU4OTE2IDE3LjkxOTQzMzYsMTAuNzY3MDI4OSAxOC4xOTg2MDM1LDEzLjU3OTQwOTYgQzE4LjQ3NzIxNDgsMTYuMzkzNzEzMyAxNS4yMTc2MTcyLDE5LjAxODE4MTkgMTAuOTE2ODI2MiwxOS40NDE4MjUzIEM2LjYxNjY2OTkyLDE5Ljg2NDMwNDggMi45MDQzMDY2NCwxNy45Mjc4NTE4IDIuNjI0NzU1ODYsMTUuMTE0MTMwMSBaIE0xMS4zNDY3OTEsMTEuNDE4OTE0NSBDOS4zMDAzMzIwMywxMC44ODgwNjk5IDYuOTg3MjIwNywxMS45MDQ0NDQ2IDYuMDk4MzcxMDksMTMuNzAxNDEyIEM1LjE5MzE0NDUzLDE1LjUzMzkyNzcgNi4wNjg0ODYzMywxNy41NjgxOTUyIDguMTM1NzkxMDIsMTguMjMzMzM4NiBDMTAuMjc3NjkzNCwxOC45MjEzNTQyIDEyLjgwMTcyNDYsMTcuODY2NzQ5NCAxMy42Nzk3ODMyLDE1Ljg4ODk3OTUgQzE0LjU0NTI5ODgsMTMuOTU1MjA4NCAxMy40NjQ0MTk5LDExLjk2NDE4MDcgMTEuMzQ2NzkxLDExLjQxODkxNDUgWiBNOS43ODM4OTY0OCwxNi4wOTg5Nzk1IEM5LjM2Nzk5ODA1LDE2Ljc2MDEgOC40NzcyNDQxNCwxNy4wNDk4MjQxIDcuODA2MDY4MzYsMTYuNzQ0NzE2OSBDNy4xNDQ5NDcyNywxNi40NDQ5OTg4IDYuOTUwMDIzNDQsMTUuNjc2NSA3LjM2NjA5OTYxLDE1LjAzMTY5ODggQzcuNzc2OTcwNywxNC4zODk4MDcyIDguNjM3NjYyMTEsMTQuMTAzMzQ3IDkuMzAzODEwNTUsMTQuMzgxNzEwOCBDOS45NzcyOTY4NywxNC42Njc4MTY5IDEwLjE5MjY2MDIsMTUuNDMwNzQ5NCA5Ljc4Mzg5NjQ4LDE2LjA5ODk3OTUgWiBNMTEuMTU0MTc3NywxNC4zNDYxODggQzExLjAwMzc4OTEsMTQuNjAyODY4NyAxMC42NzExOTczLDE0LjcyNTgzMjUgMTAuNDEwOTE4LDE0LjYxOTAxMDggQzEwLjE1NDQ3MjcsMTQuNTE0MTEyIDEwLjA3NDI2MzcsMTQuMjI3NDQ5NCAxMC4yMTk4MjgxLDEzLjk3NTM3MzUgQzEwLjM2OTgzNTksMTMuNzI0ODQxIDEwLjY4OTUyOTMsMTMuNjAyNjYxNCAxMC45NDQ5ODQ0LDEzLjcwMzMzNDkgQzExLjIwNDcwNTEsMTMuNzk4MjE0NSAxMS4yOTc4Mzc5LDE0LjA4ODM0MzQgMTEuMTU0MjAzMSwxNC4zNDYxODggTDExLjE1NDE3NzcsMTQuMzQ2MTg4IFogTTI0LjIwOTc4MzIsMi4yNjg0MDQ4MiBDMjUuOTE2ODk2NSw0LjE1MTI2OTg4IDI2LjM3Njc0NjEsNi43MTgxMDI0MSAyNS42NDgzMTQ1LDguOTcwNjE4MDcgQzI1LjY0ODEzNjcsOC45NzE3ODE5MyAyNS42NDgxMzY3LDguOTczNjc5NTIgMjUuNjQ4MTM2Nyw4Ljk3NDQ2Mzg2IEMyNS40Nzg4MzIsOS40OTQzNTMwMSAyNC45MTgxNTYyLDkuNzc5NDcyMjkgMjQuMzk2MDIzNCw5LjYxMDk5MTU3IEMyMy44NzE5NjA5LDkuNDQyNDg1NTQgMjMuNTg1ODU5NCw4Ljg4NDc0NTc4IDIzLjc1NTEzODcsOC4zNjI5MDg0MyBMMjMuNzU0OTM1NSw4LjM2MjMyNjUxIEMyNC4yNzM3OTMsNi43NjE3MjE2OSAyMy45NDQ4NTc0LDQuOTM1MzI4OTIgMjIuNzMzMjY3NiwzLjU5Njc2ODY3IEMyMS41MTk3MjI3LDIuMjU4MjA4NDMgMTkuNzMxNjM4NywxLjc0NjM5MDM2IDE4LjA3OTA2NDUsMi4wOTU4NzU5IEMxNy41NDE3MjI3LDIuMjEwNTY2MjcgMTcuMDEzMDM5MSwxLjg2ODM5Mjc3IDE2Ljg5ODkwODIsMS4zMzM1IEMxNi43ODMzODA5LDAuNzk4ODA5NjM5IDE3LjEyNjQwODIsMC4yNzE2MDg0MzQgMTcuNjYzMzY5MSwwLjE1NzUgTDE3LjY2NDEzMDksMC4xNTc1IEMxOS45ODcyOTY5LC0wLjMzNDU1NzgzMSAyMi41MDQwMTU2LDAuMzgzNjE2ODY3IDI0LjIwOTc4MzIsMi4yNjgzNzk1MiBMMjQuMjA5NzgzMiwyLjI2ODQwNDgyIFogTTIxLjU4OTUyMTUsNC42MjQ0NTMwMSBMMjEuNTg5NTIxNSw0LjYyNDI3NTkgQzIyLjQyMTg3Nyw1LjU0MjI3OTUyIDIyLjY0NDE3MTksNi43OTE4ODA3MiAyMi4yODg0NDkyLDcuODg5NyBDMjIuMTQzMjY1Niw4LjMzODEzODU1IDIxLjY2MDg2OTEsOC41ODI5MDI0MSAyMS4yMTA0NjQ4LDguNDM5MzY4NjcgQzIwLjc2MDQ0MTQsOC4yOTM3MzQ5NCAyMC41MTQ0MzE2LDcuODEyNDU1NDIgMjAuNjU5NDEyMSw3LjM2NDgyNjUxIEwyMC42NTg4MjgxLDcuMzY0ODI2NTEgQzIwLjgzMzcxODgsNi44MjgxODc5NSAyMC43MjQyMDksNi4yMTY0NTU0MiAyMC4zMTc5NTksNS43NjcyNTc4MyBDMTkuOTExNTA1OSw1LjMxOTYwMzYxIDE5LjMxMTcwMzEsNS4xNDk3NTY2MyAxOC43NTg1MTc2LDUuMjY2NTQ2OTkgTDE4Ljc1ODUxNzYsNS4yNjU2MTA4NCBDMTguMjk3MTQ0NSw1LjM2NTkwNDgyIDE3Ljg0MjI5NjksNS4wNzA0MTIwNSAxNy43NDMxOTczLDQuNjExMjIwNDggQzE3LjY0MzkxOTksNC4xNDk3MjY1MSAxNy45Mzg3MDUxLDMuNjk1OTI0MSAxOC40MDE0NDkyLDMuNTk3NzMwMTIgQzE5LjUzMzQxNDEsMy4zNTc5NTA2IDIwLjc1OTI5ODgsMy43MDY4NTQyMiAyMS41ODk1MjE1LDQuNjI0NDUzMDEgTDIxLjU4OTUyMTUsNC42MjQ0NTMwMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+',
      },
      {
        name: 'zhihu',
        href: '#',
        className: 'links-zhihu',
        children:
          'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjEgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nn6XkuY48L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBvcGFjaXR5PSIwLjQiPgogICAgICAgIDxnIGlkPSLpobXohJoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTQuMDAwMDAwLCAtMjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IuefpeS5jiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE0LjAwMDAwMCwgMjEuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43Nzg1ODQ2MSwxMS43MjI5IEwxMS4yOTA5Nzg1LDExLjcyMjkgQzExLjI5MDk3ODUsMTAuNjQ0OSAxMC43OTEyODYyLDEwLjAxMzUgMTAuNzkxMjg2MiwxMC4wMTM1IEw2Ljg3NDM4NzcsMTAuMDEzNSBDNi45Njc0MzM4NSw4LjA2MTE5OTk5IDcuMDUwODMwNzcsNS41NTU4OTk5OSA3LjA4MTE1NjkzLDQuNjI0ODk5OTkgTDEwLjgwNjQ0OTIsNC42MjQ4OTk5OSBDMTAuODA2NDQ5Miw0LjYyNDg5OTk5IDEwLjc4NTc3MjMsMy4wMjQgMTAuMzcyMjMzOCwzLjAyNCBMMy44MjI0NzM4NSwzLjAyNCBDMy44MjI0NzM4NSwzLjAyNCA0LjIxNjcxMzg0LDAuOTMwMyA0Ljc0MTkwNzY5LDAuMDA1NjAwMDA2ODQgQzQuNzQxOTA3NjksMC4wMDU2MDAwMDY4NCAyLjc4NjU1OTk5LC0wLjEwMTQ5OTk5MyAyLjExOTM4NDYyLDIuNTQ2NjAwMDEgQzEuNDUyMjA5MjQsNS4xOTQ3MDAwMSAwLjQ1MjEzNTM5MSw2Ljc5NTYgMC4zNDY2ODMwODQsNy4wODgxOTk5OSBDMC4yNDA1NDE1NTIsNy4zODA3OTk5OSAwLjkyMjE5MDc2OSw3LjIyNjc5OTk5IDEuMjEwMjg5MjIsNy4wODgxOTk5OSBDMS40OTgzODc2OCw2Ljk0OTU5OTk5IDIuODAyNDEyMyw2LjQ3MjIgMy4xODE0ODkyNCw0LjYyNDg5OTk5IEw1LjIwNTc2MDAxLDQuNjI0ODk5OTkgQzUuMjMzMzI5MjMsNS43OTYgNS4zMTMyODAwMSw5LjM4NDE5OTk5IDUuMjg4NDY3NywxMC4wMTM1IEwxLjExOTMxMDc2LDEwLjAxMzUgQzAuNTI3OTUwNzYzLDEwLjQ0NDcgMC4zMzE1MTk5OTMsMTEuNzIyOSAwLjMzMTUxOTk5MywxMS43MjI5IEw1LjA5NjE3MjMxLDExLjcyMjkgQzQuODk2OTg0NjMsMTMuMDU5MiA0LjU0ODIzMzg1LDE0Ljc4MTkgNC4wNjAyNTg0NywxNS42OTQ3IEMzLjI4NzYzMDc3LDE3LjE0MyAyLjg3ODIyNzY5LDE4LjQ2NjcgMC4wODk1OTk5OTMzLDIwLjc0NDUgQzAuMDg5NTk5OTkzMywyMC43NDQ1IC0wLjM2NTI5MjMxNCwyMS4wODMzIDEuMDQ0MTg0NjIsMjAuOTYwMSBDMi40NTQzNTA3NywyMC44MzY5IDMuNzg4MDEyMzEsMjAuNDY3MyA0LjcxMjk1OTk5LDE4LjU4OTIgQzUuMjU1MTIxMjcsMTcuNDY5MTYwNiA1LjcxMTU5MTYsMTYuMzA4Mzk4NyA2LjA3ODMyNjE2LDE1LjExNzIgTDYuMDc2OTQ3NjksMTUuMTIyMSBMMTAuMDAzNDk1NCwxOS43MTM0IEMxMC4wMDM0OTU0LDE5LjcxMzQgMTAuNTE5MDQsMTguNDgxNCAxMC4xMzk5NjMxLDE3LjEyNjkgTDcuMjI5MzQxNTMsMTMuODE1OSBMNi4yNDM3NDE1NSwxNC41NTY1IEw2LjI0MzA1MjMsMTQuNTYgQzYuNTE2Njc2OTEsMTMuNTg1NiA2LjcxMzEwNzY4LDEyLjYyMjQgNi43NzQ0NDkyMiwxMS43ODQ1IEw2Ljc3OTI3Mzg1LDExLjcyMjkgTDYuNzc4NTg0NjEsMTEuNzIyOSBaIE0xMi4yMzEwODkyLDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMTguNTczOCBMMTMuODc1NTkzOSwxOC41NzM4IEwxNC41NDk2NjE1LDIwLjQ4NjkgTDE3LjQwMDMyLDE4LjU3MzggTDIwLjk5MzI4LDE4LjU3MzggTDIwLjk5MzI4LDIuNjg1MjAwMDEgTDEyLjIzMTA4OTIsMi42ODUyMDAwMSBaIE0xOS4zMDA1MjkyLDE2Ljg2NTEgTDE3LjQzMjcxMzgsMTYuODY1MSBMMTUuMTAzODAzMSwxOC40Mjc1IEwxNC41NTMxMDc3LDE2Ljg2NTEgTDEzLjk3MjA4NjEsMTYuODY1MSBMMTMuOTcyMDg2MSw0LjQ1ODMgTDE5LjI5OTg0LDQuNDU4MyBMMTkuMjk5ODQsMTYuODY1MSBMMTkuMzAwNTI5MiwxNi44NjUxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=',
      },
    ],
  },
};
