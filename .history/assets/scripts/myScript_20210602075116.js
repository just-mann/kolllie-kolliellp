$(() => {
    // let navLinks = document.querySelectorAll('.sideNavbar .links')
    console.log('It works...');
    const openSideNav = () => {
        $('.sideNavbar').css("display", "block");;
    }
    const closeSideNav = () => {
        $('.sideNavbar').css("display", "none");;
    }
    $('.toggleBar').on('click', openSideNav);
    $('.closeBtn').on('click', closeSideNav);
    $('.sideNavbar .links a').on('click', closeSideNav);
})

