export const SCANS_DATA = [
    { id: 1, name: 'Web App Servers', type: 'Greybox', status: 'Completed', progress: 100, vulns: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: '4d ago' },
    { id: 2, name: 'Customer Portal', type: 'Greybox', status: 'Completed', progress: 100, vulns: { critical: 2, high: 5, medium: 14, low: 30 }, lastScan: '5d ago' },
    { id: 3, name: 'Internal API Gateway', type: 'Whitebox', status: 'Completed', progress: 100, vulns: { critical: 0, high: 2, medium: 8, low: 12 }, lastScan: '1w ago' },
    { id: 4, name: 'Payment Processing Service', type: 'Greybox', status: 'Completed', progress: 100, vulns: { critical: 8, high: 15, medium: 20, low: 10 }, lastScan: '2w ago' },
    { id: 5, name: 'HR Dashboard', type: 'Blackbox', status: 'Completed', progress: 100, vulns: { critical: 1, high: 4, medium: 10, low: 22 }, lastScan: '3w ago' },
    { id: 6, name: 'Legacy Marketing Site', type: 'Blackbox', status: 'Completed', progress: 100, vulns: { critical: 12, high: 25, medium: 40, low: 80 }, lastScan: '1m ago' },
    { id: 7, name: 'Staging Environment', type: 'Greybox', status: 'Scheduled', progress: 0, vulns: { critical: 0, high: 0, medium: 0, low: 0 }, lastScan: 'Pending' },
    { id: 8, name: 'Nightly Core Scans', type: 'Whitebox', status: 'Scheduled', progress: 0, vulns: { critical: 0, high: 0, medium: 0, low: 0 }, lastScan: 'Pending' },
    { id: 9, name: 'IoT Devices Firmware', type: 'Blackbox', status: 'Failed', progress: 15, vulns: { critical: 2, high: 4, medium: 8, low: 1 }, lastScan: '3d ago' },
    { id: 10, name: 'Temporary Data Stores', type: 'Blackbox', status: 'Failed', progress: 45, vulns: { critical: 5, high: 8, medium: 12, low: 4 }, lastScan: '3d ago' },
];

export const ACTIVITY_LOG = [
    { time: '09:00:00', type: 'info', content: 'I\'ll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.', highlight: 'helpdesk.democorp.com' },
    { time: '09:01:00', type: 'info', content: 'Good! target is online. Now let me perform port scanning to identify running services.' },
    { time: '09:02:00', type: 'result', content: 'Excellent reconnaissance results:\n- helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\nLet me probe the web server on target first to understand its structure.' },
    { time: '09:03:00', type: 'info', content: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.', highlight: '/password/test', badge: '"TODO: Delete the testing account (test:test)"' },
    { time: '09:04:00', type: 'warning', content: 'The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to \'#\' which means the current page. Let me try a different approach.' },
    { time: '09:05:00', type: 'info', content: 'It redirects back to /password/test. Let me check if there\'s an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.', highlight: 'test:test' },
    { time: '09:06:00', type: 'critical', content: 'Great! I can access the dashboard using the \'X-UserId: 10032\' header. The dashboard shows "Welcome, John Doe". This suggests an **IDOR vulnerability** - I can access any user\'s dashboard by just changing the X-UserId header. Let me explore more of the application...', highlight: '**IDOR vulnerability**', badge: "'X-UserId: 10032'" },
];

export const VERIFICATION_LOOPS = [
    { time: '09:01:15', type: 'info', content: 'Verifying port 80 HTTP response headers. Server header confirmed: Apache/2.4.65' },
    { time: '09:03:45', type: 'info', content: 'Running dictionary attack on hidden directories... Found /admin, /test, /backup.' },
    { time: '09:06:20', type: 'critical', content: 'Verified IDOR vulnerability by incrementing X-UserId from 10000 to 10100. Successfully retrieved profiles for 95 different users.' }
];

export const FINDINGS = [
    { id: 1, severity: 'Critical', time: '10:45:23', title: 'SQL Injection in Authentication Endpoint', path: '/api/users/profile', desc: 'Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.' },
    { id: 2, severity: 'High', time: '10:45:23', title: 'Unauthorized Access to User Metadata', path: '/api/auth/login', desc: 'Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.' },
    { id: 3, severity: 'Medium', time: '10:45:23', title: 'Broken Authentication Rate Limiting', path: '/api/search', desc: 'No effective rate limiting detected on login attempts. Automated brute-force attempts possible.' },
    { id: 4, severity: 'Low', time: '10:46:05', title: 'Server Version Disclosure', path: 'headers', desc: 'Web server is configured to leak its exact version number (Apache 2.4.65) via the Server HTTP response header.' },
    { id: 5, severity: 'Critical', time: '10:52:11', title: 'Insecure Direct Object Reference (IDOR)', path: '/api/dashboard', desc: 'Accessing user dashboard relies on trusting client-provided X-UserId header without associated session validation.' }
];
