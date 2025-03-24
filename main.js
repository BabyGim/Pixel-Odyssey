$(document).ready(function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let products = [
        { id: 1, name: "Abstract Waves", price: 15, img: "images/Abstract_Waves.jpg", description: "Abstract Waves is a mesmerizing piece of digital art that beautifully captures the movement and fluidity of color. This artwork features a stunning array of swirling hues, blending deep blues, fiery reds, and golden yellows, evoking the sensation of motion in a still image. The intricate layering technique adds depth and texture, making it feel almost three-dimensional. Whether you're an admirer of abstract art or simply looking for a statement piece to brighten up your space, Abstract Waves is the perfect addition. Its dynamic energy and fluid motion make it a timeless piece that captivates and inspires." },  
        { id: 2, name: "Color Burst", price: 18, img: "images/color_burst.jpg", description: "Color Burst is a vibrant and dynamic explosion of hues that radiates energy and enthusiasm. This digital painting is a celebration of color, featuring an electrifying blend of reds, oranges, pinks, purples, and blues. The splattered paint effect gives the impression of spontaneity and creative expression, as if the colors were thrown onto the canvas in an act of pure inspiration. This piece is perfect for those who appreciate bold, eye-catching artwork that makes a statement. Whether displayed in a home, office, or gallery, Color Burst is sure to spark conversation and admiration." },  
        { id: 3, name: "Modern Chaos", price: 20, img: "images/modern_chaos.jpg", description: "Modern Chaos is an abstract masterpiece that embodies the fast-paced, ever-evolving nature of contemporary life. Through an intricate combination of geometric shapes, vivid color splashes, and distorted lines, this digital artwork creates a sense of controlled disorder. It represents the bustling energy of urban landscapes, the clash of ideas, and the beauty found within unpredictability. Whether viewed as a representation of movement, creativity, or the complexity of modern thought, this piece is ideal for art lovers who embrace the unconventional. It’s a thought-provoking addition to any space." },  
        { id: 4, name: "Fluid Dreams", price: 22, img: "images/fluid_dreams.jpg", description: "Fluid Dreams is a visually enchanting artwork that explores the beauty of liquid motion. The seamless blending of colors and organic patterns creates a hypnotic effect, drawing the viewer into an ever-flowing dreamscape. Soft curves and vibrant hues give this piece an ethereal quality, making it perfect for those who appreciate abstract and surrealist aesthetics. Whether displayed in a modern setting or a creative space, Fluid Dreams has the power to evoke a sense of calm and wonder. It’s an ideal choice for those who seek to add a touch of imagination and fluidity to their surroundings." },  
        { id: 5, name: "Neon Flow", price: 25, img: "images/neon_flow.jpg", description: "Neon Flow is a stunning digital artwork that combines the vibrancy of neon lighting with the elegance of fluid motion. Swirling neon shade of blues give the impression of a futuristic energy current moving through space. The interplay between light and shadow creates a dynamic sense of movement, making the artwork feel alive. Whether you’re a fan of cyberpunk aesthetics or simply drawn to bold, electrifying colors, Neon Flow is the perfect statement piece. It brings a futuristic and energetic ambiance to any setting, making it a must-have for digital art enthusiasts." },  
        { id: 6, name: "Fantasy Warrior", price: 30, img: "images/fantasy_warrior.jpg", description: "Fantasy Warrior depicts a fierce and legendary fighter from a mythical realm. Adorned in intricately designed armor, wielding a powerful weapon, and standing against a backdrop of a magical battlefield, this artwork captures the essence of heroism and strength. The vivid detailing and dramatic lighting bring the character to life, making it a captivating piece for fantasy lovers. Whether you enjoy stories of warriors and mythical battles or simply appreciate well-crafted digital art, Fantasy Warrior is the perfect addition to your collection. It embodies courage, adventure, and the spirit of epic storytelling." },  
        { id: 7, name: "Cyberpunk City", price: 28, img: "images/cyberpunk_city.jpg", description: "Cyberpunk City immerses you in a neon-lit metropolis filled with towering buildings glowing against the night sky. Inspired by futuristic cyberpunk themes, this artwork combines elements of technology, rebellion, and urban landscapes. The rich color palette, featuring electric colors, creates a visually stunning scene. Perfect for lovers of sci-fi aesthetics and cybernetic worlds, this piece encapsulates the energy and mystery of a high-tech, dystopian future. Hang it in your space to bring a sense of futuristic wonder and urban sophistication." },  
        { id: 8, name: "Mystic Forest", price: 32, img: "images/mystic_forest.jpg", description: "Mystic Forest transports you to an enchanted woodland bathed in an ethereal glow. Towering ancient trees, luminescent flora, and a soft mist hovering over the ground create an atmosphere of mystery and magic. The contrast of deep greens, glowing blues, and golden highlights evokes a dreamlike quality, as if stepping into a world beyond reality. Ideal for nature lovers and fantasy enthusiasts alike, this artwork invites the viewer to explore the unknown and find beauty in the mystical. Add this piece to your collection and bring an aura of enchantment to any space." },  
        { id: 9, name: "Anime Landscape", price: 35, img: "images/anime_landscape.jpg", description: "Anime Landscape is a breathtaking digital piece inspired by the vibrant and imaginative world of anime. Featuring a girl and a stunning sorroundings painted in pastel hues, this artwork captures the serenity and beauty of animated fantasy realms. The fine details and painterly strokes give it an authentic anime feel, making it perfect for fans of Japanese animation and scenic backgrounds. Whether you appreciate anime aesthetics or simply love visually captivating landscapes, this piece is a must-have for your art collection." },  
        { id: 10, name: "Futuristic Samurai", price: 40, img: "images/futuristic_samurai.jpg", description: "Futuristic Samurai is a stunning fusion of ancient tradition and advanced technology. This artwork showcases a cybernetic warrior clad in high-tech mask, wielding a katana, and standing against a cityscape. The contrast between old and new, discipline and chaos, is masterfully captured in this digital piece. The detailed craftsmanship and dynamic pose make this an exciting visual experience for lovers of both sci-fi and samurai lore. Display this piece to add a sense of strength, history, and futuristic innovation to your space." },  
        { id: 11, name: "Sci-Fi Spaceship", price: 50, img: "images/sci-fi_spaceship.jpg", description: "Sci-Fi Spaceship takes you on a journey through the cosmos with its breathtaking depiction of an advanced spacecraft cruising through a distant galaxy. The sleek design of the ship, illuminated thrusters, and the vastness of the universe behind it make this an awe-inspiring piece for sci-fi lovers. The deep blues, purples, and cosmic elements add to the sense of wonder and exploration. Whether you're a fan of space travel, futuristic technology, or simply enjoy stunning digital artwork, this piece will transport you to another world." },  
        { id: 12, name: "Fantasy Castle", price: 55, img: "images/fantasy_castle.jpg", description: "Fantasy Castle brings to life a majestic, towering castle nestled in a mystical valley. Floating above the clouds, with glowing lights and enchanted surroundings, this artwork feels straight out of a fairytale. The intricate detailing of the castle, its luminous turrets, and the magical ambiance create a piece that will ignite the imagination of anyone who beholds it. Perfect for lovers of fantasy, mythology, and magical worlds." },  
        { id: 13, name: "Cyber Robot", price: 60, img: "images/cyber_robot.jpg", description: "Cyber Robot is a striking representation of artificial intelligence and mechanical evolution. With a sleek metallic body, glowing sensors, and intricate mechanical details, this artwork brings a futuristic humanoid figure to life. Ideal for sci-fi lovers and tech enthusiasts." },  
        { id: 14, name: "Futuristic Car", price: 65, img: "images/futuristic_car.jpg", description: "Futuristic Car is an artistic depiction of a high-tech automobile from the future. Its aerodynamic design, glowing neon accents, and sleek body make it look like a vehicle built for speed and innovation." },  
        { id: 15, name: "Virtual Cityscape", price: 70, img: "images/virtual_cityscape.jpg", description: "A digital metropolis blending reality and cyberspace, filled with neon lights and holographic projections, evoking a futuristic vision of urban life." }  
    ];

    function renderProducts() {
        let productHTML = "";
        products.forEach(product => {
            productHTML += `
                <div class="col-md-4">
                    <div class="card art-item" data-id="${product.id}">
                        <img src="${product.img}" class="card-img-top productImage" alt="${product.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="price">$${product.price}</p>
                            <button class="btn btn-primary addToCart">Add to Cart</button>
                        </div>
                    </div>
                </div>`;
        });
        $("#product-list").html(productHTML);
    }

    function updateCart() {
        $("#cartCount").text(cart.length);
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        $("#cartTotal").text(total.toFixed(2));

        let cartHTML = "";
        cart.forEach((item, index) => {
            cartHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.name} - $${item.price}
                    <button class="btn btn-sm btn-danger removeItem" data-index="${index}">❌</button>
                </li>`;
        });
        $("#cartItems").html(cartHTML);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Clicking an image redirects to product details page
    $("#product-list").on("click", ".productImage", function () {
        let productID = $(this).closest(".card").data("id");
        let product = products.find(p => p.id === productID);

        if (product) {
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "product.html";
        }
    });

    // Add to cart button - stores product and redirects to art-details.html
    $("#product-list").on("click", ".addToCart", function () {
        let productID = $(this).closest(".card").data("id");
        let product = products.find(p => p.id === productID);

        if (product) {
            cart.push(product);
            updateCart();
            localStorage.setItem("selectedArt", JSON.stringify(product));
        }
    });

    // Remove item from cart
    $(document).on("click", ".removeItem", function () {
        let index = $(this).data("index");
        cart.splice(index, 1);
        updateCart();
    });

    // Clear cart button
    $("#clearCart").click(function () {
        cart = [];
        updateCart();
    });

    // View cart button
    $("#viewCart").click(function () {
        window.location.href = "checkout.html";
    });

    renderProducts();
    updateCart();
});
