module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`NTask API _ porta ${app.get("port")}`);
    });
}