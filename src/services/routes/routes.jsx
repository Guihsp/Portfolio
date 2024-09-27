import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Skills } from '../../pages/Skills';
import { Projects } from '../../pages/Projects';
import { Contact } from '../../pages/Contact';
import { Error404 } from '../../pages/Error404';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
}
