window.onload = function() {
    document.querySelectorAll('.Pop-Al').forEach((result) => {result.classList.add('Pop-All')})
}


function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => {result.classList.toggle('bar1-on');})

    document.querySelectorAll('.br-2').forEach((result) => {result.classList.toggle('bar2-on');})

    document.querySelectorAll('.br-3').forEach((result) => {result.classList.toggle('bar3-on');})

        document.querySelectorAll('.menu-on').forEach((result) => {result.classList.toggle('Menu-Full-on');})

        document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})

        document.querySelectorAll('.smooth-menu').forEach((result) => {result.classList.toggle('menu-grid-smooth');})
        
        document.querySelectorAll('.smooth-credits').forEach((result) => {result.classList.toggle('credits-smooth');})

        document.querySelectorAll('.smooth-logo').forEach((result) => {result.classList.toggle('logo-on');})
}

function Pop() {
    document.querySelectorAll('.Pop-Exit').forEach((result) => {result.classList.toggle('Pop-out');})
    document.querySelectorAll('.Status-Ani').forEach((result) => {result.classList.toggle('Status-Animated');})
    
    document.querySelectorAll('.Pop-VS-O').forEach((result) => {result.classList.remove('Pop-VS-Out')})
    document.querySelectorAll('.Pop-Git-O').forEach((result) => {result.classList.remove('Pop-Git-Out')})
    document.querySelectorAll('.Pop-Fig-O').forEach((result) => {result.classList.remove('Pop-Fig-Out')})
}

function PopVS() {
    document.querySelectorAll('.Pop-VS-O').forEach((result) => {result.classList.add('Pop-VS-Out')})
}

function PopGit() {
    document.querySelectorAll('.Pop-Git-O').forEach((result) => {result.classList.add('Pop-Git-Out')})
}

function PopFig() {
    document.querySelectorAll('.Pop-Fig-O').forEach((result) => {result.classList.add('Pop-Fig-Out')})
}
