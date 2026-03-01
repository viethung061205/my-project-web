const productData = [
  {
    "id": 1,
    "name": "Frozen doll 01",
    "category": "Toys",
    "price": 98,
    "available": 1,
    "images": [
      "https://i.pinimg.com/1200x/db/02/d7/db02d779bc12239ac936ae62b84fac83.jpg",
      "https://i.pinimg.com/1200x/1a/af/98/1aaf98de8f279083e49356dc9cae0be5.jpg",
      "https://i.pinimg.com/736x/4b/72/44/4b7244a9ee506e83231ecabcebd7be41.jpg"
    ],
    "description": "",
    "image": "https://i.pinimg.com/1200x/db/02/d7/db02d779bc12239ac936ae62b84fac83.jpg"
  },
  {
    "id": 2,
    "name": "Ariel Teddy 01",
    "category": "Toys",
    "price": 150,
    "available": 8,
    "images": [
      "https://i.pinimg.com/1200x/c5/9f/86/c59f86aa868b65c9ab031b42ad328b2c.jpg",
      "https://www.lemon8-app.com/seo/image?item_id=7418776984278303248&index=1&sign=bce2d3838370d0817ebb9f2bd76f04bc",
      "https://assets.mercari-shops-static.com/-/large/plain/3uVWC5xDuSMzQiXGnyQ4xD.webp@jpg"
    ],
    "description": "",
    "image": "https://i.pinimg.com/1200x/c5/9f/86/c59f86aa868b65c9ab031b42ad328b2c.jpg"
  },
  {
    "id": 3,
    "name": "Toy Story Tsum 01",
    "category": "Toys",
    "price": 130,
    "available": 13,
    "images": [
      "https://i.pinimg.com/736x/4f/34/27/4f342795582c9e6b273263d18528c2d0.jpg",
      "https://i.pinimg.com/1200x/94/cd/67/94cd679f8c49f8505be7f66233ee471c.jpg",
      "https://i.pinimg.com/736x/cf/17/fe/cf17fef7364734c0c2fec91e297cd8e5.jpg"
    ],
    "description": "",
    "image": "https://i.pinimg.com/736x/4f/34/27/4f342795582c9e6b273263d18528c2d0.jpg"
  },
  {
    "id": 4,
    "name": "Toy Story Teddy 01",
    "category": "Toys",
    "price": 146,
    "available": 9,
    "images": [
      "https://i.pinimg.com/736x/7c/51/07/7c51077d4900a80275b029e539dbe1ae.jpg",
      "https://i.ebayimg.com/images/g/y8YAAOSwNhRmh6UM/s-l1200.jpg",
      "https://static.wikia.nocookie.net/pixar/images/0/03/Thinkway_Toys_Lotso.jpg/revision/latest/scale-to-width-down/340?cb=20100910222854"
    ],
    "description": "",
    "image": "https://i.pinimg.com/736x/7c/51/07/7c51077d4900a80275b029e539dbe1ae.jpg"
  },
  {
    "id": 5,
    "name": "Stitch Teddy 01",
    "category": "Toys",
    "price": 130,
    "available": 2,
    "images": [
      "https://i.pinimg.com/1200x/17/4d/08/174d0890689261ec6995fd6659ba22d9.jpg",
      "https://i.pinimg.com/1200x/24/7e/fd/247efd12cbdc8dbde4eeb0e49379d1ba.jpg",
      "https://i.pinimg.com/1200x/b5/4b/a5/b54ba56ca4703be85087b61db449cc93.jpg"
    ],
    "description": "This adorable plush toy features a playful pastel design with soft pink fur, oversized floppy ears, and a cheerful expression. Dressed in a floral-patterned dress with a cute headband detail, it’s made from ultra-soft, huggable materials for comfort and durability. Perfect for cuddling, imaginative play, or as a charming decorative piece, this plush makes a delightful gift for kids and fans of cute character collectibles.",
    "image": "https://i.pinimg.com/1200x/17/4d/08/174d0890689261ec6995fd6659ba22d9.jpg"
  },
  {
    "id": 6,
    "name": "Brave Doll 01",
    "category": "Toys",
    "price": 129,
    "available": 6,
    "images": [
      "https://i.pinimg.com/1200x/b9/2d/31/b92d316b1182ea147ec0a85462346cb9.jpg",
      "https://i.pinimg.com/736x/7f/4d/48/7f4d48dffe0ae8a06b12d8ea3a991bdc.jpg",
      "https://i.pinimg.com/736x/59/96/49/5996493db94acc436a18fab26e8e90d2.jpg"
    ],
    "description": "This Funko Pop! Disney Merida figure features the brave princess in Funko’s signature stylized design, with her iconic curly red hair and classic teal dress. Holding her bow, the figure captures Merida’s adventurous spirit with charming details and a compact collectible size. Made from durable vinyl and packaged in a window display box, it’s perfect for collectors, Disney fans, or as a decorative display piece on desks and shelves.",
    "image": "https://i.pinimg.com/1200x/b9/2d/31/b92d316b1182ea147ec0a85462346cb9.jpg"
  },
  {
    "id": 7,
    "name": "Mickey Tsum 01",
    "category": "Toys",
    "price": 158,
    "available": 21,
    "images": [
      "https://i.pinimg.com/736x/d0/88/ab/d088abc49323efa32b53f7e772a3baa9.jpg",
      "https://i.pinimg.com/1200x/84/02/47/840247825a192142a534779dd7be857b.jpg",
      "https://down-vn.img.susercontent.com/file/df5b922f670604e5b0d3a2d49ec8d73c.webp"
    ],
    "description": "This adorable mini plush character features a soft, rounded design with a sweet pastel color palette and charming embroidered details. Made from fluffy, high-quality fabric, it showcases a cute bow accent and dessert-inspired outfit for an extra touch of whimsy. Compact and lightweight, it’s perfect for collecting, stacking, decorating desks or shelves, or as a delightful gift for fans of cute plush toys and character collectibles.",
    "image": "https://i.pinimg.com/736x/d0/88/ab/d088abc49323efa32b53f7e772a3baa9.jpg"
  },
  {
    "id": 8,
    "name": "Stitch Teddy 02",
    "category": "Toys",
    "price": 134,
    "available": 19,
    "images": [
      "https://i.pinimg.com/1200x/27/94/ca/2794ca307bf3e6ce4d2f1d4b9c191528.jpg",
      "https://i.pinimg.com/1200x/f9/06/3f/f9063f9a0ddb799ee98a9b54c5d7ca86.jpg",
      "https://i.pinimg.com/736x/ce/8e/38/ce8e387b6218fd5386d8b1c767ff67b9.jpg"
    ],
    "description": "This adorable plush doll features a playful blue character with oversized ears and a cheerful expression, dressed in a soft pastel pajama-style outfit with cute button and ribbon details. Made from high-quality, ultra-soft fabric, it’s perfect for cuddling, bedtime comfort, or display. A charming choice for kids, collectors, and fans of cute animated plush toys.",
    "image": "https://i.pinimg.com/1200x/27/94/ca/2794ca307bf3e6ce4d2f1d4b9c191528.jpg"
  },
  {
    "id": 9,
    "name": "Mickey Tsum 02",
    "category": "Toys",
    "price": 100,
    "available": 18,
    "images": [
      "https://i.pinimg.com/1200x/31/50/9b/31509b4efe6d0931eae26c4ecea01df7.jpg",
      "https://i.pinimg.com/1200x/80/29/98/8029981575c3fc45a1fe31443bfb7261.jpg",
      "https://i.pinimg.com/1200x/5e/a9/e5/5ea9e59f80215d9696784ab28a53cbda.jpg"
    ],
    "description": "This adorable mini figure set features classic cartoon characters in a rounded, stackable design with smooth finishes and bright, cheerful colors. Made from durable material, each figure showcases a cute, simplified expression that’s perfect for collecting or display. Ideal for decorating desks, shelves, or play areas, this set makes a fun gift for kids and fans of cute character collectibles.",
    "image": "https://i.pinimg.com/1200x/31/50/9b/31509b4efe6d0931eae26c4ecea01df7.jpg"
  },
  {
    "id": 10,
    "name": "Frozen Doll 02",
    "category": "Toys",
    "price": 147,
    "available": 15,
    "images": [
      "https://i.pinimg.com/736x/0e/b3/58/0eb3584c0002bad875a50ae6d67912b6.jpg",
      "https://i.pinimg.com/736x/24/b7/b0/24b7b0654491ecd694cc919b1ce77733.jpg",
      "https://i.pinimg.com/1200x/75/2c/4c/752c4cd3105337cabea1c7ec3fdbc1ae.jpg"
    ],
    "description": "This Funko Pop! Disney Elsa vinyl figure captures the iconic Snow Queen in Funko’s signature stylized form, featuring her elegant blonde hairstyle and shimmering blue gown. Crafted from durable vinyl with fine details, the figure comes packaged in a window display box, perfect for showcasing or collecting. An ideal addition for Disney fans, Funko collectors, or as a charming decorative piece for desks and shelves.",
    "image": "https://i.pinimg.com/736x/0e/b3/58/0eb3584c0002bad875a50ae6d67912b6.jpg"
  },
  {
    "id": 11,
    "name": "Mickey Teddy 01",
    "category": "Toys",
    "price": 155,
    "available": 15,
    "images": [
      "https://i.pinimg.com/1200x/cd/81/19/cd8119e8cc16950f744736b7ed48e67c.jpg",
      "https://i.pinimg.com/1200x/f9/63/4c/f9634c394327e42a8b88353e652e186a.jpg",
      "https://i.pinimg.com/736x/20/73/3f/20733f3445c3180d2e0fdcbbb2fbccc9.jpg"
    ],
    "description": "This charming plush doll features a sweet duck character dressed in a soft, layered pastel outfit with delicate embroidered details and a floral headpiece. Made from plush, high-quality materials, it offers a cuddly feel and an elegant, gentle design. Perfect for imaginative play, room décor, or as a thoughtful gift for plush lovers and fans of cute character collectibles.",
    "image": "https://i.pinimg.com/1200x/cd/81/19/cd8119e8cc16950f744736b7ed48e67c.jpg"
  },
  {
    "id": 12,
    "name": "Stitch Teddy 03",
    "category": "Toys",
    "price": 100,
    "available": 5,
    "images": [
      "https://www.gosupps.com/media/catalog/product/7/1/71iYyZpUauL_1.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_704133-MLM83563227357_042025-O.webp",
      "https://i.ebayimg.com/images/g/sekAAOSw2Ldkjo2S/s-l1200.jpg"
    ],
    "description": "This adorable plush toy features a playful blue character dressed in a whimsical superhero-style outfit, complete with a polka-dot head wrap and bright red cape. Made from ultra-soft, high-quality fabric, it offers a cuddly feel and charming details that bring the character to life. Perfect for hugging, imaginative play, or display, it makes a delightful gift for kids and fans of cute character plush toys.",
    "image": "https://www.gosupps.com/media/catalog/product/7/1/71iYyZpUauL_1.jpg"
  },
  {
    "id": 13,
    "name": "Mickey Notebook 01",
    "category": "Household & School supplies",
    "price": 119,
    "available": 15,
    "images": [
      "https://i.pinimg.com/1200x/e8/93/30/e893309a16853de65deb6bbf3bef53da.jpg",
      "https://gifting-online.ca/cdn/shop/products/Disney-Mickey-Mouse-Silhouette-Notebook_3HWJ2120_02_1024x1024@2x.jpg?v=1679691394",
      "https://gifting-online.ca/cdn/shop/products/Disney-Mickey-Mouse-Silhouette-Notebook_3HWJ2120_03_1024x1024@2x.jpg?v=1679691395"
    ],
    "description": "This elegant Disney 100 Anniversary notebook features a clean white cover with a shimmering holographic Mickey Mouse silhouette, celebrating a century of Disney magic. Inside, it includes lined pages with subtle Mickey illustrations and a matching ribbon bookmark for easy organization. Stylish and practical, it’s perfect for journaling, note-taking, or as a collectible stationery gift for Disney fans of all ages.",
    "image": "https://i.pinimg.com/1200x/e8/93/30/e893309a16853de65deb6bbf3bef53da.jpg"
  },
  {
    "id": 14,
    "name": "Stitch Notebook 01",
    "category": "Household & School supplies",
    "price": 121,
    "available": 3,
    "images": [
      "https://i.pinimg.com/736x/bc/49/35/bc493529cb6410384a74d3129c8b62b9.jpg",
      "https://cdn.mall.adeptmind.ai/https%3A%2F%2Ffbres.fivebelow.com%2Fimage%2Fupload%2F5bassets%2Fprod-hts%2Fspree%2Fimages%2F1854488%2Foriginal%2F7275324-00_B.jpg_640x.webp",
      "https://fbres.fivebelow.com/image/upload/product/9163356_02.jpg"
    ],
    "description": "This stylish Stitch spiral notebook features a vibrant gradient cover with a playful upside-down Stitch illustration and subtle character sketches in the background. Designed with a sturdy spiral binding and an elastic band closure, it keeps pages secure and organized. Perfect for school, work, or journaling, this notebook combines fun Disney charm with everyday practicality—an ideal choice for Stitch fans and stationery lovers.",
    "image": "https://i.pinimg.com/736x/bc/49/35/bc493529cb6410384a74d3129c8b62b9.jpg"
  },
  {
    "id": 15,
    "name": "Mickey Bottle 01 https://i.pinimg.com/736x/2a/9f/eb/2a9febe8e4b1b7b03985fdf93ef844d3.jpg This sleek Disney Mickey Mouse water bottle features a minimalist cream-colored design with a cheerful Mickey illustration and a soft pastel cap. Made from durable, lightweight material, it’s perfect for daily hydration at school, work, or on the go. Stylish and practical, this bottle is a great accessory for Disney fans who love simple yet playful designs.",
    "category": "Household & School supplies",
    "price": 119,
    "available": 12,
    "images": [],
    "description": "",
    "image": ""
  },
  {
    "id": 16,
    "name": "Cinderella Dishes",
    "category": "Household & School supplies",
    "price": 195,
    "available": 20,
    "images": [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com%2Fitm%2F184137997465&psig=AOvVaw3rT5v8sep1yg1Rzba5KnMi&ust=1766312814034000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjo3pH6y5EDFQAAAAAdAAAAABAE",
      "https://media1.popsugar-assets.com/files/thumbor/t7MG1fH5kfPU_2q6CuLiEdHOU3c/27x0:2027x2000/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/08/985/n/1922195/aaebae905e1659f8c37d27.96542071_/i/target-disney-princess-dinnerware-set.jpg",
      "https://m.media-amazon.com/images/I/61qcWzDg1OL._AC_UF894,1000_QL80_.jpg"
    ],
    "description": "",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ebay.com%2Fitm%2F184137997465&psig=AOvVaw3rT5v8sep1yg1Rzba5KnMi&ust=1766312814034000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjo3pH6y5EDFQAAAAAdAAAAABAE"
  },
  {
    "id": 17,
    "name": "Stitch Bottle 01",
    "category": "Household & School supplies",
    "price": 155,
    "available": 19,
    "images": [
      "https://m.media-amazon.com/images/I/612SwyLb61L.jpg",
      "https://acappela.com.cy/wp-content/uploads/2025/08/8412497750528.jpg",
      "https://media.very.co.uk/i/very/WK2L9_SQ3_0000000039_PURPLE_SLd?$pdp_300x400_x2$&fmt=jpgThisfunStitchcharacterwaterbottlefeaturesabrightbluemetallicfinishwithaplayfulStitchillustrationandacute3Dcharacterlidwithsignatureears.Madefromdurable,lightweightmaterial,it’sidealforkeepingdrinksonhandatschool,work,oroutdooractivities.Bothpracticalandeye-catching,thisbottleisaperfectaccessoryforStitchfansandagreatgiftforkidsandDisneyloversalike."
    ],
    "description": "",
    "image": "https://m.media-amazon.com/images/I/612SwyLb61L.jpg"
  },
  {
    "id": 18,
    "name": "Dumbo Cup 01",
    "category": "Household & School supplies",
    "price": 142,
    "available": 15,
    "images": [
      "https://i.pinimg.com/1200x/06/c6/6b/06c66b4819a322605ba4eabd827df18b.jpg",
      "https://thehomeofcharacters.com/cdn/shop/files/DI362_T1_700x700.jpg?v=1722355297",
      "https://thehomeofgifts.com/cdn/shop/files/DI362_T2.jpg?v=1722355279&width=1920"
    ],
    "description": "This charming Disney Dumbo mug features a soft pastel design with an adorable Dumbo illustration and the inspiring phrase “Dream Big.” Crafted from smooth, high-quality ceramic with a comfortable handle and elegant pedestal base, it’s perfect for enjoying coffee, tea, or hot chocolate. A lovely addition to any kitchen and a thoughtful gift for Disney fans who love gentle, uplifting designs.",
    "image": "https://i.pinimg.com/1200x/06/c6/6b/06c66b4819a322605ba4eabd827df18b.jpg"
  },
  {
    "id": 19,
    "name": "Stitch Towel 01",
    "category": "Household & School supplies",
    "price": 145,
    "available": 11,
    "images": [
      "https://i.pinimg.com/1200x/92/e5/49/92e5496ba1b2b3034ab3b63fa621b8d9.jpg",
      "https://img.kwcdn.com/product/fancy/18591e9d-2f89-4d4d-862d-705b20c61598.jpg?imageMogr2/auto-orient|imageView2/2/w/800/q/70/format/webp",
      "https://ae01.alicdn.com/kf/S8ebc426277d24211acc07fef73553f68B.jpg"
    ],
    "description": "This cozy Disney Stitch towel set features a soft, plush texture with an adorable embroidered Stitch face in vibrant blue. Made from highly absorbent, gentle fabric, it’s perfect for daily use after baths, swimming, or travel. Fun yet practical, this towel set adds a playful Disney touch to your bathroom and makes a great gift for Stitch fans of all ages.",
    "image": "https://i.pinimg.com/1200x/92/e5/49/92e5496ba1b2b3034ab3b63fa621b8d9.jpg"
  },
  {
    "id": 20,
    "name": "Lion Bowl 01",
    "category": "Household & School supplies",
    "price": 196,
    "available": 22,
    "images": [
      "https://i.pinimg.com/736x/10/38/da/1038da21483dc3932dcf196c0e5db76a.jpg",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/465032054412?fmt=jpeg&qlt=90&wid=652&hei=652",
      "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/433117878369-2?fmt=jpeg&qlt=90&wid=652&hei=652ThisvibrantDisney-themedceramicbowlfeaturesawarmyellowglazewithcharmingillustratedscenesinspiredbyatropicalsavanna,completewithplayfulanimalcharactersandpalmtrees.Smoothlyfinishedandgenerouslysized,it’sperfectforcereal,snacks,ordesserts.Afunandcolorfuladditiontoanykitchen,idealforDisneyfansandcollectorsalike."
    ],
    "description": "",
    "image": "https://i.pinimg.com/736x/10/38/da/1038da21483dc3932dcf196c0e5db76a.jpg"
  },
  {
    "id": 21,
    "name": "Mickey Cup 01",
    "category": "Household & School supplies",
    "price": 161,
    "available": 14,
    "images": [
      "https://i.pinimg.com/1200x/77/5b/94/775b9433e018e8d887548e7eadeeef66.jpg",
      "https://img.alicdn.com/imgextra/i3/925019718/O1CN01ChS6xx2LetzDsRBKM_!!925019718.jpg",
      "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/764251877/O1CN01CQ5CJ31PjiSmz67nw_!!764251877.jpg_360x360q90.jpg_.webp"
    ],
    "description": "This charming Disney Donald Duck 90th Anniversary mug features a warm cream-colored ceramic design decorated with playful Donald Duck illustrations and celebratory details. Topped with a cute sculpted lid accent inspired by Donald’s iconic style, it adds both function and character. Perfect for enjoying hot drinks while keeping them warm, this collectible mug is a delightful gift for Disney fans and Donald Duck lovers.",
    "image": "https://i.pinimg.com/1200x/77/5b/94/775b9433e018e8d887548e7eadeeef66.jpg"
  },
  {
    "id": 22,
    "name": "Aladin Towel 01",
    "category": "Household & School supplies",
    "price": 184,
    "available": 24,
    "images": [
      "https://i.pinimg.com/736x/fb/7e/47/fb7e475d625200d1445b5731f0f17e5b.jpg",
      "https://i5.walmartimages.com/seo/Aladdin-808092-Disney-Aladdin-Arabian-Nights-Towel-Set-3-Piece_7c663137-b58f-4f20-be67-6e415d92f16c.2f1bb6f7443478b26dfdd1b876e9fbdb.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    ],
    "description": "This elegant Disney-inspired towel set features soft white fabric accented with colorful silhouette designs of classic characters. Made from plush, absorbent material, the towels are gentle on the skin and ideal for everyday use. With clean lines and subtle Disney charm, this set adds a refined touch to any bathroom and makes a thoughtful gift for Disney fans.",
    "image": "https://i.pinimg.com/736x/fb/7e/47/fb7e475d625200d1445b5731f0f17e5b.jpg"
  },
  {
    "id": 23,
    "name": "Stitch Hat 01",
    "category": "Household & School supplies",
    "price": 196,
    "available": 4,
    "images": [
      "https://i.pinimg.com/736x/b1/4f/f2/b14ff29d575009a7f40f1fdab871901a.jpg",
      "https://static.riachuelo.com.br/RCHLO/15510883001/portrait/de9dd36bf40bf63c875ce55c65fb6b3f72ba9445.jpg",
      "https://static.riachuelo.com.br/RCHLO/15510883001/portrait/32e5913fa6f8b0c6c971807ab29797a1b6a95d56.jpg"
    ],
    "description": "This adorable character visor hat features a soft pink design with a cute embroidered face and playful upright ears for a fun, eye-catching look. Made from lightweight, comfortable material with an adjustable strap, it offers sun protection while staying breathable and easy to wear. Perfect for outdoor activities, theme parks, or casual outings, it’s a charming accessory for kids and fans of cute character fashion.",
    "image": "https://i.pinimg.com/736x/b1/4f/f2/b14ff29d575009a7f40f1fdab871901a.jpg"
  },
  {
    "id": 24,
    "name": "Toy Story Cup 01",
    "category": "Household & School supplies",
    "price": 205,
    "available": 3,
    "images": [
      "https://i.pinimg.com/736x/1f/c0/21/1fc0219aa10ebdae05238c84892d9a4e.jpg",
      "https://i.ebayimg.com/images/g/Jz4AAOSwqHNgTs69/s-l1200.jpg",
      "https://i.ebayimg.com/images/g/rhIAAOSwvWNgTs6u/s-l1200.jpg"
    ],
    "description": "This whimsical ceramic sheep planter features a charming rounded design with three adorable sheep faces and playful star accents. Finished in soft neutral tones with subtle textured details, it adds a cozy, storybook feel to any space. Perfect for small plants, succulents, or as a decorative accent, this planter makes a delightful gift for home décor lovers and animal-themed collections.",
    "image": "https://i.pinimg.com/736x/1f/c0/21/1fc0219aa10ebdae05238c84892d9a4e.jpg"
  },
  {
    "id": 25,
    "name": "Earring Mickey 01",
    "category": "Accessories",
    "price": 83,
    "available": 13,
    "images": [
      "https://i.pinimg.com/1200x/7f/e7/4f/7fe74f1518f7072b2ed16a02bae617f4.jpg",
      "https://d141zx60z515qt.cloudfront.net/mp02172a6758/pr46484/img74580_src.webp"
    ],
    "description": "These stylish Mickey-shaped stud earrings feature a warm brown enamel finish accented with sparkling crystal details. Designed with a chic, modern twist on a classic silhouette, they add a subtle touch of glamour to any outfit. Lightweight and eye-catching, these earrings are perfect for everyday wear or special occasions, making them a lovely accessory for fans of elegant character-inspired jewelry.",
    "image": "https://i.pinimg.com/1200x/7f/e7/4f/7fe74f1518f7072b2ed16a02bae617f4.jpg"
  },
  {
    "id": 26,
    "name": "Ring Alice 01",
    "category": "Accessories",
    "price": 110,
    "available": 22,
    "images": [
      "https://i.pinimg.com/1200x/93/93/b5/9393b5ec91519dd2c7b69e2eeb9c1346.jpg",
      "https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/501050213_753757473650433_826999340025370988_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfw_wQa-7s"
    ],
    "description": "GEJokzkONnfbljWtXfPU7cCWNa1d89TtwAoaCiffRTkFx3035Bzr1D6dZ53oePEli3NWss05J UUm&_nc_ohc=npJsp467rn4Q7kNvwFq5ZBw&_nc_oc=Adm_IF8Pn9M9gSwE5pg4X7GRib kjw2w6t0j51-iPxA8L7rSdvCBbDHfeAK_wRR8CTP0&_nc_zt=23&_nc_ht=scontent.fsgn2-11.f na&_nc_gid=PLq2REfWCsdaca5b9zEh1g&oh=00_AfnCn2CGa-Au7-K3e2geES_3K5DkrrnM 8KsGtOq7mThfZw&oe=694C560F This playful character-inspired ring features a bold grinning face design with glossy enamel accents and sparkling crystal details, set in a polished gold-tone finish. Eye-catching yet elegant, it adds a fun statement to any outfit. Perfect for everyday wear or special occasions, this ring is a charming collectible accessory for fans of whimsical, character-themed jewelry.",
    "image": "https://i.pinimg.com/1200x/93/93/b5/9393b5ec91519dd2c7b69e2eeb9c1346.jpg"
  },
  {
    "id": 27,
    "name": "Brooch Mickey 01",
    "category": "Accessories",
    "price": 131,
    "available": 16,
    "images": [
      "https://i.pinimg.com/1200x/a8/24/37/a82437b48e6b26e3aaf57bc0d8adb416.jpg",
      "https://castleplanethk.com/cdn/shop/files/438030005694-1.webp?v=1749453478&width=533"
    ],
    "description": "This vibrant Disneyland anniversary shirt pin features a cheerful Mickey Mouse design celebrating a milestone year with colorful enamel details and sparkling accents. Crafted with a durable metal base and glossy finish, it’s perfect for decorating shirts, jackets, bags, or hats. A fun and collectible accessory, this pin makes a great keepsake for Disney fans and park memorabilia collectors.",
    "image": "https://i.pinimg.com/1200x/a8/24/37/a82437b48e6b26e3aaf57bc0d8adb416.jpg"
  },
  {
    "id": 28,
    "name": "Ring Pooh 01",
    "category": "Accessories",
    "price": 129,
    "available": 20,
    "images": [
      "https://res2022.jeulia.com/product/8/7/800x800/664eaa5c9e478.jpg",
      "https://i.pinimg.com/736x/ce/f3/6c/cef36c67391dd5c282f27b01f13c8480.jpg"
    ],
    "description": "This elegant gold-tone character ring features a charming bear face centerpiece accented with sparkling crystal details along a geometric band. Polished to a high shine, it blends playful character charm with refined craftsmanship. Perfect for everyday wear or as a thoughtful gift, this ring adds a touch of sweetness and sparkle to any jewelry collection.",
    "image": "https://res2022.jeulia.com/product/8/7/800x800/664eaa5c9e478.jpg"
  },
  {
    "id": 29,
    "name": "Keychain Alice 01",
    "category": "Accessories",
    "price": 135,
    "available": 16,
    "images": [
      "https://i.ebayimg.com/images/g/EMUAAeSwEkNn-xoq/s-l400.jpg",
      "https://down-vn.img.susercontent.com/file/dd59d997a7d32b3b3b66d4f1b97e3d1bThiscutecharacterkeychainfeaturesacharmingminifigurewithastylizeddesign,sittinginsideateacupforanextratouchofwhimsy.Madefromdurablematerialwithasturdymetalkeyring,it’sperfectforattachingtokeys,bags,orbackpacks.Adelightfuleverydayaccessoryandalovelycollectiblegiftforfansofcutecharactermerchandise."
    ],
    "description": "",
    "image": "https://i.ebayimg.com/images/g/EMUAAeSwEkNn-xoq/s-l400.jpg"
  },
  {
    "id": 30,
    "name": "Bracelet Mickey 01",
    "category": "Accessories",
    "price": 104,
    "available": 15,
    "images": [
      "https://i.pinimg.com/736x/c7/1a/e2/c71ae23ccd5e13fd870d80c82ea975c8.jpg",
      "https://fanatics.frgimages.com/mickey-and-friends/womens-baublebar-mickey-and-friends-mickey-mouse-cuff-bracelet_ss5_p-200218570+pv-1+u-h9psc2synsjqxsoglkcg+v-ty1hqfrcu6s7bqa0dgwo.jpg?_hv=2&w=1018"
    ],
    "description": "This elegant character-inspired bracelet features a glossy gold-tone cuff design adorned with repeating Mickey-shaped accents, highlighted by sparkling crystal details. Sleek and comfortable to wear, it blends playful charm with a refined, modern style. Perfect for elevating everyday outfits or adding a subtle Disney touch to special occasions, this bracelet is a stylish accessory and a lovely gift for Disney fans.",
    "image": "https://i.pinimg.com/736x/c7/1a/e2/c71ae23ccd5e13fd870d80c82ea975c8.jpg"
  },
  {
    "id": 31,
    "name": "Necklace Alice 01",
    "category": "Accessories",
    "price": 137,
    "available": 3,
    "images": [
      "https://i.pinimg.com/1200x/ab/52/b9/ab52b9512aad3ace0e7f2151d30d20d3.jpg",
      "https://product-images-cdn.liketoknow.it/Ezuwb4u43x0VHh5ZEdPB2y72dt9CmhmHZ9iRvU1HcJsBNmikww9pUIDRyKhJI3H6Su82XR2C6Hn_zDXAEmjrdhuM_uuLcIXYCuN1_WLPAUgjtBspKYWqeFY7ilJMlOvKt7mdoOJZ.bY4xiRsJa0trZSg7jQj_KSI1jaFAIq_tn_T3RO.p7NxwnzbhXw-?v=0&auto=format&fm=webp&w=225&q=80&dpr=2.625Thisplayfulgold-tonecharmnecklacebringstogethericonicelementsfromAliceinWonderlandinawhimsical,collectibledesign.Thechunkychainisadornedwithcolorfulenamelcharms—includingthemischievousCheshireCat,Alice,teacups,playingcards,arose,potionbottle,andasparklingclockcenterpiece—capturingthemagicandfantasyofWonderland."
    ],
    "description": "",
    "image": "https://i.pinimg.com/1200x/ab/52/b9/ab52b9512aad3ace0e7f2151d30d20d3.jpg"
  },
  {
    "id": 32,
    "name": "Keychain Mickey 01",
    "category": "Accessories",
    "price": 109,
    "available": 12,
    "images": [
      "https://i.pinimg.com/736x/20/44/c8/2044c803c9cf964ab1a5f99741a1f219.jpg",
      "https://i.pinimg.com/1200x/9c/80/9d/9c809dfbedd991ad2797971fac655b6d.jpg",
      "https://i.pinimg.com/1200x/5b/52/d3/5b52d34a0d64c5769551f50a5b14638a.jpg"
    ],
    "description": "This dazzling Minnie Mouse charm keychain / bag charm features Minnie Mouse dressed in a colorful, sprinkle-textured outfit with a matching bow and glittery pink shoes. Minnie holds a vibrant gift box, adding a festive, celebratory touch. Finished with a polished gold-tone clasp and chain, this statement accessory is perfect for clipping onto handbags, backpacks, or keys. A must-have collectible for Disney fans who love bold sparkle and playful design.",
    "image": "https://i.pinimg.com/736x/20/44/c8/2044c803c9cf964ab1a5f99741a1f219.jpg"
  },
  {
    "id": 33,
    "name": "Earring Mickey 02",
    "category": "Accessories",
    "price": 84,
    "available": 24,
    "images": [
      "https://i.pinimg.com/1200x/3f/03/67/3f036780ebb07ba560b3e4350bf72d57.jpg",
      "https://images.squarespace-cdn.com/content/v1/6074cb7375d88d420848825c/1724709455065-RTGIZXXVQ0KP5LWDIUNW/Mickey+Mouse+Disney+Candy+Apple+Earrings+Disney+x+BaubleBar+Disney+Eats+Fall+Merchandise+Collection+August+2024.jpeg"
    ],
    "description": "These sparkling Mickey Mouse stud earrings feature the iconic silhouette topped with pavé-style clear crystals and a rich red glitter enamel accent. Finished in a gold-tone setting with secure post backs, they add a festive pop of shine while staying elegant and wearable.",
    "image": "https://i.pinimg.com/1200x/3f/03/67/3f036780ebb07ba560b3e4350bf72d57.jpg"
  },
  {
    "id": 34,
    "name": "Keychain Mickey 02",
    "category": "Accessories",
    "price": 106,
    "available": 1,
    "images": [
      "https://i.pinimg.com/1200x/c8/3a/9f/c83a9f2250fb8181c982c64685837ebb.jpg",
      "https://images.footballfanatics.com/mickey-and-friends/baublebar-daisy-duck-gold-and-glitter-bag-charm_ss5_p-200218594+pv-1+u-d0agirg1ljw3lwlgmnyk+v-444hh92gto8c679gddal.jpg?_hv=2&w=1018"
    ],
    "description": "This charming Daisy Duck keychain features a glittery pastel enamel finish with her signature pink bow, paired with a polished gold-tone lobster clasp and chain. Lightweight yet durable, it’s perfect for keys, bags, or backpacks—adding a cute Disney touch wherever you go.",
    "image": "https://i.pinimg.com/1200x/c8/3a/9f/c83a9f2250fb8181c982c64685837ebb.jpg"
  },
  {
    "id": 35,
    "name": "Keychain Mickey 03",
    "category": "Accessories",
    "price": 71,
    "available": 8,
    "images": [
      "https://i.pinimg.com/736x/37/08/3f/37083fd964658de2260eceaad656a8f9.jpg",
      "https://u-mercari-images.mercdn.net/photos/m88099569430_2.jpg"
    ],
    "description": "This playful Mickey Mouse keychain comes in a bold neon-pink finish with a matching orange carabiner clip. Crafted from lightweight, durable plastic, it’s easy to attach to keys, bags, or backpacks—perfect for adding a pop of color and fun to your everyday essentials.",
    "image": "https://i.pinimg.com/736x/37/08/3f/37083fd964658de2260eceaad656a8f9.jpg"
  },
  {
    "id": 36,
    "name": "Ring Stitch 01",
    "category": "Accessories",
    "price": 136,
    "available": 23,
    "images": [
      "https://i.pinimg.com/1200x/b6/d8/38/b6d838c3488af9aed2835b5cc3d61698.jpg",
      "https://res2022.jeulia.com/product/4/8/800x800/66264e5d36f84.jpg",
      "https://res2025.bizseas.com/800x800/product/4/9/66273572c9e94.jpg"
    ],
    "description": "This charming Stitch-inspired ring features a playful 3D design with a gold-tone Stitch figure perched atop a sleek silver band. Accented with deep-blue crystal stones along the sides, the ring beautifully balances cuteness and elegance—perfect for everyday wear or as a statement collectible.",
    "image": "https://i.pinimg.com/1200x/b6/d8/38/b6d838c3488af9aed2835b5cc3d61698.jpg"
  },
  {
    "id": 37,
    "name": "Hairclip Mickey 01",
    "category": "Accessories",
    "price": 117,
    "available": 11,
    "images": [
      "https://i.pinimg.com/736x/0c/47/1b/0c471bdff959e556ca78d9973e0880bb.jpg",
      "https://www.mykitsch.com/cdn/shop/files/66093-MickeyMinniexKitsch-RecycledPlasticCreaselessClips-4pc-Cream-1280x1280px.jpg?v=1721861568&width=1400",
      "https://m.media-amazon.com/images/I/61V+cMru1hL._AC_UF1000,1000_QL80_.jpg"
    ],
    "description": "A minimalist and playful hair clip set featuring iconic outline designs inspired by Mickey Mouse—including the classic Mickey head and glove shapes. Finished in a soft ivory tone with clean line detailing, these clips add a subtle Disney touch to everyday hairstyles while staying chic and modern. Perfect for casual wear or Disney fans who love understated accessories.",
    "image": "https://i.pinimg.com/736x/0c/47/1b/0c471bdff959e556ca78d9973e0880bb.jpg"
  },
  {
    "id": 38,
    "name": "Brush Mickey 01",
    "category": "Accessories",
    "price": 120,
    "available": 24,
    "images": [
      "https://i.pinimg.com/736x/fd/4c/e8/fd4ce87928a087b236cd45db3218687f.jpg",
      "https://beautyfree.gr/54347-large_default/disney-mickey.jpg",
      "https://img.kwcdn.com/product/fancy/39fb69c0-ae02-4447-bbd2-ed384c35bb77.jpg"
    ],
    "description": "A cute and practical paddle hair brush featuring an all-over pattern inspired by Mickey Mouse. Designed with a wide brushing surface and flexible bristles, it gently detangles hair while reducing pulling and breakage. The iconic Mickey-ear silhouette adds a playful Disney touch, making it perfect for daily use at home or on the go—especially for Disney fans of all ages.",
    "image": "https://i.pinimg.com/736x/fd/4c/e8/fd4ce87928a087b236cd45db3218687f.jpg"
  },
  {
    "id": 39,
    "name": "Mirror SWhite 01",
    "category": "Accessories",
    "price": 93,
    "available": 18,
    "images": [
      "https://i.pinimg.com/736x/69/f4/b8/69f4b88bc1f00c4f093b788660cb7947.jpg",
      "https://tshop.r10s.jp/bunbougu-shibuya/cabinet/43/4973307414824-skt.jpg?fitin=720:720",
      "https://m.media-amazon.com/images/I/51hL9DFiS8L._AC_UF350,350_QL80_.jpg"
    ],
    "description": "An elegant round compact mirror inspired by Snow White, featuring a delicate vintage-style illustration framed in a gold-toned case. Designed with a secure clasp and a slim profile, it’s perfect for touch-ups on the go. A charming keepsake for Disney lovers, blending classic fairy-tale beauty with everyday practicality.",
    "image": "https://i.pinimg.com/736x/69/f4/b8/69f4b88bc1f00c4f093b788660cb7947.jpg"
  },
  {
    "id": 40,
    "name": "Keychain Mickey 04",
    "category": "Accessories",
    "price": 92,
    "available": 23,
    "images": [
      "https://i.pinimg.com/736x/9b/d6/75/9bd675e0bf0ac6b710c21af81364ce98.jpg",
      "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/MaIAAOSwSUhmCxnp/$_12.JPG?set_id=88"
    ],
    "description": "0000500F https://i.ebayimg.com/images/g/2wIAAOSwMORiSwSx/s-l225.jpg A playful keychain charm set inspired by Mickey Mouse, featuring iconic elements such as Mickey’s head silhouette, gloves, red shorts, and yellow shoes. Each charm is attached to a sturdy metal ball chain, making them easy to clip onto keys, bags, backpacks, or pouches. With bold colors and a minimalist, modern design, this set is perfect for Disney fans who love subtle yet instantly recognizable accessories. Fun, lightweight, and collectible—great for everyday use or as a gift.",
    "image": "https://i.pinimg.com/736x/9b/d6/75/9bd675e0bf0ac6b710c21af81364ce98.jpg"
  },
  {
    "id": 41,
    "name": "Hairband Mickey 01",
    "category": "Accessories",
    "price": 144,
    "available": 9,
    "images": [
      "https://i.pinimg.com/1200x/38/7e/61/387e614fab190f63063f651857e7b9da.jpg",
      "https://i.etsystatic.com/30272643/r/il/0f1c4d/3892784435/il_1588xN.3892784435_sh8q.jpg",
      "https://i.etsystatic.com/30272643/r/il/7bac55/3892784533/il_1588xN.3892784533_qtfq.jpg",
      "https://i.etsystatic.com/30272643/r/il/ff2333/3845295136/il_1588xN.3845295136_on55.jpg"
    ],
    "description": "A charming headband inspired by Minnie Mouse, featuring Minnie’s signature red bow with white polka dots and playful icon badge accents on both ears. The circular ear panels showcase classic Disney elements—Mickey silhouettes, gloves, shoes, and Minnie motifs—adding a fun, collectible feel. Designed with a comfortable, secure fit, this headband is perfect for Disney park visits, cosplay, themed parties, or photo shoots. Cute, bold, and instantly recognizable—an essential accessory for Disney fans.",
    "image": "https://i.pinimg.com/1200x/38/7e/61/387e614fab190f63063f651857e7b9da.jpg"
  },
  {
    "id": 42,
    "name": "Brush Alice 01",
    "category": "Accessories",
    "price": 134,
    "available": 10,
    "images": [
      "https://i.pinimg.com/1200x/43/3c/51/433c517f5b4c8662d30f7d4a314d7a2d.jpg",
      "https://media.karousell.com/media/photos/products/2023/3/11/_alice_in_wonderland__1678550831_c45d0c2b.jpg",
      "https://media.karousell.com/media/photos/products/2023/7/6/_alice_in_the_wonderland____ta_1688632628_a5460ed7_progressive.jpg"
    ],
    "description": "A charming paddle hair brush inspired by Alice in Wonderland, featuring Alice in a vibrant floral design on one side and a sleek black finish on the other. The wide paddle shape and flexible bristles help detangle gently, reduce pulling, and smooth hair for everyday styling. Lightweight and comfortable to hold, this brush is perfect for daily use at home or on the go, combining practical performance with a whimsical Disney aesthetic",
    "image": "https://i.pinimg.com/1200x/43/3c/51/433c517f5b4c8662d30f7d4a314d7a2d.jpg"
  },
  {
    "id": 43,
    "name": "Keychain Mickey 05",
    "category": "Accessories",
    "price": 138,
    "available": 5,
    "images": [
      "https://i.pinimg.com/1200x/7a/f5/3f/7af53ff2dd3d66827e7afeddffe1a4eb.jpg",
      "https://i.pinimg.com/1200x/fa/30/ad/fa30ad96568bacdbea3527360e2109cc.jpg",
      "https://u-mercari-images.mercdn.net/photos/m72016497331_1.jpg"
    ],
    "description": "A sleek luggage tag from the collaboration between Coach and Mickey Mouse, featuring a minimalist Mickey face graphic in classic black-and-ivory tones. Crafted from premium leather, it includes a secure ball-chain attachment and a subtle Coach logo charm for a refined finish. Stylish yet practical, this tag adds a touch of Disney charm to travel bags, backpacks, or carry-ons, making it perfect for fans who love understated luxury",
    "image": "https://i.pinimg.com/1200x/7a/f5/3f/7af53ff2dd3d66827e7afeddffe1a4eb.jpg"
  },
  {
    "id": 44,
    "name": "Watch Ariel 01",
    "category": "Accessories",
    "price": 77,
    "available": 14,
    "images": [
      "https://i.pinimg.com/736x/5f/fb/5f/5ffb5f061cc3c58dbc94629faa26ea69.jpg",
      "https://i.ebayimg.com/images/g/1CMAAOSwPRBgmDVu/s-l400.jpg"
    ],
    "description": "A delightful Disney wrist watch inspired by The Little Mermaid, featuring Ariel on the dial. The watch showcases a fresh aqua-colored strap that reflects an under-the-sea theme, paired with a clear, easy-to-read face accented by Ariel’s iconic silhouette. Presented in an elegant Disney-branded gift box, this watch is perfect for everyday wear or as a charming collectible gift for Disney fans. Stylish yet playful, it adds a magical touch to any outfit",
    "image": "https://i.pinimg.com/736x/5f/fb/5f/5ffb5f061cc3c58dbc94629faa26ea69.jpg"
  },
  {
    "id": 45,
    "name": "Hand Bag Rapunzel 01",
    "category": "Accessories",
    "price": 79,
    "available": 25,
    "images": [
      "https://i.pinimg.com/1200x/72/2f/d9/722fd9f8dcd8815c1cd5daa2bce22d5d.jpg",
      "https://u-mercari-images.mercdn.net/photos/m46399653463_5.jpg",
      "https://u-mercari-images.mercdn.net/photos/m36354936045_2.jpg"
    ],
    "description": "A charming Disney Loungefly crossbody bag inspired by Tangled, featuring Rapunzel’s iconic golden hair woven with pastel flowers and a playful Pascal accent. The cylindrical silhouette is both cute and practical, finished with a chunky yellow chain top handle, a detachable pink crossbody strap, and gold-tone hardware for a polished look.",
    "image": "https://i.pinimg.com/1200x/72/2f/d9/722fd9f8dcd8815c1cd5daa2bce22d5d.jpg"
  }
];

export default productData;
