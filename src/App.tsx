import { Routes, Route } from 'react-router-dom'
import { Kana } from './pages/Kana'
import { KanaDrill } from './pages/KanaDrill'
import './App.css'

function Home() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="logo">
            <span className="logo-jp">鍛</span>
            <span className="logo-text">Nihongo Forge</span>
          </a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#levels">Levels</a>
            <a href="/kana" className="btn btn-sm">Start Learning</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-badge">锻冶 — forging your Japanese skills</div>
        <h1>
          Master Japanese
          <br />
          <span className="hero-accent">from zero to fluent</span>
        </h1>
        <p className="hero-sub">
          Learn hiragana, katakana, kanji, vocabulary, and grammar
          with structured lessons and spaced repetition.
        </p>
        <div className="hero-actions">
          <a href="/kana" className="btn btn-primary">Get Started Free</a>
          <a href="#features" className="btn btn-ghost">See Features</a>
        </div>
        <div className="hero-preview">
          <div className="preview-card">
            <div className="preview-kana">
              <span>あ</span><span>い</span><span>う</span><span>え</span><span>お</span>
            </div>
            <div className="preview-label">Hiragana — Row A</div>
          </div>
        </div>
      </header>

      <section id="features" className="features">
        <div className="section-inner">
          <h2>Everything you need</h2>
          <p className="section-sub">Structured path from your first character to fluent conversation.</p>
          <div className="features-grid">
            <a href="/kana" className="feature-card">
              <div className="feature-icon">あ</div>
              <h3>Kana Mastery</h3>
              <p>Learn all 46 hiragana and 46 katakana with interactive quizzes and stroke order practice.</p>
            </a>
            <div className="feature-card">
              <div className="feature-icon">漢</div>
              <h3>Kanji System</h3>
              <p>Progressive kanji learning from JLPT N5 to N1 with mnemonics and context sentences.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">語</div>
              <h3>Vocabulary Builder</h3>
              <p>Spaced repetition system that adapts to your pace. Remember words, not just cram them.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">文</div>
              <h3>Grammar Lessons</h3>
              <p>Clear explanations with real examples. From basic particles to advanced structures.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="levels" className="levels">
        <div className="section-inner">
          <h2>Structured by level</h2>
          <p className="section-sub">Follow the JLPT path or learn at your own pace.</p>
          <div className="levels-grid">
            {[
              { level: 'N5', title: 'Beginner', desc: 'Hiragana, katakana, basic kanji, everyday phrases', color: '#22c55e' },
              { level: 'N4', title: 'Elementary', desc: 'More kanji, grammar patterns, daily conversation', color: '#3b82f6' },
              { level: 'N3', title: 'Intermediate', desc: 'Complex grammar, reading practice, listening skills', color: '#a855f7' },
              { level: 'N2', title: 'Upper-Int.', desc: 'News articles, business Japanese, nuanced grammar', color: '#f59e0b' },
              { level: 'N1', title: 'Advanced', desc: 'Literature, formal writing, near-native fluency', color: '#ef4444' },
            ].map((item) => (
              <div key={item.level} className="level-card" style={{ borderTopColor: item.color }}>
                <span className="level-badge" style={{ background: item.color }}>{item.level}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="cta">
        <div className="section-inner">
          <h2>Ready to forge your Japanese?</h2>
          <p>Start learning today. No account required.</p>
          <a href="/kana" className="btn btn-primary btn-lg">Start Learning Free</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="logo-jp">鍛</span>
            <span>Nihongo Forge</span>
          </div>
          <p className="footer-copy">&copy; 2026 Nihongo Forge. Built with passion for Japanese learners.</p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kana" element={<Kana />} />
      <Route path="/kana/:type/drill" element={<KanaDrill />} />
    </Routes>
  )
}

export default App
