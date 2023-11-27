import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layot/Layout';
import About from './pages/about/About';
import Home from './pages/home/Home';
import ExamPreparation from './pages/exam-preparation/ExamPreparation';
import Feedback from './pages/feedback/Feedback';
import News from './pages/news/News';
import HowToFind from './pages/how-to-find/HowToFind';
import Teachers from './pages/teachers/Teachers';
import Schedule from './pages/schedule/Schedule';
import Students from './pages/students/Students';
import StudentsByYear from "./pages/students-by-year/StudentsByYear";
import './styles/App.css';
import Post from "./pages/post/Post";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exam-preparation" element={<ExamPreparation />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/news" element={<News itemsPerPage={10}/>} />
          <Route path="/how-to-find" element={<HowToFind />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:studentYear" element={<StudentsByYear />} />
          <Route path="/news/post/:postId" element={<Post />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
