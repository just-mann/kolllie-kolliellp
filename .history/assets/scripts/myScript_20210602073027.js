$(() => {
    console.log('It works...');
    $('.toggleBar').on('click', openSideNav);
    const openSideNav = () => {
        $('.sideNavbar').css("");
    }
})

