function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => {result.classList.toggle('bar1-on');})

    document.querySelectorAll('.br-2').forEach((result) => {result.classList.toggle('bar2-on');})

    document.querySelectorAll('.br-3').forEach((result) => {result.classList.toggle('bar3-on');})

        document.querySelectorAll('.menu-on').forEach((result) => {result.classList.toggle('Menu-Full-on');})

        document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})

        document.querySelectorAll('.smooth-menu').forEach((result) => {result.classList.toggle('menu-grid-smooth');})
        
        document.querySelectorAll('.smooth-credits').forEach((result) => {result.classList.toggle('credits-smooth');})
}