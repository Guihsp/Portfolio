import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Projects } from '../../pages/Projects';
import { Contact } from '../../pages/Contact';
import { ProjectDetails } from '../../pages/Project';
import { Error404 } from '../../pages/Error404';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};