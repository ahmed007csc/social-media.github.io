


const publishButton = document.getElementById("publish-btn");
const postTextArea = document.getElementById("new-post");
const postsContainer = document.getElementById("posts");


function addPost() {
    const postText = postTextArea.value.trim();

    if (postText) {
       
        const newPost = document.createElement("div");
        newPost.classList.add("post");

      
        newPost.innerHTML = `
            <p><strong>Эмирхан Козубайев:</strong> ${postText}</p>
            <p class="timestamp">Только что</p>
        `;

        
        postsContainer.prepend(newPost);

      
        postTextArea.value = "";
    }
}


publishButton.addEventListener("click", addPost);


postTextArea.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addPost(); 
    }
});
