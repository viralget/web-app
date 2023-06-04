const Ziggy = { "url": "https:\/\/demo.viralget.com.ng", "port": null, "defaults": {}, "routes": { "sanctum.csrf-cookie": { "uri": "sanctum\/csrf-cookie", "methods": ["GET", "HEAD"] }, "ignition.healthCheck": { "uri": "_ignition\/health-check", "methods": ["GET", "HEAD"] }, "ignition.executeSolution": { "uri": "_ignition\/execute-solution", "methods": ["POST"] }, "ignition.updateConfig": { "uri": "_ignition\/update-config", "methods": ["POST"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "auth.social": { "uri": "auth\/social", "methods": ["GET", "HEAD"] } } };

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
