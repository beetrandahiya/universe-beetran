function createStars() {
    const starryBackground = document.getElementsByClassName('starry-bg')[0];
    const numberOfStars = 300;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starryBackground.appendChild(star);
    }
}



window.addEventListener('load', createStars);




        function openModal(element) {
            const modal = document.getElementById('imageModal');
            const modalImage = modal.querySelector('.modal-image');
            const modalTitle = modal.querySelector('.image-title');
            const modalDetails = modal.querySelector('.image-details');
            
            const img = element.querySelector('img');
            const title = element.querySelector('.image-title');
            const details = element.querySelector('.image-details');
            
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalTitle.innerHTML = title.innerHTML;
            modalDetails.innerHTML = details.innerHTML;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('imageModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });


/*disappear scroll down button on scroll*/
let scrollDownButton = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        scrollDownButton.style.opacity = 0;
    } else {
        scrollDownButton.style.opacity = 1;
    }
});



/* gallery*/
const gallery = document.getElementById('gallery');



    for(let i = 0; i < images.length; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.onclick = function() {
            openModal(this);
        };

        const img = document.createElement('img');
        img.src = images[i].url;
        img.alt = images[i].title;

        const divCaption = document.createElement('div');
        divCaption.className = 'image-caption';

        const title = document.createElement('h3');
        title.className = 'image-title';
        title.innerHTML = images[i].title;

        const divDetails = document.createElement('div');
        divDetails.className = 'image-details';

        const details = document.createElement('p');
        details.innerHTML = images[i].details;

        const specs = document.createElement('span');
        specs.className = 'tech-specs';
        specs.innerHTML = images[i].specs;

        divDetails.appendChild(details);
        divDetails.appendChild(specs);

        divCaption.appendChild(title);
        divCaption.appendChild(divDetails);

        galleryItem.appendChild(img);
        galleryItem.appendChild(divCaption);

        gallery.appendChild(galleryItem);

    }




    


