// script.js

// Function to change the love message text dynamically
function changeLoveMessage() {
    const loveText = document.getElementById('animatedText');
    loveText.textContent = "I didnt know that I could fall this hard The way my feet leave the ground Gravity stops making sense When your dreamy thoughts surround I dont know how you do it The way you turn my demons down I wonder where would I be If by you, I was never found Drifting over endless waves I was left like a message in a bottle You didnt leave a word or corner You took me up and read whole Now its your world I wanna live in Its your ocean I wanna swim in Its your sky I wanna soar in Losing yous not an option If you ever fall to pieces Fall between the thunder clouds I promise to put you together Ill love you clear and loud My heart feels like having landslide The way it beats when it hears your sound You sweep the floor beneath me Making my lovesick heart pound For you, I infinitely fall You pull me in like a black hole Wanting you is all I know Loving you is out of my controlHow was I to know Its a crazy thing Where everyone saw mere words You saw footprints Without a care if u get lost you still followed without a hint Who was I to say That it was meant to be Like a storm, you tore down walls that Id made Yet moved into my heart like a spring breeze You stitched it up, mended my soul With depthless numbness, it was diseased I was upside down, from the outside in A haunted house but you went all in I was a wreck yet you saw the best in me Life had made me a joker yet I got the queen Its funny how love hits when its least expected to It doesnt see no time no place, comes right out of the blue It happened just like I had seen in movie screens How you came along, changed my everything I grew up listening my mothers fairy tales Didnt know she was telling me about you Just few days spent in your shade and I knew That I couldnt spend my life without you We sailed through storms, yet found our way Brought to the shore like castaways The world hurts less when Im by your side My heart feels peace like my demons died And see now Im yours I promise for always and forever Through every good and the bad days Through all seasons and the weathers I just wanna be with you for the rest of my life Would you accept me as your hubby, I need you as my wife ";
}

// Function to add a new image to the gallery
function addNewImage() {
    const gallery = document.getElementById('gallerySection');
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    
    const newImage = document.createElement('img');
    newImage.src = 'newImage.jpg'; // Replace with the path to your new image
    newImage.alt = 'New Love Image';
    newImage.style.width = '30%';
    newImage.style.borderRadius = '8px';
    newImage.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
    newImage.style.transition = 'transform 0.3s ease-in-out';

    newImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
    });

    newImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    imageContainer.appendChild(newImage);
    gallery.appendChild(imageContainer);
}
