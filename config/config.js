module.exports = {
    app : {
        title : 'My App(by Uge)',
        description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
        keywords: 'mongodb, express, angularjs, node.js, mongoose, passport',
        googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
    },
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
    db : {
        //uri : 'mongodb://localhost:27017/windlogDB' //DB on local computer
        uri : 'mongodb://ugeHidalgo:gunnar12A@ds149501.mlab.com:49501/windlogdb' //DB on mLab
    }
}