$(() => {
    let navLinks = document.querySelectorA
    console.log('It works...');
    const openSideNav = () => {
        $('.sideNavbar').css("display", "block");;
    }
    const closeSideNav = () => {
        $('.sideNavbar').css("display", "none");;
    }
    $('.toggleBar').on('click', openSideNav);
    $('.closeBtn').on('click', closeSideNav);
    $('.sideNavbar .link a').on('click', closeSideNav);
})

