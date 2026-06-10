document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 공통 프로필 데이터 렌더링 (index.html에서만 작동)
    const heroName = document.getElementById('hero-name');
    if (heroName) {
        // 메인 상단 렌더링
        heroName.textContent = siteData.profile.name;
        document.getElementById('hero-job').textContent = siteData.profile.job;

        // About 섹션 렌더링
        document.getElementById('about-image').src = siteData.profile.profileImage;
        document.getElementById('about-name').textContent = siteData.profile.name;
        document.getElementById('about-email').textContent = siteData.profile.email;
        document.getElementById('about-education').innerText = siteData.profile.education;

        // 포트폴리오 그리드 렌더링
        const gridContainer = document.getElementById('portfolio-grid');
        siteData.portfolio.forEach(project => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'portfolio-item';
            // 항목 클릭 시 detail.html로 id값을 파라미터로 넘김
            itemDiv.onclick = () => { window.location.href = `detail.html?id=${project.id}`; };

            const img = document.createElement('img');
            img.src = project.thumbnail;
            img.alt = project.title;

            const title = document.createElement('h3');
            title.textContent = project.title;

            itemDiv.appendChild(img);
            itemDiv.appendChild(title);
            gridContainer.appendChild(itemDiv);
        });
    }

    // 2. 세부 페이지 데이터 렌더링 (detail.html에서만 작동)
    const detailTitle = document.getElementById('detail-title');
    if (detailTitle) {
        // URL에서 id값 추출
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = parseInt(urlParams.get('id'));

        // 해당 id의 프로젝트 찾기
        const project = siteData.portfolio.find(p => p.id === projectId);

        if (project) {
            detailTitle.textContent = project.title;
            const imagesContainer = document.getElementById('detail-images-container');
            
            // 세부 이미지들을 순차적으로 세로 정렬
            project.detailImages.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = `${project.title} detail image`;
                imagesContainer.appendChild(img);
            });
        } else {
            detailTitle.textContent = "프로젝트를 찾을 수 없습니다.";
        }
    }
});
