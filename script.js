document.addEventListener("DOMContentLoaded", () => {
    const jokeContainer = document.getElementById("joke");
    const btn = document.getElementById("btn");
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

    const getJoke = () => {
        jokeContainer.classList.remove("fade");

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.type === "single") {
                    jokeContainer.textContent = data.joke;
                } else {
                    jokeContainer.textContent = `${data.setup} - ${data.delivery}`;
                }
                jokeContainer.classList.add("fade");
            })
            .catch(error => {
                jokeContainer.textContent = "Oops! Couldn't fetch a joke.";
                console.error("Error fetching joke:", error);
            });
    };

    btn.addEventListener("click", getJoke);
    getJoke();
});
