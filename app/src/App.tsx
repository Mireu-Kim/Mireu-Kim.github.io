import { useEffect, useState } from 'react'

type Skill = { name: string; icon: string; alt: string }
type Work = {
	href: string
	image: string
	alt: string
	hash: string
	title: string
	date: string
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
		href: 'https://m.kbcard.com/CMN/DVIEW/KFAMCXHACADC0009',
		image: 'img_work_kb.png',
		alt: 'KB Pay',
		hash: '#mobile',
		title: 'KB Pay 3.0 고도화',
		date: '2025.06 ~ 2025.12',
	},
	{
		href: 'https://www.uni114.co.kr/',
		image: 'img_work_uni.png',
		alt: '유앤아이의원',
		hash: '#pc #mobile #다국어',
		title: '유앤아이의원 재구축',
		date: '2025.03 ~ 2025.06',
	},
	{
		href: 'https://www.meritzfire.com/main.do#!/',
		image: 'img_work_meritz01.png',
		alt: '메리츠화재',
		hash: '#pc #mobile #웹접근성',
		title: '메리츠화재 웹접근성 인증마크 갱신',
		date: '2024.12 ~ 2025.02',
	},
	{
		href: 'https://nhpay.nonghyup.com/',
		image: 'img_work_nhpay.png',
		alt: 'nhpay',
		hash: '#mobile',
		title: '농협카드 통합 구축',
		date: '2024.02 ~ 2024.11',
	},
	{
		href: 'https://www.work24.go.kr/cm/main.do',
		image: 'img_work_work24.png',
		alt: '고용24',
		hash: '#pc #mobile',
		title: '고용24 3단계 구축',
		date: '2023.10 ~ 2023.11',
	},
	{
		href: 'https://store.meritzfire.com/main.do#!/',
		image: 'img_work_meritz02.png',
		alt: '메리츠화재 공식몰',
		hash: '#pc #mobile',
		title: '메리츠화재 공식몰 운영 및 고도화',
		date: '2022.12 ~ 2023.10',
	},
	{
		href: 'https://www.wetax.go.kr/main.do',
		image: 'img_work_wetax.png',
		alt: '위택스',
		hash: '#pc',
		title: '위택스 구축',
		date: '2022.01 ~ 2022.10',
	},
]

function App() {
	const [isScrolled, setIsScrolled] = useState(false)
	const imageMap = import.meta.glob('./images/*', {
		eager: true,
		import: 'default',
	}) as Record<string, string>
	const imageUrl = (name: string) => imageMap[`./images/${name}`] ?? ''

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 0)
		onScroll()
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

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
						<li key={work.title}>
							<a href={work.href} target="_blank" rel="noreferrer">
								<div className="img_wrap">
									<img src={imageUrl(work.image)} alt={work.alt} />
								</div>
								<div className="text_wrap">
									<p className="hash">{work.hash}</p>
									<p className="title">{work.title}</p>
									<p className="date">{work.date}</p>
								</div>
							</a>
						</li>
						))}
					</ul>
				</div>
			</div>

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
