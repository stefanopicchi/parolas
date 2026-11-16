import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header } from './components/Layout'
import { AppProvider } from './state/AppContext'
import { AssistantPage } from './pages/AssistantPage'
import { CoursePage } from './pages/CoursePage'
import { GrammarPage } from './pages/GrammarPage'
import { HomePage } from './pages/HomePage'
import { LessonPage } from './pages/LessonPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ReviewPage } from './pages/ReviewPage'
import { SettingsPage } from './pages/SettingsPage'
import { TheoryPage } from './pages/TheoryPage'
import { VocabularyPage } from './pages/VocabularyPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="container main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/corso/:courseId" element={<CoursePage />} />
            <Route path="/lezione/:courseId/:lessonId" element={<LessonPage />} />
            <Route path="/grammatica/:courseId/:topicId" element={<GrammarPage />} />
            <Route path="/teoria" element={<TheoryPage />} />
            <Route path="/vocabolario" element={<VocabularyPage />} />
            <Route path="/ripasso" element={<ReviewPage />} />
            <Route path="/assistente" element={<AssistantPage />} />
            <Route path="/impostazioni" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AppProvider>
  )
}
