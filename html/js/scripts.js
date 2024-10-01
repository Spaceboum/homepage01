/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
// DOMContentLoaded 이벤트가 발생하면 스크립트가 실행됨. 즉, HTML 문서가 완전히 로드되고 파싱되면 실행된다.
window.addEventListener('DOMContentLoaded', () => {
    
    // 이전 스크롤 위치를 저장하는 변수 (초기값 0)
    let scrollPos = 0;

    // 'mainNav'라는 ID를 가진 네비게이션 바 요소를 가져옴
    const mainNav = document.getElementById('mainNav');

    // 네비게이션 바의 높이를 저장 (네비게이션이 화면에서 고정되기 시작하는 기준)
    const headerHeight = mainNav.clientHeight;

    // 윈도우의 스크롤 이벤트가 발생할 때마다 호출되는 함수
    window.addEventListener('scroll', function() {

        // 현재 스크롤 위치를 계산 (페이지 상단에서 얼마나 내려왔는지)
        const currentTop = document.body.getBoundingClientRect().top * -1;

        // 현재 스크롤 위치가 이전 스크롤 위치보다 작은 경우 (즉, 사용자가 페이지 위로 스크롤하는 경우)
        if (currentTop < scrollPos) {
            // 위로 스크롤 중
            // 페이지의 최상단이 아니고, mainNav 요소에 'is-fixed' 클래스가 포함되어 있을 때
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                // 네비게이션 바를 보이게 함
                mainNav.classList.add('is-visible');
            } else {
                // 디버깅용 콘솔 로그 (123 출력)
                console.log(123);
                // 네비게이션 바에서 'is-visible' 및 'is-fixed' 클래스를 제거하여 숨김
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // 아래로 스크롤 중
            // 네비게이션 바에서 'is-visible' 클래스를 제거하여 숨김
            mainNav.classList.remove(['is-visible']);

            // 현재 스크롤 위치가 네비게이션 바 높이보다 크고, 'is-fixed' 클래스가 없는 경우
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                // 네비게이션 바에 'is-fixed' 클래스를 추가하여 고정함
                mainNav.classList.add('is-fixed');
            }
        }

        // 이전 스크롤 위치를 현재 위치로 업데이트
        scrollPos = currentTop;
    });
});

