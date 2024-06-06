// links.js (or within your component file)
  const sidebarLinks = [
    { key:"1",name: 'Timeline', href: '/feed' ,icon:'newspaper',subLinkExist:false},
    { key:"2",name: 'Annuaire', href: '/Annuaire',icon: 'store_mall_directory',subLinkExist:false },
    // { key:"3", name: 'Mail', href: '',icon: 'mail_outline',subLinkExist:true,eventKey:"mail-menu",
    //     sublinks: [
    //         { key:"100",name: 'Inbox', href:'/Email/Inbox'},
    //         { key:"101", name: 'EmailCompose', href:'/Email/compose'},
    //     ], },
    //   { key:"4",name: 'Chat', href: '/chat' ,icon:'message',subLinkExist:false},
    //   { key:"5", name: 'Friends', href: '',icon: 'people',subLinkExist:true,eventKey:"friends-menu",
    //       sublinks: [
    //           { key:"102",name: 'Friend List', href:'/Friends/friend-list'},
    //           { key:"103", name: 'Friend Request', href:'/Friends/friend-request'},
    //       ], },
];

export default sidebarLinks
