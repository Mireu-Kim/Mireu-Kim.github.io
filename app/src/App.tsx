import { useEffect, useState } from 'react'

type Skill = { name: string; icon: string; alt: string }

type WorkDetail = {
	overview: string
	contribution: string
	role: string[]
	stack?: string[]
}

type Work = {
	id: string
	image: string
	alt: string
	hash: string
	title: string
	date: string
	/** 모달 안에서만 사용할 수 있는 원본 링크(선택) */
	siteUrl?: string
	detail: WorkDetail
}

const skills: Skill[] = [
	{ name: 'HTML5', icon: 'img_skill01.png', alt: 'html' },
	{ name: 'CSS', icon: 'img_skill02.png', alt: 'css' },
	{ name: 'Javascript', icon: 'img_skill03.png', alt: 'javascript' },
	{ name: 'Vue', icon: 'img_skill04.png', alt: 'vue' },
	{ name: 'SCSS', icon: 'img_skill05.png', alt: 'scss' },
	{ name: 'jQuery', icon: 'img_skill06.png', alt: 'jQuery' },
	{ name: 'Git', icon: 'img_skill07.png', alt: 'git' },
	{ name: 'Sourcetree', icon: 'img_skill08.png', alt: 'sourcetree' },
	{ name: 'Zeplin', icon: 'img_skill09.png', alt: 'zeplin' },
	{ name: 'Figma', icon: 'img_skill10.png', alt: 'figma' },
	{ name: 'XD', icon: 'img_skill11.png', alt: 'xd' },
	{ name: 'Photoshop', icon: 'img_skill12.png', alt: 'photoshop' },
	{ name: 'Chat GPT', icon: 'img_skill13.png', alt: 'Chat GPT' },
	{ name: 'Gemini', icon: 'img_skill14.png', alt: 'Gemini' },
	{ name: 'Claude', icon: 'img_skill15.png', alt: 'Claude' },
	{ name: 'Cursor Ai', icon: 'img_skill16.png', alt: 'Cursor Ai' },
]

const works: Work[] = [
	{
		id: 'meritz-a11y',
		siteUrl: 'https://www.meritzfire.com/main.do#!/',
		image: 'img_work_meritz01.png',
		alt: '메리츠화재',
		hash: '#pc #mobile #웹접근성',
		title: '메리츠화재 웹접근성 인증마크 갱신',
		date: '2026.01 ~ 2026.03',
		detail: {
			overview:
				'메리츠화재 공식 사이트(PC), 보험상품몰(PC/MO) 총 3개 사이트의 접근성 항목을 점검했습니다. 마크업, 키보드 포커스, 대체 텍스트, 초점 이동 등의 항목을 반영하고 접근성 인증 마크를 갱신했습니다.',
			role: [
				'웹 콘텐츠 접근성 지침(KWCAG) 준수 여부 진단 및 결함 리포트 작성',
				'시맨틱 태그 활용 및 WAI-ARIA 속성 적용을 통한 사용자 경험 개선',
				'탭 메뉴, 레이어 팝업 등 복잡한 UI의 키보드 포커스 트랩 및 논리적 순서 오류 수정',
				'3개 사이트 모두 웹 접근성 인증 마크 갱신 완료',
			],
			contribution:'50% (2인 협업)',
			stack: ['HTML', 'CSS', 'JavaScript','Angular', 'Eclipse'],
		},
	},
	{
		id: 'kb-pay',
		siteUrl: 'https://m.kbcard.com/CMN/DVIEW/KFAMCXHACADC0009',
		image: 'img_work_kb.png',
		alt: 'KB Pay',
		hash: '#mobile',
		title: 'KB Pay 3.0 앱/모바일웹 고도화',
		date: '2025.06 ~ 2025.12',
		detail: {
			overview:
				'KB Pay 3.0은 업그레이드된 디자인 언어와 UX 재설계를 통해 사용자가 금융 정보를 보다 쉽고 직관적으로 이해할 수 있는 환경을 구현하였습니다.',
			role: [
				'자산, 내 정보 메뉴 전담 화면 구현',
				'웹뷰 환경에서 OS별 UI 레이아웃 이슈 대응',
				'금융권 필수 지침인 웹 콘텐츠 가이드라인을 준수하여 시맨틱 마크업 수행',
				'CSS 충돌 방지를 위한 BEM 네이밍 방식 적용',
			],
			contribution:'개인 담당 파트 100% (전체 프로젝트 기준 약 20%)',
			stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
		},
	},
	{
		id: 'uni114',
		siteUrl: 'https://www.uni114.co.kr/',
		image: 'img_work_uni.png',
		alt: '유앤아이의원',
		hash: '#pc #mobile #다국어',
		title: '유앤아이의원 재구축',
		date: '2025.03 ~ 2025.06',
		detail: {
			overview:
				'의료기관 사이트 재구축으로 기존 PHP 기반 웹사이트를 JSP 기반으로 전환하는 과정에서 JSP 연동을 고려한 퍼블리싱 작업을 진행했습니다.',
			role: [
				'퍼블리싱 PL',
				'프로젝트 공통 가이드라인 수립으로 코드 일관성 확보',
				'랜딩페이지 안에 있는 복잡한 인터랙션 구현',
				'고객 요구사항 분석 부터 산출물 관리까지 전체 프로세스 리딩',
			],
			contribution:'100% (퍼블리싱 리딩)',
			stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
		},
	},
	{
		id: 'nhpay',
		siteUrl: 'https://nhpay.nonghyup.com/',
		image: 'img_work_nhpay.png',
		alt: 'nhpay',
		hash: '#mobile',
		title: '농협카드 통합 구축',
		date: '2024.02 ~ 2024.11',
		detail: {
			overview: 'NH농협카드와 NH Pay의 분산된 기능과 고객 데이터를 하나로 모으는 통합 구축 프로젝트로, 기존 앱의 부족했던 사용성을 개선하고 고객 친화적인 UXUI를 구축하였습니다.',
			role: [
				'금융, 고객센터 등 핵심 메뉴 전담 퍼블리싱 구현',
				'데이터 바인딩을 고려한 동적 마크업 및 Vue 데이터 구조에 맞는 UI 인터랙션 구현',
				'Vue 환경에서 재사용 가능한 UI 컴포넌트 구조 설계 및 마크업',
				'웹 접근성 품질인증마크 획득'
			],
			contribution:'개인 담당 파트 100% (전체 프로젝트 기준 약 30%)',
			stack: ['HTML', 'SCSS', 'JavaScript', 'Vue', 'Git'],
		},
	},
	{
		id: 'meritz-store',
		siteUrl: 'https://store.meritzfire.com/main.do#!/',
		image: 'img_work_meritz02.png',
		alt: '메리츠화재 공식몰',
		hash: '#pc #mobile',
		title: '메리츠화재 공식몰 운영 및 개선',
		date: '2022.12 ~ 2023.10',
		detail: {
			overview: '메리츠화재에서는 고객 데이터를 기반 컨설팅으로 UI/UX 개선 및 운영업무를 진행했습니다. 고객이 보험상품을 더욱 쉽게 가입을 할 수 있도록하며 등록한 고객정보로 채팅 및 텔레마케팅을 통해 바로 상품가입을 할 수 있도록 지원했습니다.',
			role: [
				'신규 보험 상품 출시 및 기존 상품 개정에 따른 상품 상세, 가입 프로세스 UI 반영',
				'마케팅 목적의 이벤트 페이지 및 배너, 팝업 제작',
				'모바일 운전자 보험 가입 프로세스 전면 개편',
				'사이트 전체 리뉴얼 작업 참여로 브랜드 일관성 강화'
			],
			contribution:'35% (3인 협업)',
			stack: ['HTML', 'CSS', 'JavaScript','Angular', 'Eclipse'],
		},
	},
	{
		id: 'wetax',
		siteUrl: 'https://www.wetax.go.kr/main.do',
		image:'img_work_wetax.png',
		alt: '위택스',
		hash: '#pc',
		title: '위택스 구축',
		date: '2022.01 ~ 2022.10',
		detail: {
			overview: '기존 노후화된 위택스에서 성능 향상과 납세 편의성 등을 개선한 서비스입니다. 대국민이 이용하는 서비스인 만큼 사용자 편의성이 높은 UI/UX를 구축하고 공공기관 웹 접근성 품질 인증 기준에 맞춘 시맨틱 마크업을 구현했습니다.',
			role: [
				'차세대 시스템 전환에 따른 신고, 조회, 납부 등 화면 작업',
				'행정안전부 웹 사이트 구축 가이드 및 전자정부 표준 프레임워크 기반의 UI 표준 준수',
				'공공기관 필수 요건인 웹 접근성 품질 인증 기준에 맞춘 시맨틱 마크업 구현',
				'크로스 브라우징 대응'
			],
			contribution:'약 15% (PC 버전 주요 대민 서비스 화면 전담)',
			stack: ['HTML', 'CSS', 'JavaScript','Eclipse'],
		},
	},
]

function App() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [activeWork, setActiveWork] = useState<Work | null>(null)
	const imageMap = import.meta.glob('./images/*', {
		eager: true,
		import: 'default',
	}) as Record<string, string>
	const imageUrl = (name: string) => imageMap[`./images/${name}`] ?? ''

	// 스크롤 이벤트
	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 0)
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	// 스크롤 애니메이션 이벤트
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
					entry.target.classList.add('show')
					} else {
					entry.target.classList.remove('show')
					}
				})
			},
			{ threshold: 0.1 },
		)

		const targets = document.querySelectorAll('.scroll_text')
		targets.forEach((target) => observer.observe(target))
		return () => observer.disconnect()
	}, [])

	// 팝업
	useEffect(() => {
		if (!activeWork) return
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setActiveWork(null)
		}
		window.addEventListener('keydown', onKeyDown)
		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			window.removeEventListener('keydown', onKeyDown)
			document.body.style.overflow = prevOverflow
		}
	}, [activeWork])

	const scrollToIntro = () => {
		const intro = document.getElementById('intro')
		intro?.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
	<>
		<header>
			<div id="header" className={isScrolled ? 'on' : ''}>
				<nav>
					<div className="logo_wrap">
						<h1><a href="#intro">Mireu&apos;s Web Portfolio</a></h1>
					</div>
					<ul>
						<li><a href="#about">ABOUT ME</a></li>
						<li><a href="#work">WORK</a></li>
						<li><a href="#footer">CONTACT</a></li>
					</ul>
				</nav>
			</div>
		</header>

		<div id="container">
			<div id="intro" className="section__intro scroll_text">
				<div className="wrap">
					<h2>KIM MIREU&apos;s<br />PORTFOLIO</h2>
					<p className="text">
						안녕하세요. 웹퍼블리셔 김미르입니다.
						<br />
						최신 웹 기술에 대한 깊은 이해와 웹 접근성, 다양한 대형 프로젝트 경험을 바탕으로
						<br />
						사용자 중심의 웹사이트를 구축하는데 강점을 가지고 있습니다.
					</p>
				</div>
			</div>

			<div id="about" className="section__about">
				<h3 className="section__title scroll_text">ABOUT ME</h3>
				<div className="profile">
					<div className="img_wrap">
						<img src={imageUrl('img_profile.png')} alt="프로필" />
					</div>
					<div className="text_wrap">
						<p className="text">웹 퍼블리셔로서 사용자 중심의 UI 구현과 웹 표준을 중요하게 생각하는 김미르입니다.</p>
						<p className="text">
						새로운 기술과 트렌드를 배우는 것을 즐기고 꾸준히 성장하기 위해 노력하고 있으며,
						<br />
						디자인, 개발, 기획 등 다양한 파트와의 원활한 협업과 커뮤니케이션을 통해 더 나은 결과물을
						만들어왔습니다.
						</p>
						<p className="text">
						작은 부분도 놓치지 않으려는 꼼꼼함과 책임감을 바탕으로 일에 임하고 있습니다.
						<br />
						항상 열린 마음으로 소통하며 팀워크를 중요하게 생각합니다.
						</p>
						<p className="text">앞으로도 더 나은 웹 서비스를 위해 끊임없이 배우고 도전하겠습니다.</p>
						<a
						href="https://www.notion.so/1f9c70dd46df807789f6e70710f2ed80"
						target="_blank"
						rel="noreferrer"
						className="link"
						>
						자기소개 더보기
						</a>

						<div className="skill_wrap">
							<h4 className="sub__title">SKILLS</h4>
							<ul className="skill">
								{skills.map((skill) => (
								<li key={skill.name}>
									<img src={imageUrl(skill.icon)} alt={skill.alt} />
									<span>{skill.name}</span>
								</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="cont_wrap">
					<div className="cont">
						<h4 className="sub__title scroll_text">WORK EXPERIENCE</h4>
						<ul>
							<li><span className="date">2022.10 ~ 재직중</span>(주)와일리 컨버전스 3본부 매니저</li>
							<li><span className="date">2022.01 ~ 2022.10</span>(주)에이블유컴즈 프리랜서</li>
							<li><span className="date">2020.11 ~ 2021.10</span>(주)티앤에스컴퍼니 제작팀 사원</li>
						</ul>
					</div>
					<div className="cont">
						<h4 className="sub__title scroll_text">EDUCATION</h4>
						<ul>
							<li><span className="date">2020.09 ~ 2024.02</span>한국방송통신대학교 컴퓨터과학과 졸업</li>
							<li><span className="date">2019.12 ~ 2020.07</span>리메인 웹프로페셔널 과정 수료</li>
							<li><span className="date">2018.07 ~ 2018.12</span>연희직업전문학교 디지털 반응형 웹디자인 과정 수료</li>
							<li><span className="date">2016.03 ~ 2018.02</span>숭의여자대학교 경영과 졸업</li>
						</ul>
					</div>
				</div>
			</div>

			<div id="work" className="section__work">
				<div className="inner">
					<h3 className="section__title">WORK</h3>
					<ul>
						{works.map((work) => (
						<li key={work.id}>
							<button
								type="button"
								className="work_card"
								onClick={() => setActiveWork(work)}
								aria-haspopup="dialog"
								aria-label={`${work.title} 상세 보기`}
							>
								<div className="img_wrap">
									<img src={imageUrl(work.image)} alt={work.alt} />
								</div>
								<div className="text_wrap">
									<p className="hash">{work.hash}</p>
									<p className="title">{work.title}</p>
									<p className="date">{work.date}</p>
								</div>
							</button>
						</li>
						))}
					</ul>
				</div>
			</div>

			{activeWork ? (
				<div
					className="work_modal"
					role="presentation"
					onClick={() => setActiveWork(null)}
				>
					<div
						className="work_modal__dialog"
						role="dialog"
						aria-modal="true"
						aria-labelledby="work-modal-title"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							type="button"
							className="work_modal__close"
							onClick={() => setActiveWork(null)}
							aria-label="닫기"
						>
							×
						</button>
						<div className="work_modal__body">
							<p className="work_modal__hash">{activeWork.hash}</p>
							<h4 id="work-modal-title" className="work_modal__title">
								{activeWork.title}
							</h4>
							<p className="work_modal__date">{activeWork.date}</p>
							<p className="work_modal__overview">{activeWork.detail.overview}</p>
							<div className="work_modal__section">
								<h5 className="work_modal__sub">담당 업무</h5>
								<ul className="work_modal__list">
									{activeWork.detail.role.map((line) => (
										<li key={line}>{line}</li>
									))}
								</ul>
							</div>
							<div className="work_modal__section">
								<h5 className="work_modal__sub">기여도</h5>
								<p className="work_modal__tags">
									{activeWork.detail.contribution}
								</p>
							</div>
							{activeWork.detail.stack?.length ? (
								<div className="work_modal__section">
									<h5 className="work_modal__sub">기술 스택</h5>
									<p className="work_modal__tags">{activeWork.detail.stack.join(' · ')}</p>
								</div>
							) : null}
							{activeWork.siteUrl ? (
								<a
									className="work_modal__link"
									href={activeWork.siteUrl}
									target="_blank"
									rel="noreferrer"
								>
									사이트 열기
								</a>
							) : null}
						</div>
					</div>
				</div>
			) : null}

			<footer id="footer">
				<div className="inner">
					<div className="info_wrap">
						<p className="text">함께 일할 웹퍼블리셔를 찾고 계신가요?</p>
						<p className="email">s9288365@naver.com</p>
					</div>
					<a href="mailto:s9288365@naver.com" className="link">메일 보내기</a>
					<div className="copy_wrap">
						<p className="text">© 2026 All rights reserved</p>
						<ul>
							<li><a href="https://www.notion.so/1f9c70dd46df807789f6e70710f2ed80" target="_blank" rel="noreferrer">RESUME</a></li>
							<li><a href="https://github.com/Mireu-Kim" target="_blank" rel="noreferrer">GITHUB</a></li>
						</ul>
					</div>
				</div>
			</footer>

			<button
				type="button"
				className="btn_top"
				onClick={scrollToIntro}
				style={{ display: isScrolled ? 'block' : 'none' }}
				aria-label="맨 위로 이동"
			></button>
		</div>
	</>
	)
}

export default App
