import requests
import json

# 한국은행 Open API 설정
API_KEY = 'FNJ2W8O88I2TSGD3GOMD'  # 발급받은 API 키를 입력
BASE_URL = 'https://ecos.bok.or.kr/api/'
SERVICE_NAME = 'StatisticTableList'  # 서비스명
REQUEST_TYPE = 'json'  # 결과값의 파일 형식 - xml, json
LANGUAGE = 'kr'  # 결과값의 언어 - kr(국문), en(영문)
START_COUNT = '1'  # 전체 결과값 중 시작 번호
END_COUNT = '10'  # 전체 결과값 중 끝 번호
STAT_CODE = '102Y004'  # 통계표코드 (선택사항)

# API 호출 URL 생성
url = f'{BASE_URL}{SERVICE_NAME}/{API_KEY}/{REQUEST_TYPE}/{LANGUAGE}/{START_COUNT}/{END_COUNT}/{STAT_CODE}'

# API 요청
response = requests.get(url)

# 응답 확인 및 JSON 파싱
if response.status_code == 200:
    try:
        data = response.json()
        print(json.dumps(data, indent=4, ensure_ascii=False))  # 예쁘게 출력
    except json.JSONDecodeError:
        print("JSON decode error. Response content is not in JSON format.")
        print(response.text)
else:
    print(f"Error: {response.status_code}, Message: {response.text}")