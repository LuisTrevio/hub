function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => {result.classList.toggle('bar1-on');})

    document.querySelectorAll('.br-2').forEach((result) => {result.classList.toggle('bar2-on');})

    document.querySelectorAll('.br-3').forEach((result) => {result.classList.toggle('bar3-on');})

        document.querySelectorAll('.menu-on').forEach((result) => {result.classList.toggle('Menu-Full-on');})
}