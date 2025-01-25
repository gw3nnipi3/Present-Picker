class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.url = "";  // URL for official product page
        this.photo = "";
    }

    addChild(node) {
        this.children.push(node);
    }

    setUrl(url) {
        this.url = url;
    }

    setPhoto(photo) {
        this.photo = photo;
    }
}

class GiftMatching {
    constructor() {
        // initialise tree structure with categories, sub categories, items 
        //work in progress (mechanism works but need to add + refine options)
        this.root = new TreeNode("root");

        const forHim = new TreeNode("for him");
        const forHer = new TreeNode("for her");
        this.root.addChild(forHim);
        this.root.addChild(forHer);

        const home = new TreeNode("home");
        const sports = new TreeNode("sports");
        const music = new TreeNode("music");
        const fashion = new TreeNode("fashion");
        const electronics = new TreeNode("electronics"); 

        forHim.addChild(home);
        forHim.addChild(sports);
        forHim.addChild(music);
        forHim.addChild(fashion);
        forHim.addChild(electronics);

        forHer.addChild(home);
        forHer.addChild(sports);
        forHer.addChild(music);
        forHer.addChild(fashion);
        forHer.addChild(electronics);

        this.addKitchen(home);
        this.addBedroom(home);
        this.addBathroom(home);

        this.addOutdoors(sports);
        this.addTechnology(sports);
        this.addFitnessEquipment(sports);

        this.addExperiences(music);
        this.addTechnology(music);
        this.addInstruments(music);

        this.addAccessories(fashion);
        this.addBags(fashion);
        this.addBeauty(fashion.forHer);
        this.addGrooming(fashion.forHim);

        this.addHomeDevices(electronics);
        this.addGadgets(electronics);
        this.addGaming(electronics);

        this.currentCategory = null;
        this.currentOptionIndex = 0;
        this.optionHistory = []; 
        this.displayingUrl = false;

        this.categoryContainer = document.getElementById("current-category");
        this.choicesContainer = document.getElementById("choices-container");

    addHome(forHim, forHer, homeCategory) 
    {
        const KitchenItemsForHim = [
            {name: "High-quality chef's knife", photo:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRh-Gv3K_hnwd43-6W3kIAZ5cOBB_ZpOJfcwUXFG-1S8IAZDhimvy_vW9hMP8euonXOG-GZhR97ZPLITsr5RllCkZcSInbThZhsDlNWj1unyvcFz_xvpFRLbA&usqp=CAE", link:"https://huuskknife.co.uk/"},
            {name: "Personalized cutting board", photo:"https://i.ebayimg.com/images/g/T-oAAOSw3ydVj1FC/s-l1200.jpg", link:"https://woodenchoppingboards.co.uk/product/3cm-thick-long-grain-chopping-board-customisable/"},
            {name: "Stylish coffee mugs", photo:"https://m.media-amazon.com/images/I/71LBbfdgpcL.jpg", link:"https://www.amazon.com/Mineral-Crystal-Multi-colored-Crystals-Decorative/dp/B0DJSPLNJB?th=1"},
            {name: "Herbs or plants for the kitchen", photo:"https://www.thespruce.com/thmb/dfYtLo_VkCYblQxjImZPuyPMs2g=/3774x2516/filters:no_upscale()/plant-a-kitchen-herb-garden-1762222-02-28eb943176934cbd82747b31655f6b8a.jpg", link:"https://www.happyhouseplants.co.uk/collections/kitchen-houseplants/products/zamioculcas-zamiifolia-zz-plant"},            
            ];
    
        const KitchenItemsForHer = [
            {name: "Baking goods", photo:"https://m.media-amazon.com/images/I/81CZGbDASQL.jpg", link:"https://www.amazon.co.uk/Complete-Springform-Decorating-Silicone-Beginners/dp/B07NJBKTXW"},
            {name: "Personalized cutting board", photo:"https://i.ebayimg.com/images/g/T-oAAOSw3ydVj1FC/s-l1200.jpg", link:"https://woodenchoppingboards.co.uk/product/3cm-thick-long-grain-chopping-board-customisable/"},
            {name: "Stylish coffee mugs", photo:"https://m.media-amazon.com/images/I/71LBbfdgpcL.jpg", link:"https://www.amazon.com/Mineral-Crystal-Multi-colored-Crystals-Decorative/dp/B0DJSPLNJB?th="},
            {name: "Herbs or plants for the kitchen", photo:"https://www.thespruce.com/thmb/dfYtLo_VkCYblQxjImZPuyPMs2g=/3774x2516/filters:no_upscale()/plant-a-kitchen-herb-garden-1762222-02-28eb943176934cbd82747b31655f6b8a.jpg", link:"https://www.happyhouseplants.co.uk/collections/kitchen-houseplants/products/zamioculcas-zamiifolia-zz-plant"},
            ];
    
        const BedroomItems = [
            {name: "Soft cotton bedding set", photo: "https://www.musburyfabrics.co.uk/pub/media/catalog/product/cache/591d45d3ff006e2272c7ee8702546852/0/a/0a4b34e9a27b46ccbcc648d1c76bef79128586e844ac75d5ca65ce61a1674ca7.jpeg", link:"https://www.musburyfabrics.co.uk/dreams-drapes-derwent-check-100-brushed-cotton-duvet-set.html"},
            {name: "Memory foam pillow", photo: "https://cosihome.com/cdn/shop/files/2_713d26ac-7b37-4e8a-8191-4b3450a72e3e_1500x.jpg?v=1700160544", link:"https://cosihome.com/products/memory-foam-pillow-with-adjustable-filling-2-pack"},                {name: "Personalized blanket", photo: "https://c-static.smartphoto.com/structured/repositoryimage/productcategory/fun_ideas/blanket/topimages/0002/image/blanket-carrousel2.jpg", link:"https://www.smartphoto.co.uk/photo-gifts/personalised-blanket"},
            {name: "Sleek nightstands or lamps", photo: "https://www.cplights.com/news/wp-content/uploads/2023/05/Black-Bedside-Lamp-700x700.jpeg", link:"https://www.amazon.co.uk/Merano-Lecce-Shade-Tinted-Cotton/dp/B0D2L5CJLK"},
            ];
    
        const BathroomItems = [
            {name: "Fluffy towels", photo: "https://hips.hearstapps.com/hmg-prod/images/secret-to-super-soft-towels-1675782018.jpg?crop=0.670xw:1.00xh;0.321xw,0&resize=640:*", link:'https://www.johnlewis.com/john-lewis-egyptian-cotton-towels/p4851977?'},
            {name: "Luxury bathrobe", photo: "https://i.etsystatic.com/19603880/r/il/aeee18/6232933598/il_fullxfull.6232933598_rp94.jpg", link:"irclickid=35FVvtVNyxyKUnfVfF09o2cKUksxIdTuk1UUUQ0&irgwc=1&tmcampid=99&s_afcid=af_10078_Content"},                {name: "Scented candles", photo: "https://www.essentialparfums.com/wp-content/uploads/BOUGIE_PARFUMEE-SCENTED_CANDLE_bois-imperial.jpg", link:"https://www.etsy.com/uk/listing/944157514/royal-burgundy-mens-robe-with-gold-greek"},
            {name: "Shower organizer", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodBPvQce8Aus-IVxGFoRsQ_VMxsXcR5j3EA&s", link:'https://www.baumea.com/en/products/bois-imperial-bougie-parfumee-270g'},
            ];
    
        const addItemsToCategory = (category, items) => 
            {
            items.forEach(item => {
                const node = new TreeNode(item.name);                    
                node.setUrl(item.link);
                node.setPhoto(item.photo);
                category.addChild(node);
            });
        };
    
        const kitchenCategoryForHim = new TreeNode("kitchen");
        const kitchenCategoryForHer = new TreeNode("kitchen");
        homeCategory.addChild(kitchenCategoryForHim);
        homeCategory.addChild(kitchenCategoryForHer);
    
        addItemsToCategory(kitchenCategoryForHim, kitchenItemsForHim);
        addItemsToCategory(kitchenCategoryForHer, kitchenItemsForHer);
    
        addItemsToCategory(homeCategory, bedroomItems);
        addItemsToCategory(homeCategory, bathroomItems);
        }
    }

    addSports(forHim, forHer, sportsCategory) 
    {
        const OutdoorItemsForHim = [
            {name: "Camping gear", photo: "https://shopeverbeam.com/cdn/shop/articles/184._when_is_the_best_time_to_buy_camping_gear_1_600x.png?v=1697699009", link:"https://www.gooutdoors.co.uk/16560013/oex-hyena-ii-tunnel-tent-16560013"},
            {name: "Hiking backpack", photo: "https://www.trekking-mont-blanc.com/wp-content/uploads/2020/09/couverture-1080x675-1-1080x675.jpg", link:"https://www.osprey.com/gb/featured/gift-guide/osprey-talon-pro-20-s24?size=One+Size&colour=Mars+Orange"},
            {name: "Portable cooler", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUbqdw6g6Q9By9-AuEdqOrYaLuNTDDzSkIA&s", link:"https://www.koolatron.co.uk/products/p25-fun-kool-cooler-24l"},
            {name: "Outdoor speaker", photo: "https://m.media-amazon.com/images/I/61PhK7fpivL._AC_UF1000,1000_QL80_.jpg", link:"https://www.amazon.co.uk/Power-Dynamics-Speakers-Weatherproof-Background-White/dp/B07X38QN2S"},
        ];

        const OutdoorItemsForHer = [
            {name: "Gym Bag", photo: "https://m.media-amazon.com/images/I/61TdgubQ8AL._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/Gym-Bags/b?ie=UTF8&node=1769578031"},
            {name: "Badminton set", photo: "https://m.media-amazon.com/images/I/61sf0BK3WKL._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/Complete-Badminton-Set/b?ie=UTF8&node=671650011"},
            {name: "Gym water bottle", photo: "https://m.media-amazon.com/images/I/6144HdhVIWL._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/gym-water-bottle/s?k=gym+water+bottle"},
            {name: "Portable lantern", photo: "https://m.media-amazon.com/images/I/61Uk9aXEWFL._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/Camping-Lights-Lanterns/b?ie=UTF8&node=3076595031"},
        ];

        const TechItems = [
            {name: "Smart home devices", photo: "https://hips.hearstapps.com/hmg-prod/images/smart-home-1671455121.png", link:"https://www.amazon.co.uk/Arlo-Outdoor-Security-Wireless-8-Month/dp/B0C8V611JJ"},
            {name: "Wireless headphones", photo: "https://m.media-amazon.com/images/I/61kFsU+CYkL._AC_UF1000,1000_QL80_.jpg", link:"https://www.amazon.co.uk/DOQAUS-Bluetooth-Headphones-Playtime-Microphone-Black/dp/B07Q1YXVWH"},
            {name: "Smartwatch", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5afayEGD20Qlr9ApoGeIpu-JdhdiaBKaO9w&s", link:"https://www.ebay.co.uk/itm/144832366937"},
            {name: "Portable charger", photo: "https://media.wired.com/photos/6504b2a1afe02332db973557/master/w_960,c_limit/Ugreen_Power_Bank-SOURCE-Ugreen-Gear.jpg", link:"https://www.ebay.co.uk/itm/126047881528"},
        ];

        const FitnessItems = [
            {name: "Yoga mat", photo: "https://m.media-amazon.com/images/I/81JKZfxhBNL._AC_UF894,1000_QL80_.jpg", link:"https://www.corebalance.co.uk/tpe-yoga-alignment-mat.html"},
            {name: "Dumbbells or kettlebells", photo: "https://www.rebelstrength.co.uk/app/uploads/2022/03/Adjustable-Weight-Dumbbells-222-Pair-White-Background.jpeg", link:"https://www.rebelstrength.co.uk/product/adjustable-weight-dumbbells/"},
            {name: "Resistance bands", photo: "https://media.gq.com/photos/5ef0b0227b6ab974cf831e50/1:1/w_4086,h_4086,c_limit/GQ-Resistance-Bands-062220.jpg", link:"https://www.amazon.co.uk/PTP-Unisex-Adult-Fitness-Bands/dp/B0853PTRJ2"},
            {name: "Jump rope", photo: "https://m.media-amazon.com/images/I/61J65Fm47HL.jpg", link:"https://www.amazon.co.uk/Vector-X-Sleek-Jump-Rope/dp/B015E1JVN6"},
        ];

        const addItemsToCategory = (category, items) => {
            items.forEach(item => {
                const node = new TreeNode(item.name);
                node.setUrl(item.link);
                node.setPhoto(item.photo);
                category.addChild(node);
            });
        };

        const sportsCategoryForHim = new TreeNode("sports");
        const sportsCategoryForHer = new TreeNode("sports");
        sportsCategory.addChild(sportsCategoryForHim);
        sportsCategory.addChild(sportsCategoryForHer);

        addItemsToCategory(sportsCategoryForHim, sportsItemsForHim);
        addItemsToCategory(sportsCategoryForHer, sportsItemsForHer);
        addItemsToCategory(sportsCategoryForHim, techItems);
        addItemsToCategory(sportsCategoryForHer, techItems);
        addItemsToCategory(sportsCategoryForHim, fitnessItems);
        addItemsToCategory(sportsCategoryForHer, fitnessItems);
        }
    }

    addMusic(forHim, forHer, musicCategory) 
    {
        const ExperienceGiftsForHim = [
            {name: "VIP concert experience", photo: "https://weezevent.com/wp-content/uploads/2020/01/06180821/astuces-experience-vip-evenements-musicaux.jpg", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fweezevent.com%2Fen-gb%2Fblog%2Ftips-vip-experience-music-events%2F&psig=AOvVaw3VzgknR9I5KSYl59hgTX6p&ust=1737914912785000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDll9y7kYsDFQAAAAAdAAAAABAE"},
            {name: "Music festival tickets", photo: "https://d31fr2pwly4c4s.cloudfront.net/9/0/1/1903063_3d64c3bf_country-club-outdoor-country-music-festival-london_1024.jpg", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.skiddle.com%2Fwhats-on%2FLondon%2FLDN-EAST%2FCountry-Club---Outdoor-Country-Music-Festival----London%2F40497639%2F&psig=AOvVaw1AEMnZFGVkNDV6gwhtXgSM&ust=1737914808157000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiZmqu7kYsDFQAAAAAdAAAAABAE"},
            {name: "Soundwave art", photo: "https://i.etsystatic.com/12072125/r/il/af9618/1390252060/il_570xN.1390252060_bm1s.jpg", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Fuk%2Flisting%2F278118660%2Fcustom-sound-wave-art-on-canvas-sound&psig=AOvVaw27Ohr_jqmaw1baEVHPp5Hc&ust=1737914855009000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCID60L67kYsDFQAAAAAdAAAAABAE"},
            {name: "Online music masterclass subscription", photo: "https://sinee.de/media/1e/73/b6/1736938660/WEBSITE_BANNER%20MOCKUP%20KATEGORIEN_DannyWabbit%20(1).png", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsinee.de%2Fen%2Feducation%2Fmasterclasses%2F&psig=AOvVaw3fZ8Mc-WwzRsThArlf5k8-&ust=1737914887533000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDvs867kYsDFQAAAAAdAAAAABAE"},
        ];
    
        const RxperienceGiftsForHer = [
            {name: "Spotify subscription", photo: "https://m.media-amazon.com/images/I/51rttY7a+9L.png", link:"https://www.spotify.com/uk/premium/"},
            {name: "Apple Music subscription", photo: "https://help.apple.com/assets/6716BE853414F9E73601CAF4/6716BE87B1C5F9E1A2081580/en_GB/14afc11a08e3fe617b2404ee08a0d0af.png", link:"https://www.apple.com/uk/apple-music/"},
            {name: "Vinyl subscription box", photo: "https://vf-images.s3.amazonaws.com/wp-content/uploads/2016/07/flying-vinyl.jpg", link:"https://www.waxandstamp.com/"},
        ];
    
        const TechnologyForHim = [
            {name: "Smart home speaker (Google Nest, Alexa)", photo: "https://hips.hearstapps.com/hmg-prod/images/smart-home-speakers-amazon-echo-google-nest-1-1676494734.jpg", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popularmechanics.com%2Ftechnology%2Fgear%2Fa42917641%2Famazon-echo-vs-google-nest%2F&psig=AOvVaw0MF7hqzQe0tkZVmcZJPgmy&ust=1737914951118000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPD8qOy7kYsDFQAAAAAdAAAAABAE"},
            {name: "Music production software (e.g., Ableton, Logic Pro)", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnwqdoDdICwd-N8JEpqsrrX2PV5Q69h2J7zw&s", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thedjshop.co.uk%2Fblog%2FBest-Music-Production-Software&psig=AOvVaw23x_6gos2nkZf1_avrVkCi&ust=1737915032876000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPi2gZO8kYsDFQAAAAAdAAAAABAE"},
            {name: "Wireless earbuds (Bose, Sony)", photo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUVX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713296133678", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fuk%2Fshop%2Fproduct%2FMUVX3ZM%2FA%2Fbeats-solo-buds-true-wireless-earbuds-arctic-purple&psig=AOvVaw1b9MuP9blbA4lOQd0aXrqL&ust=1737915003781000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCWroW8kYsDFQAAAAAdAAAAABAE"},
            {name: "Bluetooth turntable for vinyl records", photo: "https://www.hifix.co.uk/wp-content/uploads/2022/12/products-52078-1_3.jpg", link:"https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjClcPux5GLAxVMlVAGHcm6HoYYABAcGgJkZw&co=1&ase=2&gclid=CjwKCAiAtNK8BhBBEiwA8wVt9y-gyE25vKA-54HxqS__qAnFVe9UBlPZyTtRaKP16KabAVK6T0ySyxoCe64QAvD_BwE&ohost=www.google.com&cid=CAESV-D2lLP-2Jg36V1RMxMc9AorxNZRZJ0YFHbXMnTXhZ1QFgMuccoosuJkr1ZdizWYyPosmyhysotTsoV5VW8jPzK7huF28GcB4DuFU0i6L_1KXZO7W0zMAA&sig=AOD64_3qUQdcnFhfW6aE2qmWIjcW4j1ZKQ&ctype=5&q=&nis=4&ved=2ahUKEwjB6bvux5GLAxV2X0EAHQvzI_wQ9aACKAB6BAgFEBQ&adurl="},
        ];
    
        const TechnologyForHer = [
            {name: "Wireless earbuds", photo: "https://m.media-amazon.com/images/I/61hf2tu4IvL.jpg", linl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FWireless-Bluetooth-Headphones-Earphones-Cancelling-Black%2Fdp%2FB0CXCTVJ3W&psig=AOvVaw1mmlQkvHe_GlIGv0g0Kw9S&ust=1737915203933000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKCdhPC8kYsDFQAAAAAdAAAAABAE"},
            {name: "Bluetooth speaker", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sencor.com%2Fspeaker%2Fsirius-2-mini-black&psig=AOvVaw3u4VISMUZdjn0jbb-RBPeb&ust=1737915180647000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCNjnuNm8kYsDFQAAAAAdAAAAABAE"},
            {name: "Smartwatch", photo: "https://www.mytrendyphone.co.uk/images/Xiaomi-Mibro-C2-Waterproof-Smartwatch-White-6971619678079-24012023-01-p.webp", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mytrendyphone.co.uk%2Fshop%2Fxiaomi-mibro-c2-waterproof-smartwatch-304632p.html&psig=AOvVaw0RZaCOydQtmhX7mc0Qtiwy&ust=1737914598596000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPjtvsS6kYsDFQAAAAAdAAAAABAE"},
            {name: "Fitness tracker", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmH1rEC9foQ84u_xkIU01P-yoRG3s30xUCQ&s", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.co.uk%2FFitness-Tracker-Waterproof-Activity-Temperature%2Fdp%2FB09M3LQ6WB&psig=AOvVaw2HbrKKIb7yytiCZmhZ7eVl&ust=1737914635440000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCJDS5dW6kYsDFQAAAAAdAAAAABAE"}
        ];

        const Instruments = [
            {name: "Acoustic guitar", photo: "https://r2.gear4music.com/media/35/357692/600/preview_3.jpg", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gear4music.com%2FGuitar-and-Bass%2FSingle-Cutaway-Electro-Acoustic-Guitar-by-Gear4music-Black%2F7IA&psig=AOvVaw3Ee9KgFn2cZXp7GGkI0HPO&ust=1737915147239000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjCgcu8kYsDFQAAAAAdAAAAABAE"},
            {name: "Electric keyboard", photo: "https://www.keyboardpiano.co.uk/wp-content/uploads/2020/01/Alesis_Melody_61_MKII.jpg", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.keyboardpiano.co.uk%2Fkeyboards%2Falesis-melody-61-mkii-61-key-electric-keyboard%2F&psig=AOvVaw09DBn2BWZ1KmcJF1RTJGJc&ust=1737915094037000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPiKjLC8kYsDFQAAAAAdAAAAABAE"},
            {name: "Ukulele", photo: "https://octopusukulele.co.uk/cdn/shop/files/UK208-NAT_11.jpg?v=1719923959", link:"https://www.google.com/url?sa=i&url=https%3A%2F%2Foctopusukulele.co.uk%2Fproducts%2Fuk208-nat&psig=AOvVaw12PKu2DyIrHwT6ONDaZ4nq&ust=1737915128695000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCKjQkMG8kYsDFQAAAAAdAAAAABAE"},
            {name: "Electric guitar", photo: "https://derosamusic.co.uk/cdn/shop/products/E375BLK_2.jpg?v=1702063642", link: "https://www.google.com/url?sa=i&"}
        ];
    
        const addItemsToCategory = (category, items) => {
            items.forEach(item => {
                const node = new TreeNode(item.name);
                node.setUrl(item.link);
                node.setPhoto(item.photo);
                category.addChild(node);
            });
        };
    
        const musicCategoryForHer = new TreeNode("music");
        const musicCategoryForHim = new TreeNode("music");
        musicCategory.addChild(musicCategoryForHer);
        musicCategory.addChild(musicCategoryForHim);
    
        addItemsToCategory(musicCategoryForHer, experienceGiftsForHer);
        addItemsToCategory(musicCategoryForHim, experienceGiftsForHim);
        addItemsToCategory(musicCategoryForHer, technologyForHer);
        addItemsToCategory(musicCategoryForHim, technologyForHim);
    }
    
    addFashion(forHim, forHer, fashionCategory) 
    {
        const AccessoriesForHer = [
            {name: "Personalized jewelry (name necklace, birthstone ring)", photo: "https://www.jewlr.com/uk/product-img/JWLN0300.jpg?dim=767&view=np&sku=14KY&o1=Classic&s1&s2&s3&s4&s5&s6&s7&ef=Glamorous&e1&e0&ch=14F14KYDC", link: "https://www.jewlr.com/uk/products/JWLN0300/14k-yellow-gold-name-necklace-glamorous-font?shopfeed=1&a1=&ef=Glamorous&sku=14KY&utm_source=google&utm_medium=cpc&utm_campaign=PLA_UK_Bestsellers&gad_source=4&gclid=CjwKCAiAtNK8BhBBEiwA8wVt9wDR7I4lhssIvImAR2_-PmLH3Kkg0XKFIaseL2uYqfkfYyIicogjbhoCweQQAvD_BwE"},
            {name: "Sunglasses with unique frames", photo: "https://specscart.co.uk//media/catalog/product/2/2/2290_c5-3.webp", link: "https://specscart.co.uk/sunglasses/funky-sunglasses?srsltid=AfmBOopg3U07J7kDlXAuSe5Bm2rj1MJBbK4MzbOOXZd0UE_jbY735gvM"},
            {name: "Silk scarf or shawl", photo: "https://i0.wp.com/beckfordsilk.co.uk/wp-content/uploads/2015/02/Autumn-Leaves-Blue-With-Box.jpg?resize=800%2C800&ssl=1", link: "https://beckfordsilk.co.uk/product-category/shop/silk-scarves-clothing/silk-scarves/"},
            {name: "Chic watches", photo: "https://www.balmainwatches.com/media/catalog/product/cache/9c12b7762f2b7fd9345139f51e0f3043/b/7/b7691.33.62_face.png", link: "https://www.balmainwatches.com/en/collections/elegance-chic?srsltid=AfmBOorQln_H_MFWOAth1Fpb8Lp9KS6yi5UFuUI98e1sX8kQfzNglcEW"},
        ];
    
        const BagsForHer = [
            {name: "Designer handbag", photo: "https://www.flannels.com/images/products/70602303_h.jpg", link: "https://www.flannels.com/clearance/women/bags"},
            {name: "Convertible crossbody bag", photo: "https://pacsafe.co.uk/cdn/shop/files/PacsafeGO_LunarCrossbody_400x.jpg?v=1722933309", link: "https://pacsafe.co.uk/collections/crossbody-bags?srsltid=AfmBOoo-JjMxor64BwxbByth6PGQfaJYxOQPvYN8-wJFgtRG1xRCsJIt"},
            {name: "Tote bag for work or travel", photo: "https://uk.beistravel.com/cdn/shop/files/BEIS324648-LARGEWorkTote-Beige-Product-Side_1896_V1.jpg?v=1718044906&width=550", link: "https://uk.beistravel.com/collections/work-totes"},
            {name: "Minimalist leather wallet", photo: "https://www.slimwalletjunkie.com/cdn/shop/products/wallet-bellroy-micro-sleeve-1_600x.jpeg?v=1603481325", link: "https://www.slimwalletjunkie.com/"},
        ];
    
        const BeautyForHer = [
            {name: "Luxury skincare set", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKXhOm9_MdKb9tERJYzjisfogYX4OPVR6Kw&s", link: "https://www.google.com/search?sca_esv=d645707ffb8e0e1d&sxsrf=AHTn8zo1FMTy58qRJk6AmeBDvffZc_tb0g:1737829374869&q=Luxury+skincare+set&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpRMKsMcxP7tZYa-Fso78DLnG26_RyyhFYNly7eVgFqtWQmxRylV2x7VEfbq1PCtOcDhaXHLAO_ellD_n0YZ2BFeppUZiHZM3ufdI2ISFLkkLQ30f_7yA2pI77D37FZXg25tR0nDTQONVF_0Mg7VZdUJ90VkQnrymXCnCDaDkOOuZK3UXJHuH74eDAX0zSgu8_9KyGMg&sa=X&ved=2ahUKEwjN3sb0vpGLAxWjU0EAHa3mBMgQtKgLegQIEBAB&biw=1067&bih=780&dpr=2#vhid=5bVHEErP_7QW3M&vssid=mosaic"},
            {name: "Perfume (premium scent)", photo: "https://www.thepremiumfragrance.co.uk/cdn/shop/products/Inspired-by-Aventus-For-Him-PF253_9e5bd1f1-8a3e-4211-8d18-9f724560ae46.png?v=1670323515", link: "https://www.thepremiumfragrance.co.uk/products/inspired-by-aventus-for-him-pf-253"},
            {name: "Makeup set", photo: "https://cdn1.feelunique.com/img/products/184265/m_a_c_tiny_treasures_mini_lip_duo-1727594212.jpg", link: "https://www.sephora.co.uk/p/mac-tiny-treasures-mini-lip-duo"},
            {name: "Hair styling tools (e.g., straightener, curler)", photo: "https://assets.boots.com/content/dam/boots/advice/electrical/hair-curlers-buyers-guide/advice_electrical_hair-stylers-buyers-guide_100-teaser_10283649.dam.361x135x1280.ts%3D1640081829434.jpg", link: "https://www.boots.com/electrical-inspiration-and-advice/hair-curlers-buyers-guide"},
        ];
    
        const AccessoriesForHim = [
            {name: "Leather bracelet", photo: "https://www.trollbeads.co.uk/cdn/shop/files/16_3bd78457-fb44-4b2d-8343-263fbf5f57d9.jpg?v=1726652007&width=540", link: "https://www.trollbeads.co.uk/collections/leather?srsltid=AfmBOooo6E-o8papmE4fyIyOWv6sI4IJBAvmLUS9LDsRZcrKOYEbMBOj"},
            {name: "Watch with metal strap", photo: "https://www.ernestjones.co.uk/productimages/processed/V-3255778_0_260.jpg?pristine=true", link: "https://www.ernestjones.co.uk/l/stainless-steel-strap-watches"},
            {name: "Cufflinks", photo: "https://example.com/cufflinks.jpg", link: "https://www.example.com/cufflinks"},
        ];

        const BagsForHim = [
            {name: "Leather duffle bag", photo: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_ciXgzfT522LeQ9II0zqqn2U1BJ9R3dI8MphWHvuaAtWn7H8c99vh_5dALu5HJ87j21Lzn9Gr_0Oj_ygW9GLQXAvIJCQmuQGMQC8RZPzsTsPTIPhnN8UBpQ", link:"https://www.google.com/search?q=Leather+duffle+bag&sourceid=chrome&ie=UTF-8#oshopproduct=cid:13040013608579508617,oid:4819155651948541254,iid:15651857277420421299,rds:UENfMTg5ODM2NzI4MjA3OTcyNzMyNXxQUk9EX1BDXzE4OTgzNjcyODIwNzk3MjczMjU%3D,pvt:hg,pvo:3&oshop=apv&pvs=0"},
            {name: "Briefcase for work", photo: "https://cdn.shopify.com/s/files/1/0373/9909/files/carl-friedrik-PDP-packshot-palissy-briefcase-Cognac-1_6dfa44db-6d0a-4ae2-a8e2-746df7c3cd05.jpg?v=1712674952&width=1200&height=1500&crop=center", link:"https://www.carlfriedrik.com/int/products/palissy-briefcase-slim-leather-briefcase?variant=39498420224102&g_campaignid=17250507322&g_adid=&g_keywordid=&g_acctid=132-425-7468&g_keyword=&g_network=x&g_campaign=Google_PerformanceMax_UK&g_adtype=none&g_adgroupid=&gad_source=1&gclid=CjwKCAiAtNK8BhBBEiwA8wVt94CJgGknTbaJpcbY99idVnziNHxKj43wspECGUikLrIPqEC_s2beXRoCi5AQAvD_BwE&colour=cognac"},
            {name: "Backpack for travel", photo: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSopI5nvfNk__qRDhhOKebFx0FRpFCT_Bx96KE8eiPnZMIiIgkVdRSFduncpTsixU0KEOPAGf9IMiYS9bZXcQYCBTacKE4zNESIF4rpKrJLHnylj_iXGezr4e0", link:"https://www.decathlon.co.uk/p/travel-backpack-40-l-travel-500-organizer-khaki/_/R-p-338564?mc=8787845&c=black_green&utm_term=8787845-4777408&srsltid=AfmBOoo4g2DkgrZ-Ino51PjxFrS0UETwSwAy8ttcEb9dkJBxpk03HLhXn4s&gStoreCode=2020&gQT=1"},
            {name: "Wallet with cardholder", photo: "https://m.media-amazon.com/images/I/81CQj1xO6TL._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/b?ie=UTF8&node=11968000031"},
        ];
        
        const GroomingForHim = [
            {name: "Premium shaving kit", photo: "https://m.media-amazon.com/images/I/51zJfauR0PL._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/s?k=Premium+shaving+kit&rh=n%3A11968000031&ref=nb_sb_noss"},
            {name: "Beard grooming set", photo: "https://m.media-amazon.com/images/I/81PW3j6Gm-L._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/s?k=Beard+grooming+set&i=fashion-luggage&crid=3JSC3VPBQ7HEM&sprefix=beard+grooming+set%2Cfashion-luggage%2C78&ref=nb_sb_noss_1"},
            {name: "Hair styling products", photo: "https://m.media-amazon.com/images/I/613sHK1inWL._AC_UL640_FMwebp_QL65_.jpg", link:"https://www.amazon.co.uk/s?k=Hair+styling+products&i=fashion-luggage&crid=2874TJGVHY3PW&sprefix=hair+styling+products%2Cfashion-luggage%2C82&ref=nb_sb_noss_2"},
            {name: "Men's cologne", photo: "https://media.theperfumeshop.com/medias/sys_master/prd-images/h28/h02/9836154814494/prd-front-1137306_420x420/ralph-lauren-polo-red-eau-de-toilette-spray-420x420.png", link:"https://www.theperfumeshop.com/ralph-lauren/polo-red/eau-de-toilette-spray/p/74240EDTJU"},
        ];
    
        const fashionCategoryForHer = new TreeNode("fashion");
        const fashionCategoryForHim = new TreeNode("fashion");
        fashionCategory.addChild(fashionCategoryForHer);
        fashionCategory.addChild(fashionCategoryForHim);
    
        const addItemsToCategory = (category, items) => {
            items.forEach(item => {
                const node = new TreeNode(item.name);
                node.setUrl(item.link);
                node.setPhoto(item.photo);
                category.addChild(node);
            });
        };
    
        addItemsToCategory(fashionCategoryForHer, accessoriesForHer);
        addItemsToCategory(fashionCategoryForHer, bagsForHer);
        addItemsToCategory(fashionCategoryForHer, beautyForHer);
        addItemsToCategory(fashionCategoryForHim, accessoriesForHim);
        addItemsToCategory(fashionCategoryForHer, BagsForHim);
        addItemsToCategory(fashionCategoryForHim, GroomingForHim);
    };
    
    addElectronics(forHim, forHer, electronicsCategory) 
    {
        const homeDevicesForHim = [
            {name: "Smart light bulbs", photo: "https://media.4rgos.it/s/Argos/1931714_R_SET?w=540&h=540&qlt=75&fmt=webp", link: "https://www.argos.co.uk/browse/technology/smart-home-technology/smart-lighting/smart-light-bulbs/c:798520/"},
            {name: "Robot vacuum", photo: "https://media.currys.biz/i/currysprod/10264680?$g-small$&fmt=auto", link: "https://www.currys.co.uk/appliances/floorcare/vacuum-cleaners/robot-vacuum"},
            {name: "Smart thermostat", photo: "https://m.media-amazon.com/images/I/61FJIheuAnL._AC_UL640_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/Smart-Thermostat/s?k=Smart+Thermostat"},
            {name: "Air purifier", photo: "https://m.media-amazon.com/images/I/71fkGcW18sL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/Air-Purifiers/b?ie=UTF8&node=3147771"},
        ];
    
        const gadgetsForHim = [
            {name: "Smart home speaker (Google Nest, Alexa)", photo: "https://hips.hearstapps.com/hmg-prod/images/smart-home-speakers-amazon-echo-google-nest-1-1676494734.jpg", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popularmechanics.com%2Ftechnology%2Fgear%2Fa42917641%2Famazon-echo-vs-google-nest%2F&psig=AOvVaw0MF7hqzQe0tkZVmcZJPgmy&ust=1737914951118000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPD8qOy7kYsDFQAAAAAdAAAAABAE"},
            {name: "Wireless earbuds (Bose, Sony)", photo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUVX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713296133678", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fuk%2Fshop%2Fproduct%2FMUVX3ZM%2FA%2Fbeats-solo-buds-true-wireless-earbuds-arctic-purple&psig=AOvVaw1b9MuP9blbA4lOQd0aXrqL&ust=1737915003781000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCWroW8kYsDFQAAAAAdAAAAABAE"},
            {name: "Smart home assistant", photo: "https://fgg.eav.mybluehost.me/website_2e40961a/wp-content/uploads/2019/02/Amazon-Echo-Google-Home-Mini-speakers-DHM-5D301335-1920x1024px.jpg", link: ""},
            {name: "Wearable Fitness Trackers", photo: "https://cdn.thewirecutter.com/wp-content/media/2023/06/fitnesstrackers-2048px-09819-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200", link: ""},
        ];
    
        const gamingForHim = [
            {name: "Nintendo Switch", photo: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_auto:low/MNS/Content%20Pages%20Assets/Category-List%20Pages/Consoles/Nintendo%20Switch%20Hub/2000x1125_Consoles_Switch_Flagship_BeautyShot", link: "https://store.nintendo.co.uk/en/consoles/nintendo-switch-consoles/nintendo-switch?srsltid=AfmBOopeUFXkJISBpLti62qYfDbmoR8ceYBVuc_EBFQRexdkjJW7dlC1"},
            {name: "Gaming headphones", photo: "https://m.media-amazon.com/images/I/71Q4vV5z2HL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/gaming-headset/s?k=gaming+headset"},
            {name: "PlayStation or Xbox gift card", photo: "https://m.media-amazon.com/images/I/71YJ63IidRL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/s?k=xbox+gift+card&adgrpid=52404565839&hvadid=259066362372&hvdev=c&hvlocphy=9198486&hvnetw=g&hvqmt=e&hvrand=1289035269662169064&hvtargid=kwd-296083257270&hydadcr=801_1866658&mcid=3038a7acd5f73a2aacb2602c3d7b10b3&tag=googhydr-21&ref=pd_sl_71o3ubf0de_e"},
            {name: "Virtual reality headset", photo: "https://m.media-amazon.com/images/I/71xsZC+tLSL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/Virtual-Reality-Headsets/s?k=Virtual+Reality+Headsets"},
        ];
    
        const homeDevicesForHer = [
            {name: "Smart speaker with voice assistant", photo: "https://m.media-amazon.com/images/I/613dEoF9-rL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/voice-activated-speaker/s?k=voice+activated+speaker"},
            {name: "Ambient lighting system", photo: "https://m.media-amazon.com/images/I/71dYjKthyFL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/ambient-lighting-car/s?k=ambient+lighting+car"},
            {name: "Heated blanket with adjustable settings", photo: "https://m.media-amazon.com/images/I/71FS2MoeIZL._AC._SR360,460.jpg", link: "https://www.amazon.co.uk/Electric-Bed-Blankets/b?ie=UTF8&node=49980776031"},
            {name: "Air purifier with aromatherapy", photo: "https://m.media-amazon.com/images/I/71wRS1PS9YL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/air-purifier-oils/s?k=air+purifier+with+oils"},
        ];
    
        const gadgetsForHer = [
            {name: "Smart home speaker (Google Nest, Alexa)", photo: "https://hips.hearstapps.com/hmg-prod/images/smart-home-speakers-amazon-echo-google-nest-1-1676494734.jpg", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popularmechanics.com%2Ftechnology%2Fgear%2Fa42917641%2Famazon-echo-vs-google-nest%2F&psig=AOvVaw0MF7hqzQe0tkZVmcZJPgmy&ust=1737914951118000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCPD8qOy7kYsDFQAAAAAdAAAAABAE"},
            {name: "Wireless earbuds (Bose, Sony)", photo: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUVX3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713296133678", link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fuk%2Fshop%2Fproduct%2FMUVX3ZM%2FA%2Fbeats-solo-buds-true-wireless-earbuds-arctic-purple&psig=AOvVaw1b9MuP9blbA4lOQd0aXrqL&ust=1737915003781000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCWroW8kYsDFQAAAAAdAAAAABAE"},
            {name: "Smart home assistant", photo: "https://fgg.eav.mybluehost.me/website_2e40961a/wp-content/uploads/2019/02/Amazon-Echo-Google-Home-Mini-speakers-DHM-5D301335-1920x1024px.jpg", link: ""},
            {name: "Wearable Fitness Trackers", photo: "https://cdn.thewirecutter.com/wp-content/media/2023/06/fitnesstrackers-2048px-09819-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200", link: ""},
        ];
    
        const gamingForHer = [
            {name: "Nintendo Switch", photo: "https://assets.nintendo.eu/image/upload/f_auto,c_limit,w_1920,q_auto:low/MNS/Content%20Pages%20Assets/Category-List%20Pages/Consoles/Nintendo%20Switch%20Hub/2000x1125_Consoles_Switch_Flagship_BeautyShot", link: "https://store.nintendo.co.uk/en/consoles/nintendo-switch-consoles/nintendo-switch?srsltid=AfmBOopeUFXkJISBpLti62qYfDbmoR8ceYBVuc_EBFQRexdkjJW7dlC1"},
            {name: "Gaming headphones", photo: "https://m.media-amazon.com/images/I/71Q4vV5z2HL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/gaming-headset/s?k=gaming+headset"},
            {name: "PlayStation or Xbox gift card", photo: "https://m.media-amazon.com/images/I/71YJ63IidRL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/s?k=xbox+gift+card&adgrpid=52404565839&hvadid=259066362372&hvdev=c&hvlocphy=9198486&hvnetw=g&hvqmt=e&hvrand=1289035269662169064&hvtargid=kwd-296083257270&hydadcr=801_1866658&mcid=3038a7acd5f73a2aacb2602c3d7b10b3&tag=googhydr-21&ref=pd_sl_71o3ubf0de_e"},
            {name: "Virtual reality headset", photo: "https://m.media-amazon.com/images/I/71xsZC+tLSL._AC_UY436_FMwebp_QL65_.jpg", link: "https://www.amazon.co.uk/Virtual-Reality-Headsets/s?k=Virtual+Reality+Headsets"},
        ];
        const fashionCategoryForHer = new TreeNode("fashion");
        const fashionCategoryForHim = new TreeNode("fashion");
        fashionCategory.addChild(fashionCategoryForHer);
        fashionCategory.addChild(fashionCategoryForHim);
    
        const addItemsToCategory = (category, items) => {
            items.forEach(item => {
                const node = new TreeNode(item.name);
                node.setUrl(item.link);
                node.setPhoto(item.photo);
                category.addChild(node);
            });
        };
    
        addItemsToCategory(electronicsCategoryForHer, homeDevicesForHer);
        addItemsToCategory(electronicsCategoryForHer, homeDevicesForHim);
        addItemsToCategory(electronicsCategoryForHer, gadgetsForHer);
        addItemsToCategory(electronicsCategoryForHim, gadgetsForHim);
        addItemsToCategory(electronicsCategoryForHer, gamingForHer);
        addItemsToCategory(electronicsCategoryForHim, gamingForHim);
    }
    


    displayChoice() 
    {
        const currentOption = this.currentCategory.children[this.currentOptionIndex];
        if (!currentOption) 
        {
            this.categoryContainer.innerHTML = `<h2>No more options available in this category.</h2>`;
            return;
        }

        if (!this.displayingUrl) 
            {
            this.categoryContainer.innerHTML = `<h2>Current category: ${this.currentCategory.value}</h2>`;
            this.choicesContainer.innerHTML = `
                <p>Do you like this item? ${currentOption.value}</p>
                <button id="swipe-left">Swipe Left (Yes)</button>
                <button id="swipe-right">Swipe Right (No)</button>
            `;

            document.getElementById("swipe-left").onclick = () => this.swipeLeft(currentOption);
            document.getElementById("swipe-right").onclick = () => this.swipeRight();
        } 
        else 
        {
            // if user is done and chose an item, show  URL
            this.categoryContainer.innerHTML = `<h2>Official Product Page:</h2>`;
            this.choicesContainer.innerHTML = `
                <a href="${currentOption.url}" target="_blank">Click here to view product</a>
                <button onclick="giftMatching.goBack()">Go Back to Categories</button>`;
        }
    }

    swipeLeft(option) 
    {
        if (option.children.length > 0) {
            this.optionHistory.push({ category: this.currentCategory, index: this.currentOptionIndex });
            this.currentCategory = option;
            this.currentOptionIndex = 0; // reset index to show first child
        } else {
            // if no more subcategories, show the official product page
            this.displayingUrl = true;
        }
        this.displayChoice();
    }

    swipeRight() 
    {
        if (this.currentOptionIndex < this.currentCategory.children.length - 1) {
            this.currentOptionIndex++;
        } else {
            if (this.optionHistory.length > 0) {
                const lastState = this.optionHistory.pop();
                this.currentCategory = lastState.category;
                this.currentOptionIndex = lastState.index + 1; 
            } else {
                this.categoryContainer.innerHTML = "<h2>No more options available!</h2>";
                return;
            }
        }
        this.displayChoice();
    }

    goBack() 
    {
        this.displayingUrl = false;
        this.currentCategory = this.root;
        this.currentOptionIndex = 0;
        this.displayChoice();
    }

    start() 
    {
        this.categoryContainer.innerHTML = `
            <h2>Select a category</h2>
            <button onclick="giftMatching.selectCategory('for him')">For Him</button>
            <button onclick="giftMatching.selectCategory('for her')">For Her</button>
        `;
        this.choicesContainer.innerHTML = '';
    }

    selectCategory(category) 
    {
        const selectedCategory = this.root.children.find(cat => cat.value === category);
        this.currentCategory = selectedCategory;
        this.categoryContainer.innerHTML = `<h2>Current category: ${category}</h2>`;
        this.choicesContainer.innerHTML = '';

        selectedCategory.children.forEach((child, index) => {
            const button = document.createElement("button");
            button.innerHTML = child.value;
            button.onclick = () => this.selectSubcategory(child);
            this.choicesContainer.appendChild(button);
        });
    }

    selectSubcategory(subcategory) 
    {
        this.currentCategory = subcategory;
        this.currentOptionIndex = 0;
        this.displayChoice();
    }

const giftMatching = new GiftMatching();
giftMatching.start();

