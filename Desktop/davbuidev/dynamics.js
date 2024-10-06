// Smooth Scroll for internal links (anchors)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Loading screen before each page transition
document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');
    const loader = document.createElement('div');
    loader.innerHTML = `<div id="loading">Loading...</div>`;
    loader.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:white;z-index:10000;text-align:center;display:flex;align-items:center;justify-content:center;font-size:2rem;";
    body.appendChild(loader);

    // Remove the loader after 1 second
    setTimeout(() => loader.remove(), 1000);
});

// Adding event listeners to links for page transitions
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Avoid adding the loading screen for anchor links (those starting with "#")
        if (!href.startsWith("#")) {
            e.preventDefault();

            const loader = document.createElement('div');
            loader.innerHTML = `<div id="loading">Loading...</div>`;
            loader.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:white;z-index:10000;text-align:center;display:flex;align-items:center;justify-content:center;font-size:2rem;";
            document.body.appendChild(loader);

            // Simulate loading effect before navigating to the next page
            setTimeout(() => {
                window.location.href = href;
            }, 1000); // 1 second loading screen before transitioning
        }
    });
});


// Apply smooth scroll and page transition to all anchor links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (!href.startsWith("#")) {
            e.preventDefault();

            const loader = document.createElement('div');
            loader.innerHTML = `<div id="loading">Loading...</div>`;
            loader.style.cssText = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:white;z-index:10000;text-align:center;display:flex;align-items:center;justify-content:center;font-size:2rem;";
            document.body.appendChild(loader);

            // Simulate loading effect before navigating to the next page
            setTimeout(() => {
                window.location.href = href;
            }, 1000); // 1 second loading screen before transitioning
        }
    });
});
