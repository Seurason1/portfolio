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
            title: "앤틱 원목 서랍장 복원 및 렌더링",
            thumbnail: "images/wood_thumb.jpg",
            detailImages: [
                "images/wood_detail1.jpg",
                "images/wood_detail2.jpg"
            ]
        },
        {
            id: 3,
            title: "건축물 3D 모델링 (정면/측면 비율 유지)",
            thumbnail: "images/building_thumb.jpg",
            detailImages: [
                "images/building_detail1.jpg",
                "images/building_detail2.jpg",
                "images/building_detail3.jpg"
            ]
        }
        // 새로운 파일을 올리고 싶다면 위 형식과 똑같이 { id: 4, title: "새 작업", ... } 를 추가하세요.
    ]
};
