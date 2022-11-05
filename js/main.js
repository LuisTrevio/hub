const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    }
    else {
        entry.target.classList.remove('show');
    }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function ClickMenu() {
    document.querySelectorAll('.br-1').forEach((result) => {result.classList.toggle('bar1-on');})

    document.querySelectorAll('.br-2').forEach((result) => {result.classList.toggle('bar2-on');})

    document.querySelectorAll('.br-3').forEach((result) => {result.classList.toggle('bar3-on');})

        document.querySelectorAll('.menu-on').forEach((result) => {result.classList.toggle('Menu-Full-on');})

        document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})

        document.querySelectorAll('.smooth-menu').forEach((result) => {result.classList.toggle('menu-grid-smooth');})
        
        document.querySelectorAll('.smooth-credits').forEach((result) => {result.classList.toggle('credits-smooth');})

    document.querySelectorAll('.smooth-logo').forEach((result) => {result.classList.toggle('logo-on');})

    document.querySelectorAll('.ctn-scale').forEach((result) => {result.classList.toggle('content-scale');})
}

function Pop() {
    document.querySelectorAll('.Pop-Exit').forEach((result) => {result.classList.toggle('Pop-out');})
    document.querySelectorAll('.Status-Ani').forEach((result) => {result.classList.toggle('Status-Animated');})
    document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})

    document.querySelectorAll('.Pop-VS-O').forEach((result) => {result.classList.remove('Pop-VS-Out')})
    document.querySelectorAll('.Pop-Git-O').forEach((result) => {result.classList.remove('Pop-Git-Out')})
    document.querySelectorAll('.Pop-Fig-O').forEach((result) => {result.classList.remove('Pop-Fig-Out')})
    document.querySelectorAll('.Pop-HTML-O').forEach((result) => {result.classList.remove('Pop-HTML-Out')})
    document.querySelectorAll('.Pop-CSS-O').forEach((result) => {result.classList.remove('Pop-CSS-Out')})
    document.querySelectorAll('.Pop-JS-O').forEach((result) => {result.classList.remove('Pop-JS-Out')})
    document.querySelectorAll('.Pop-PY-O').forEach((result) => {result.classList.remove('Pop-PY-Out')})
    document.querySelectorAll('.Pop-SQL-O').forEach((result) => {result.classList.remove('Pop-SQL-Out')})

    document.querySelectorAll('.Pop-Product-1-O').forEach((result) => {result.classList.remove('Pop-Product-1-Out')})
    document.querySelectorAll('.Pop-Product-2-O').forEach((result) => {result.classList.remove('Pop-Product-2-Out')})
    document.querySelectorAll('.Pop-Product-3-O').forEach((result) => {result.classList.remove('Pop-Product-3-Out')})
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

function PopHTML() {
    document.querySelectorAll('.Pop-HTML-O').forEach((result) => {result.classList.add('Pop-HTML-Out')})
}

function PopCSS() {
    document.querySelectorAll('.Pop-CSS-O').forEach((result) => {result.classList.add('Pop-CSS-Out')})
}

function PopJS() {
    document.querySelectorAll('.Pop-JS-O').forEach((result) => {result.classList.add('Pop-JS-Out')})
}

function PopPY() {
    document.querySelectorAll('.Pop-PY-O').forEach((result) => {result.classList.add('Pop-PY-Out')})
}

function PopSQL() {
    document.querySelectorAll('.Pop-SQL-O').forEach((result) => {result.classList.add('Pop-SQL-Out')})
}

function PopP1() {
    document.querySelectorAll('.Pop-Product-1-O').forEach((result) => {result.classList.add('Pop-Product-1-Out')})
}

function PopP2() {
    document.querySelectorAll('.Pop-Product-2-O').forEach((result) => {result.classList.add('Pop-Product-2-Out')})
}

function PopP3() {
    document.querySelectorAll('.Pop-Product-3-O').forEach((result) => {result.classList.add('Pop-Product-3-Out')})
}

