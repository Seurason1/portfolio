// 사이트의 모든 데이터를 관리하는 객체
const siteData = {
    // About 및 메인 상단 정보
    profile: {
        name: "KIM SANG WON",
        job: "3D Environment Artist", 
        email: "k0108419@naver.com",
        education: "2018 ~ 2026     한양대학교 에리카 캠퍼스 일본학과 졸업",
        profileImage: "assets/profile.png" // 깃허브 images 폴더에 사진을 넣고 이름 변경
    },
    
    // Portfolio 항목 리스트 (여기에 새 객체를 추가하면 페이지에 자동 반영됩니다)
    portfolio: [
        {
            id: 1, // 고유 번호
            title: "AxeGun",
            thumbnail: "assets/portfolio/Axegun/AxeGun (1).png", // 메인화면 정사각형 썸네일
            detailImages: [ // 세부 페이지에서 스크롤될 이미지들
                "assets/portfolio/Axegun/AxeGun (1).png",
                "assets/portfolio/Axegun/AxeGun (2).png",
                "assets/portfolio/Axegun/AxeGun (3).png",
                "assets/portfolio/Axegun/AxeGun (4).png",
                "assets/portfolio/Axegun/AxeGun (5).png",
                "assets/portfolio/Axegun/AxeGun (6).png"                
            ]
        },
        {
            id: 2,
            title: "Hand Drill",
            thumbnail: "assets/portfolio/Hand Drill/5 (1).png",
            detailImages: [
                "assets/portfolio/Hand Drill/5 (1).png",
                "assets/portfolio/Hand Drill/5 (2).png",
                "assets/portfolio/Hand Drill/5 (3).png",
                "assets/portfolio/Hand Drill/5 (4).png",
                "assets/portfolio/Hand Drill/5 (5).png"
            ]
        },
        {
            id: 3,
            title: "Chesterfield chair",
            thumbnail: "assets/portfolio/Chesterfield chair/6 (1).png",
            detailImages: [
                "assets/portfolio/Chesterfield chair/6 (1).png",
                "assets/portfolio/Chesterfield chair/6 (2).png",
                "assets/portfolio/Chesterfield chair/6 (3).png",
                "assets/portfolio/Chesterfield chair/6 (4).png"
            ]
        },
        {
            id: 4,
            title: "Wood chair",
            thumbnail: "assets/portfolio/Wood chair/4 (1).png",
            detailImages: [
                "assets/portfolio/Wood chair/4 (1).png",
                "assets/portfolio/Wood chair/4 (2).png",
                "assets/portfolio/Wood chair/4 (3).png",
                "assets/portfolio/Wood chair/4 (4).png",
                "assets/portfolio/Wood chair/sofaRef(1).png",
                "assets/portfolio/Wood chair/sofaRef(2).png"
            ]
        },
        {
            id: 5,
            title: "Post apocalypse Knife",
            thumbnail: "assets/portfolio/Post apocalypse Knife/2 (1).png",
            detailImages: [
                "assets/portfolio/Post apocalypse Knife/2 (1).png",
                "assets/portfolio/Post apocalypse Knife/2 (2).png",
                "assets/portfolio/Post apocalypse Knife/2 (3).png",
                "assets/portfolio/Post apocalypse Knife/2 (4).png"
            ]
        },
        {
            id: 6,
            title: "Rocks",
            thumbnail: "assets/portfolio/Rocks/1.png",
            detailImages: [
                "assets/portfolio/Rocks/1.png",
                "assets/portfolio/Rocks/2 (1).png",
                "assets/portfolio/Rocks/2 (2).png",
                "assets/portfolio/Rocks/3 (1).png",
                "assets/portfolio/Rocks/3 (2).png",
                "assets/portfolio/Rocks/5.png",
                "assets/portfolio/Rocks/6 (1).png",
                "assets/portfolio/Rocks/6 (2).png"
            ]
        },
        {
            id: 7,
            title: "Vintage telephone",
            thumbnail: "assets/portfolio/Vintage Telephone/0 (1).png",
            detailImages: [
                "assets/portfolio/Vintage Telephone/0 (1).png",
                "assets/portfolio/Vintage Telephone/0 (2).png"                             
            ]
        }
        // 새로운 파일을 올리고 싶다면 위 형식과 똑같이 { id: 4, title: "새 작업", ... } 를 추가하세요.
    ]
};
