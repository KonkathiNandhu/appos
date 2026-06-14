import { createServer } from 'http';
import app from './app.js';

const PORT = parseInt(process.env.PORT || '8080', 10);

const server = createServer(app);
server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 Shilparamam API running on http://localhost:${PORT}`);
    console.log(`   Health check: http://localhost:${PORT}/api/health\n`);
});
