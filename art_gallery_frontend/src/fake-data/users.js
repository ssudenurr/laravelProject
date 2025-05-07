const users = {
    name: "Vincent van Gogh",
    username: "vangogh",
    email: "vangogh@example.com",
    website: "https://vangogh.com",
    image: "/src/assets/vangogh-avatar.jpg", // Vite içinde çalışacak şekilde doğru yol olmalı
    bio: "Post-impressionist painter known for vivid colors and emotional honesty.",
    artworks: [
      {
        id: 1,
        name: "Starry Night",
        imageSrc: "/src/assets/VanGogh-StarryNight.jpg",
        description: "A beautiful night sky over a village.",
      },
      {
        id: 2,
        name: "Sunflowers",
        imageSrc: "/src/assets/VanGogh-Sunflowers.jpg",
        description: "A vibrant bouquet of sunflowers.",
      },
      // Diğer eserler...
    ],
  };
  
  export default users;