# 🚀 Market Mentor: 창업 상담 AI 플랫폼

> **"당신의 창업 파트너, Market Mentor"**

Market Mentor는 사용자가 입력한 **지역 정보(자치구, 행정동)** 및 **업종명**을 기반으로 GPT 기반 AI가 **상권 분석**, **입지 평가**, **창업 업종 추천** 등의 정보를 제공하는 대화형 창업 지원 웹 서비스입니다.

---

## 🧩 주요 기능

- 📍 **입지 분석**: 유동 인구, 부동산 거래, 경쟁 업종 등의 데이터를 바탕으로 입지 평가
- 💡 **창업 업종 추천**: GPT-4를 활용한 유망 업종 추천
- 🧮 **창업 적합 점수**: 3가지 핵심 지표를 종합하여 입지 적합도 점수 제공
- 💬 **AI 챗봇 상담**: 분석 결과 기반 GPT 챗봇 상담 기능

---

## 🎥 데모 화면

> 추후 배포 및 시연 영상 링크 추가 예정  
> 로컬에서는 http://localhost:3000 으로 실행됩니다.

---

## ⚙️ 설치 및 실행 방법

### 1. 프로젝트 클론

```bash
git clone https://github.com/mlngwan/trafficAI.git
cd trafficAI

2. 의존성 설치
bash
복사
편집
npm install

3. 개발 서버 실행
bash
복사
편집
npm run dev
기본 접속: http://localhost:3000

📂 폴더 구조
bash
복사
편집
📁 app/
  ├── page.tsx              # 상권 분석 메인 페이지
  └── chat/page.tsx         # AI 챗봇 페이지

📁 components/
  ├── sidebar.tsx           # 로고 및 메뉴
  ├── input.tsx             # 입력 컴포넌트
  ├── button.tsx            # 로딩 버튼
  └── chat-input.tsx        # AI 입력창

📁 lib/
  └── useChat.ts            # GPT API와 연동된 채팅 로직

📁 public/
  └── logo.jpg              # 서비스 로고
🛠 사용 기술 스택
영역	기술
Frontend	Next.js 14, TypeScript, TailwindCSS
Backend	Flask (Python), LangChain, OpenAI GPT-4
데이터 API	서울 유동인구 OpenAPI, 공공데이터포털 부동산 API, Kakao 장소검색
📡 주요 API 엔드포인트 (Flask)
메서드	경로	설명
GET	/analyze_market	상권 분석 데이터 종합 조회
POST	/ask_rag	GPT RAG 방식 질문-답변 처리
GET	/recommend_business	유망 창업 업종 추천
GET	/location_analysis	특정 업종의 지역 적합성 분석
🧑‍💻 팀 소개
팀명: Market Mentor

역할:

💡 기획 및 UI/UX 설계

💻 프론트엔드 개발 (Next.js + Tailwind)

🧠 백엔드 및 AI 챗봇 구현 (Flask + GPT)

📊 공공데이터 API 연동 및 처리
```
