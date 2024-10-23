var beforeMail = [
    {
        "id": 1,
        "name": "Notion",
        "title": "Notion 팀스페이스에서 팀원들과 함께하세요.",
        "content": "이 메일을 팀원과 함께 공유하세요. 윤주영님이 나를 SW 동행 프로젝트 ...",
        "date": "2024.10.23 14:30"
    },
    {
        "id": 2,
        "name": "선생님_홍길동(클래스룸)",
        "title": "새 과제: 2-1반 프로젝트 작업한 내용 공유",
        "content": "- 알림설정 2024 JAVA 새 과제 프로젝트 작성 과정 오늘 작업한 것을 기록함",
        "date": "2024.10.22 15:30"
    }, {
        "id": 3,
        "name": "교보문고",
        "title": "(광고)[교보문고x삼프로TV) 초호화 라인업 '위즈덤 칼리지 시즌2' 드디어 공개",
        "content": "초호화 라인업 '위즈덤 칼리지 시즌2' 드디어 공개",
        "date": "2024.10.22 12:00"
    },
    {
        "id": 4,
        "name": "Instagram",
        "title": "__님, 피드에서 친구1님, 친구2님 외 여러 사람들을 확인하세요.",
        "content": "친구3, 친구4님 외 지인의 사진을 보려면 팔로우하세요.",
        "date": "2024.10.22 11:00"
    },
    {
        "id": 5,
        "name": "선생님_고길동(클래스룸)",
        "title": "새 과제: 2-1반 프로젝트 작업한 내용 공유",
        "content": "- 알림설정 2024 새 과제 프로젝트 작성 과정 오늘 작업한 것을 기록함",
        "date": "2024.10.20 14:30"
    },
    {
        "id": 6,
        "name": "삼성전자",
        "title": "(광고)[Z 폴드6 | 플립6] 8월 혜택이 곧 없어져요!",
        "content": "- Galaxy Ai is here. 지금 구매하면 좋은 이유를 한 눈에 확인해 보세요 ...",
        "date": "2024.10.19 11:28"
    },
    {
        "id": 7,
        "name": "SoundCloud",
        "title": "Weekly Download: Experience Next Wave Country Tracks ...",
        "content": "Explore the expansive nature of next wave country with tracks from Shabooze....",
        "date": "2024.10.17 17:20"
    }
    ,
    {
        "id": 8,
        "name": "SoundCloud",
        "title": "Weekly Download: The Spirit of Lofi Hip-Hop, Billie Eilish’s Sound Advice ...",
        "content": "Experience the gritty, experimental energy of lofi hip-hop w....",
        "date": "2024.10.15 13:29"
    },
    {
        "id": 9,
        "name": "Figma",
        "title": "Edit request from 윤주영 (s2329@e-mirim.hs.kr)",
        "content": "- 윤주영님이 호주 프젝 페이지를 편집했습니다. 2024년 10월 9일 오후 10:31",
        "date": "2024.10.9 22:31"
    },
    {
        "id": 10,
        "name": "Adobe",
        "title": "Google 계정 새로 연결됨",
        "content": "이제 귀하의 Google 계정이 Adobe 계정과 연결되며 로그인하는 데 사용할 수 있습니다...",
        "date": "2024.10.8 10:3"
    }

]

var mailListContainer = document.querySelector('.mail-list-container');

 
beforeMail.forEach(function(mail) {
    var mailItem = `
        <div class="mail-item">
            <div class="mail-info">
                <input type="checkbox" class="mail-checkbox">
                <img src="/image/warning.png" alt="" class="warning-icon">
                <div class="mail-name">${mail.name}</div>
            </div>
            <div class="info">
                <div class="mail-content">${mail.content}</div>
                <div class="mail-time">${mail.date}</div>
            </div>
        </div>
    `;
    mailListContainer.innerHTML += mailItem; // 메일 항목을 동적으로 추가
});
