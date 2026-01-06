import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import {
  Home,
  Mentors,
  HowItWorksPage,
  Topics,
  Pricing,
  BecomeMentor,
  About,
  Contact,
} from './pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentors/:mentorId" element={<Mentors />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topicId" element={<Topics />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/become-mentor" element={<BecomeMentor />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback routes */}
          <Route path="/blog" element={<Home />} />
          <Route path="/faq" element={<Contact />} />
          <Route path="/privacy" element={<About />} />
          <Route path="/terms" element={<About />} />
          <Route path="/cookies" element={<About />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
