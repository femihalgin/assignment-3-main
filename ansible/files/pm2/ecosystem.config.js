module.exports = {
    apps : [{
        name        : "user-service",
        script      : "app.js",
        watch       : true,
        merge_logs  : true,
        cwd         : "/var/www/user-services/",
    },{
        name        : "content-service",
        script      : "app.js",
        watch       : true,
        merge_logs  : true,
        cwd         : "/var/www/content-service/",
    }]
}
