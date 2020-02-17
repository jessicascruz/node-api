module.exports = app => {
    app.db.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`NTask API _ porta ${app.get("port")}`);
        });
    });
}