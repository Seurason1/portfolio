document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('portfolio-grid');

    // GitHub에 올라간 data.json을 불러와서 화면에 그립니다.
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // 데이터의 역순(최신순)으로 보여주려면 data.reverse() 를 사용할 수 있습니다.
            data.forEach(item => {
                // 새로운 아이템(div) 생성
                const itemDiv = document.createElement('div');
                itemDiv.className = 'portfolio-item';
                
                // HTML 구조 삽입
                itemDiv.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.title}">
                    <div class="portfolio-info">
                        <h3>${item.title}</h3>
                        <p>${item.category}</p>
                    </div>
                `;
                
                // 그리드에 추가
                grid.appendChild(itemDiv);
            });
        })
        .catch(error => console.error('데이터를 불러오는데 실패했습니다:', error));
});
