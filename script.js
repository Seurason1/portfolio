/**
 * 1. 포트폴리오 데이터 관리 (업로드 기능 대체)
 * 새로운 이미지를 GitHub의 images 폴더에 넣고, 아래 배열에 추가만 하면
 * 메인 페이지와 세부 페이지에 자동으로 반영됩니다.
 */
const portfolioData = [
    {
        id: 1,
        title: "Western Carriage",
        thumbnail: "images/thumb_carriage.jpg", // 메인에 보일 썸네일 경로
        // 세부 페이지에서 세로로 스크롤될 이미지들 경로
        detailImages: [
            "images/carriage_detail_1.jpg",
            "images/carriage_detail_2.jpg"
        ]
    },
    {
        id: 2,
        title: "Sci-Fi Corridor",
        thumbnail: "images/thumb_scifi.jpg",
        detailImages: [
            "images/scifi_detail_1.jpg",
            "images/scifi_detail_2.jpg",
            "images/scifi_detail_3.jpg"
        ]
    },
    {
        id: 3,
        title: "Antique Press Machine",
        thumbnail: "images/thumb_press.jpg",
        detailImages: [
            "images/press_detail_1.jpg",
            "images/press_detail_2.jpg"
        ]
    }
    // 새로운 작품 추가 예시:
    // {
    //     id: 4,
    //     title: "새로운 작품 이름",
    //     thumbnail: "images/새로운썸네일.jpg",
    //     detailImages: ["images/세부1.jpg", "images/세부2.jpg"]
    // }
];

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('portfolio-grid');
    const detailModal = document.getElementById('detail-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const detailImagesContainer = document.getElementById('detail-images-container');

    // 2. 포트폴리오 메인 화면 그리드 자동 생성
    portfolioData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'portfolio-item';
        div.innerHTML = `<img src="${item.thumbnail}" alt="${item.title}">`;
        
        // 3. 각 항목 클릭 시 세부 페이지(모달) 오픈 이벤트
        div.addEventListener('click', () => openDetail(item));
        
        gridContainer.appendChild(div);
    });

    // 4. 세부 페이지 열기 함수
    function openDetail(item) {
        modalTitle.textContent = item.title;
        detailImagesContainer.innerHTML = ''; // 기존 이미지 초기화

        // 세부 이미지들을 생성하여 세로로 정렬
        item.detailImages.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = item.title;
            detailImagesContainer.appendChild(img);
        });

        // 모달창 보이게 하고, 바디 스크롤 막기
        detailModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    }

    // 5. 세부 페이지 닫기 버튼 로직
    closeModalBtn.addEventListener('click', () => {
        detailModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // 바디 스크롤 원상복구
    });

    // 6. 네비게이션 스크롤 부드럽게 이동 (About 클릭 시 하단 이동)
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60, // 네비게이션 바 높이만큼 보정
                behavior: 'smooth'
            });
        });
    });
});
