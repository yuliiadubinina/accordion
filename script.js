document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementsByClassName('btn');

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            if (!(this.classList.contains("active"))) {
                for (var j = 0; j < btn.length; j++) {
                    btn[j].classList.remove("active")
                }
                this.classList.add("active");
            }
        });
    };
});
