module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.userdata = req.body

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: req.body
    };
}