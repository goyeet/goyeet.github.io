// const projects = document.querySelectorAll('.project-card')

/** On clicking a project-card, removes 'active' classes from other cards and adds 'active' to selected card */
/* projects.forEach((proj) => {
    proj.addEventListener('click', () => {
        removeActiveClasses()
        proj.classList.add('active')
    })
})

function removeActiveClasses() {
    projects.forEach((proj) => {
        proj.classList.remove('active')
    })
} */

function showMoreInfo(id) {
    document.getElementById(id).style.display = "block";
}

function closeInfo(id) {
    document.getElementById(id).style.display = "none";
}

