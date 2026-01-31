const movies = [
    {
        name: "Mai (2024)",
        ep: "Tập 1 Engsub",
        img: "Mai.jpg",
        youtube: "https://www.youtube.com/embed/Yz96EBNwMGw",
        type: "phimle",
        country: "Viet Nam"
    },
    {
        name: "Nhà bà nữ (2023)",
        ep: "Tập 1 Engsub",
        img: "Nhà bà nữ.jpg",
        youtube: "https://www.youtube.com/embed/yd54A2y9EzE",
        type: "phimle",
        country: "Viet Nam"
    },
    {
        name: "Bố già (2024)",
        ep: "Tập 1 Engsub",
        img: "Bố già.jpg",
        youtube: "https://www.youtube.com/embed/Ovw8CMKYFT4",
        type: "phimle",
        country: "Viet Nam"
    },
    {
        name: "Avatar",
        ep: "Tập 1 Vietsub",
        img: "Avatar.jpg",
        youtube: "https://www.youtube.com/embed/_V1lLSS9lCc",
        type: "phimle",
        country: "Âu Mỹ"
    },
    {
        name: "Ôi ma ơi!",
        ep: "Tập 1 Vietsub",
        img: "Ôi ma ơi.jpg",
        youtube: "https://www.youtube.com/embed/gzX9vbV9rN0",
        type: "phimle",
        country: "Thái Lan"


    },
    {
        name: "Zootopia 2",
        ep: "Tập 1 Vietsub",
        img: "zootopia 2.jpg",
        youtube: "https://www.youtube.com/embed/sibA-ho5nNk",
        type: "phimle",
        country: "Âu Mỹ"
    },
    {
        name: "The Avengers 2012",
        ep: "Tập 1 Vietsub",
        img: "The Avengers 2012.jpg",
        youtube: "https://www.youtube.com/embed/eOrNdBpGMv8",
        type: "phimle",
        country: "Âu Mỹ"
    },
    {
        name: "The silence of the lambs(1991)",
        ep: "Tập 1 Vietsub",
        img: "The silence of the lambs (1991).jpg",
        youtube: "https://www.youtube.com/embed/W6Mm8Sbe__o",
        type: "phimle",
        country: "Âu Mỹ"
    },
    {
        name: "The Shawshank Redemption (1994)",
        ep: "Tập 1 Vietsub",
        img: "The Shawshank Redemption (1994).jpg",
        youtube: "https://www.youtube.com/embed/6hB3S9bIaco",
        type: "phimle",
        country: "Âu Mỹ"
    },
    {
        name: "The Matrix (1999)",
        ep: "Tập 1 Vietsub",
        img: "The Matrix (1999).jpg",
        youtube: "https://www.youtube.com/embed/vKQi3bBA1y8",
        type: "phimle",
        country: "Âu Mỹ"
        
    },
     {
        name: "The Lion King (1994)",
        ep: "Tập 1 Vietsub",
        img: "The Lion King (1994).jpg",
        youtube: "https://www.youtube.com/embed/4sj1MT05lAA",
        type: "phimle",
        country: "Âu Mỹ"
        
    },
        {
        name: "The godfather (1972)",
        ep: "Tập 1 Vietsub",
        img: "The godfather (1972).jpg",
        youtube: "https://www.youtube.com/embed/i4jp1yk4Atc",
        type: "phimle",
        country: "Âu Mỹ"
        
    },
        {
        name: "The dark knight (2008)",
        ep: "Tập 1 Vietsub",
        img: "The dark knight (2008).jpg",
        youtube: "https://www.youtube.com/embed/EXeTwQWrcwY",
        type: "phimle",
country: "Âu Mỹ"

    },
        {
        name: "Tên cậu là gì? (2016)",
        ep: "Tập 1 Vietsub",
        img: "Tên cậu là gì – Your name (2016).jpg",
        youtube: "https://www.youtube.com/embed/xU47nhruN-Q",
        type: "phimle",
        country: "Nhật Bản"
        
    },
        {
        name: "Spider-Man Into the spider-verse (2018)",
        ep: "Tập 1 Vietsub",
        img: "Spider-Man Into the spider-verse (2018).jpg",
        youtube: "https://www.youtube.com/embed/g4Hbz2jLxvQ",
        type: "phimle",
        country: "Âu Mỹ"
        
    },
        {
        name: "Se7en (1995)",
        ep: "Tập 1 Vietsub",
        img: "Se7en (1995).jpg",
        youtube: "https://www.youtube.com/embed/znmZoVkCjpI",
        type: "phimle",
        country: "Âu Mỹ"
        
    },
        {
        name: "Rô-bốt biết yêu – Wall-E (2008)",
        ep: "Tập 1 Vietsub",
        img: "Rô-bốt biết yêu – Wall-E (2008).jpg",
        youtube: "https://www.youtube.com/embed/5e16U8UsT4I",
        type: "phimle",
        country: "Âu Mỹ"
        
    },
        {
        name: "Interstellar (2014)",
        ep: "Tập 1 Vietsub",
        img: "Iterstellar (2014).jpg",
        youtube: "https://www.youtube.com/embed/zSWdZVtXT7E",
        type: "phimle",
        country: "Âu Mỹ"

    },
        {
        name: "Mộ đom đóm (1988)",
        ep: "Tập 1 Vietsub",
        img: "Mộ đom đóm – Grave of the fireflies (1988).jpg",
        youtube: "https://www.youtube.com/embed/4vPeTSRd580",
        type: "phimle",
        country: "Nhật Bản"
        
    },
        {
        name: "Làm giàu với ma",
        ep: "Tập 1 Engsub",
        img: "Làm giàu với ma.jpg",
        youtube: "https://www.youtube.com/embed/ri4X4xzJXRc",
        type: "phimle",
        country: "Viet Nam"
        
    },
        {
        name: "Ký sinh trùng (2019)",
        ep: "Tập 1 Vietsub",
        img: "Ký sinh trùng – Parasite (2019).jpg",
        youtube: "https://www.youtube.com/embed/5xH0HfJHsaY",
        type: "phimle",
        country: "Hàn Quốc"
        
    },
        {
        name: "Gã hề Joker (2019)",
        ep: "Tập 1 Vietsub",
        img: "Gã hề – Joker (2019).jpg",
        youtube: "https://www.youtube.com/embed/zAGVQLHvwOY",
        type: "phimle",
        country: "Âu Mỹ"

        
    },
        {
        name: "inception (2010)",
        ep: "Tập 1 Vietsub",
        img: "Inception (2010).jpg",
        youtube: "https://www.youtube.com/embed/YoHD9XEInc0",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "Fight Club (1999)",
        ep: "Tập 1 Vietsub",
        img: "Fight Club (1999).jpg",
        youtube: "https://www.youtube.com/embed/SUXWAEX2jlg",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "Doraemon Nobita no Esekai Monogatari",
        ep: "Tập 1 Vietsub",
        img: "Doraemon Nobita no Esekai Monogatari.jpg",
youtube: "https://www.youtube.com/embed/vgBKEYU9L1M",
        type: "phimle",
        country: "Nhật Bản"

    },
            {
        name: "Định mệnh (2009)",
        ep: "Tập 1 Vietsub",
        img: "Định mệnh – Inglourious basterds (2009).jpg",
        youtube: "https://www.youtube.com/embed/KnrRy6kSFF0",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "Demon Slayer Kimetsu no Yaiba Infinity Castle (2025)",
        ep: "Tập 1 Vietsub",
        img: "Demon Slayer Kimetsu no Yaiba Infinity Castle (2025).jpg",
        youtube: "https://www.youtube.com/embed/oUhdKgPM-7s",
        type: "phimle",
        country: "Nhật Bản"

    },
            {
        name: "Cua lại vợ bầu (2019)",
        ep: "Tập 1 Engsub",
        img: "cua lại vợ bầu.jpg",
        youtube: "https://www.youtube.com/embed/YzthkPrMkuk",
        type: "phimle",
        country: "Viet Nam"

    },
            {
        name: "Pulp Fiction (1994)",
        ep: "Tập 1 Vietsub",
        img: "Chuyện tào lao.jpg",
        youtube: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "Chúa tể của những chiếc nhẫn",
        ep: "Tập 1 Vietsub",
        img: "Chúa tể của những chiếc nhẫn.jpg",
        youtube: "https://www.youtube.com/embed/V75dMMIW2B4",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "Avengers Endgame (2019)",
        ep: "Tập 1 Vietsub",
        img: "avengers endgame.jpg",
        youtube: "https://www.youtube.com/embed/TcMBFSGVi1c",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "Avengers Infinity War (2018)",
        ep: "Tập 1 Vietsub",
        img: "avenger infinity war.jpg",
        youtube: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "Alien (1979)",
        ep: "Tập 1 Vietsub",
        img: "Alien (1979).jpg",
        youtube: "https://www.youtube.com/embed/LjLamj-b0I8",
        type: "phimle",
        country: "Âu Mỹ"

    },
            {
        name: "12 angry men (1957)",
        ep: "Tập 1 Vietsub",
        img: "12 angry men (1975).jpg",
        youtube: "https://www.youtube.com/embed/_13J_9B5jEk",
        type: "phimle",
        country: "Âu Mỹ"

    },

        {
        name: "3 Idiots (2009)",
        ep: "Tập 1 Vietsub",
        img: "3 chàng ngốc – 3 Idiots (2009).jpg",
        youtube: "https://www.youtube.com/embed/u6KPDkHxZfQ?si=EgAzen-is-Z6Jz-_",
        type: "phimle",
        country: "India"

    },
        {
        name: "Breaking bad season 5",
        ep: "Tập 16 Vietsub",
        img: "breaking bad season 5.jpg",
        type: "phimbo",
        country: "Âu Mỹ",
        episodes: [
        {
            ep: 1,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
},
        {
            ep: 2,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 4,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 5,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 6,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 7,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 8,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 9,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 10,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 11,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 12,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 13,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 14,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 15,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
         {
            ep: 16,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
    
    ]

    },
    {
        name: "Breaking bad season 4",
        ep: "Tập 13 Vietsub",
        img: "breaking bad season 4.jpg",
        type: "phimbo",
        country: "Âu Mỹ",
        episodes: [
        {
            ep: 1,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 2,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 3,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 4,
            label: "Vietsub",
youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 5,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 6,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 7,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 8,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 9,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 10,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 11,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 12,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 13,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
    ]
    },
    {
        name: "Breaking bad season 3",
        ep: "Tập 13 Vietsub",
        img: "breaking bad season 3.jpg",
        type: "phimbo",
        country: "Âu Mỹ",
        episodes: [
        {
            ep: 1,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 2,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 3,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 4,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 5,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 6,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 7,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 8,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 9,
label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 10,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 11,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 12,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 13,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
    ]
    },
    {
        name: "Breaking bad season 2",
        ep: "Tập 13 Vietsub",
        img: "breaking bad season 2.jpg",
        type: "phimbo",
        country: "Âu Mỹ",
        episodes: [
        {
            ep: 1,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 2,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 3,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 4,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 5,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 6,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 7,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 8,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 9,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 10,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 11,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 12,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 13,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
    ]
},
    {
        name: "Breaking bad season 1",
        ep: "Tập 13 Vietsub",
        img: "breaking bad season 1.jpg",
        type: "phimbo",
        country: "Âu Mỹ",
        episodes: [
        {
            ep: 1,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 2,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 3,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 4,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 5,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 6,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
        {
            ep: 7,
            label: "Vietsub",
            youtube: "https://www.youtube.com/embed/OgF7CiE3yVw?si=g9wHnragCGa_UQgg"
        },
    ]
    },

];

function renderMovies(list) {
    const movieList = document.getElementById("movieList"); // ✅ THÊM DÒNG NÀY
    movieList.innerHTML = "";

    list.forEach((m, index) => {
        movieList.innerHTML += `
            <div class="movie" onclick="openMovie(${movies.indexOf(m)})">
                <span class="tag">${m.ep}</span>
                <div class="thumb">
                    <img src="${m.img}">
                    <div class="play">▶</div>
                </div>
                <p>${m.name}</p>
            </div>
        `;
    });
}

// Hiển thị tất cả phim lúc đầu
renderMovies(movies);


/* HÀM MỞ TRANG XEM PHIM */
function openMovie(index) {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
        alert("⚠️ Vui lòng đăng nhập để xem phim!");
        return;
    }

    localStorage.setItem("currentMovie", JSON.stringify(movies[index]));
    window.location.href = "watch.html";
}

/* ================= TOP PHIM TUẦN ================= */

const topMovies = [
    {
        name: "Mai (2024)",
        img: "Mai.jpg"
    },
    {
        name: "Nhà bà nữ (2023)",
        img: "Nhà bà nữ.jpg"
    },
    {
        name: "Bố Già",
        img: "Bố già.jpg"
    },
    {
        name: "The Avengers 2012",
        img: "The Avengers 2012.jpg"
    },
    {
        name: "Doraemon Nobita no Esekai Monogatari",
        img: "Doraemon Nobita no Esekai Monogatari.jpg"
    }
];

const topList = document.getElementById("topList");

topMovies.forEach(t => {
    topList.innerHTML += `
        <li>
            <img src="${t.img}">
            <div>
                <div>${t.name}</div>
                <div class="star">★★★★★</div>
            </div>
        </li>
    `;
});
function showAll() {
    renderMovies(movies);
}

function showSeries() {
const phimBo = movies.filter(m => m.type === "phimbo");
    renderMovies(phimBo);
}

function showSingle() {
    const phimLe = movies.filter(m => m.type === "phimle");
    renderMovies(phimLe);
}
function filterCountry(country) {
    const list = movies.filter(m => m.country === country);
    renderMovies(list);
}
const mainCountries = [
    "Viet Nam",
    "Trung Quốc",
    "Âu Mỹ",
    "Nhật Bản",
    "Hàn Quốc"
];
function showOtherCountries() {
    const list = movies.filter(
        m => !mainCountries.includes(m.country)
    );
    renderMovies(list);
}
// ================= SEARCH PHIM =================
const searchInput = document.getElementById("searchInput");

if (!searchInput) {
    console.error("❌ Không tìm thấy input search");
} else {
    console.log("✅ Search OK");
}

searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    const result = movies.filter(movie =>
        movie.name.toLowerCase().includes(keyword)
    );

    renderMovies(result);
});
function login() {
    localStorage.setItem("isLogin", "true");
    alert("✅ Đăng nhập thành công!");
}

function logout() {
    localStorage.removeItem("isLogin");
    alert("👋 Đã đăng xuất!");
}
const userMenu = document.getElementById("userMenu");
const isLogin = localStorage.getItem("isLogin");
const currentUser = localStorage.getItem("currentUser");

if (userMenu) {
    if (isLogin && currentUser) {
        userMenu.innerHTML = `
            <span>👤 ${currentUser}</span>
            <a href="#" onclick="logout()">Đăng xuất</a>
        `;
    } else {
        userMenu.innerHTML = `
            <a href="login.html">Đăng nhập</a>
        `;
    }
}

function logout() {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");
    window.location.reload();
}