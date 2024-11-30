
/* custom JavaScript for OPPIE*/


/* menu Toggle */
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}




/* scroll to top of the page */
function scrollToPageTop()
{

    // Function to handle scroll and button visibility
    function scrollToTop() {
        // Scroll to the top of the document
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    } 
  
    // Function to show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function() {
        let mybutton = document.getElementById("backToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    };  
}


/* buy OPPIE through Jupiter */
function buyOppie() {
    document.querySelectorAll('.overlay-button').forEach(function(button) {
        button.addEventListener('click', function() {
            var target = document.getElementById('overlay-target');
            target.classList.remove('hidden');
            window.Jupiter.init({
                integratedTargetId: "integrated-terminal",
                endpoint: "https://mainnet.helius-rpc.com/?api-key=6e407566-3f5a-45ad-b092-c076eeafad2f",
                defaultExplorer: "Solscan",
                formProps: {
                    fixedOutputMint: true,
                    swapMode: "ExactIn",
                    initialOutputMint: "GwyxednWbrhgT2K6iPUsbtadErA7TBGqsJjyzAody2mv",
                    initialSlippageBps: 50,
                },
            });
        });
    });
  }

